<template>
  <div>
    <b-container>
      <b-row class="mb-2">
        <b-col>
          <h2 class="text-center">
            {{ currentYear }}
            <b-button @click="previousYear" variant="info" class="ml-2">&lt;&lt; Año Anterior</b-button>
            <b-button @click="nextYear" variant="info" class="ml-2">Siguiente Año &gt;&gt;</b-button>
          </h2>
        </b-col>
      </b-row>

      <b-row>
        <b-col v-for="mes in meses" :key="mes.indice" class="mb-4">
          <h4 class="text-center">{{ mes.nombre }}</h4>
          <b-table striped hover :items="getDiasDelMes(mes.indice)">
            <template v-slot:cell(dia)="data">
              <b-button
                :class="{ 'bg-danger': esFeriado(data.item), 'bg-success': tieneEvento(data.item) }"
                @click="manejarClickEnDia(data.item)"
                v-b-popover.hover="getDescripcionFeriado(data.item)"
              >
                {{ data.item.dia }}
              </b-button>
            </template>
          </b-table>
        </b-col>
      </b-row>

      <!-- Modal para operaciones CRUD -->
      <b-modal v-model="modalVisible" title="Detalles del Evento" no-close-on-backdrop no-close-on-esc hide-footer>
        <form @submit.prevent="guardarEvento">
          <b-form-group label="Hora" label-for="horaEvento">
            <b-form-input v-model="evento.hora" id="horaEvento" type="text" required></b-form-input>
          </b-form-group>

          <b-form-group label="Título" label-for="tituloEvento">
            <b-form-input v-model="evento.titulo" id="tituloEvento" type="text" required></b-form-input>
          </b-form-group>

          <b-form-group label="Contenido" label-for="contenidoEvento">
            <b-form-textarea v-model="evento.contenido" id="contenidoEvento" rows="3" required></b-form-textarea>
          </b-form-group>

          <b-button type="submit" variant="primary">Guardar</b-button>
        </form>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
      meses: [
        { indice: 0, nombre: "Enero" },
        { indice: 1, nombre: "Febrero" },
        { indice: 2, nombre: "Marzo" },
        { indice: 3, nombre: "Abril" },
        { indice: 4, nombre: "Mayo" },
        { indice: 5, nombre: "Junio" },
        { indice: 6, nombre: "Julio" },
        { indice: 7, nombre: "Agosto" },
        { indice: 8, nombre: "Septiembre" },
        { indice: 9, nombre: "Octubre" },
        { indice: 10, nombre: "Noviembre" },
        { indice: 11, nombre: "Diciembre" },
      ],
      feriados: [],
      eventos: [],
      diaSeleccionado: null,
      modalVisible: false,
      evento: {
        hora: '',
        título: '',
        contenido: '',
      },
    };
  },
  watch: {
    currentYear: 'obtenerDatos',
  },
  mounted() {
    this.obtenerDatos();
  },
  methods: {
    obtenerDatos() {
      this.obtenerFeriados();
      this.cargarEventosDesdeLocalStorage();
    },
    async obtenerFeriados() {
      try {
        const respuesta = await fetch(`https://date.nager.at/api/v2/PublicHolidays/${this.currentYear}/mx`);
        const datos = await respuesta.json();
        this.feriados = datos;
      } catch (error) {
        console.error('Error al obtener feriados:', error);
      }
    },
    getDiasDelMes(indiceMes) {
      const dias = [];
      const diasEnMes = 30;

      for (let dia = 1; dia <= diasEnMes; dia++) {
        dias.push({ dia, mes: indiceMes, año: this.currentYear });
      }

      return dias;
    },
    esFeriado(dia) {
      const fechaFormateada = `${this.currentYear}-${String(dia.mes + 1).padStart(2, '0')}-${String(dia.dia).padStart(2, '0')}`;
      return this.feriados.some(feriado => feriado.date === fechaFormateada);
    },
    tieneEvento(dia) {
      const fechaFormateada = this.formatoFecha(dia);
      return this.eventos.some(evento => evento.fecha === fechaFormateada);
    },
    formatoFecha(dia) {
      return `${this.currentYear}-${String(dia.mes + 1).padStart(2, '0')}-${String(dia.dia).padStart(2, '0')}`;
    },
    getDescripcionFeriado(dia) {
      const fechaFormateada = `${this.currentYear}-${String(dia.mes + 1).padStart(2, '0')}-${String(dia.dia).padStart(2, '0')}`;
      const feriado = this.feriados.find(feriado => feriado.date === fechaFormateada);
      return feriado ? feriado.localName : 'No es feriado';
    },
    manejarClickEnDia(dia) {
      this.diaSeleccionado = dia;
      this.abrirModal();
    },
    abrirModal() {
      // Cargar evento existente si existe alguno
      const fechaFormateada = this.formatoFecha(this.diaSeleccionado);
      const eventoExistente = this.eventos.find(evento => evento.fecha === fechaFormateada);
      if (eventoExistente) {
        this.evento = { ...eventoExistente };
      } else {
        this.evento = { hora: '', titulo: '', contenido: '' };
      }

      this.modalVisible = true;
    },
    guardarEvento() {
      const fechaFormateada = this.formatoFecha(this.diaSeleccionado);
      const indiceEventoExistente = this.eventos.findIndex(evento => evento.fecha === fechaFormateada);

      if (indiceEventoExistente !== -1) {
        // Actualizar evento existente
        this.$set(this.eventos, indiceEventoExistente, { ...this.evento, fecha: fechaFormateada });
      } else {
        // Agregar nuevo evento
        this.eventos.push({ ...this.evento, fecha: fechaFormateada });
      }

      // Guardar eventos en localStorage
      localStorage.setItem('eventos', JSON.stringify(this.eventos));

      // Cerrar el modal
      this.modalVisible = false;

      // Registrar eventos en la consola
      console.log('Todos los Eventos:', this.eventos);
    },
    cargarEventosDesdeLocalStorage() {
      const eventosGuardados = localStorage.getItem('eventos');
      if (eventosGuardados) {
        this.eventos = JSON.parse(eventosGuardados);
      }
    },
    previousYear() {
      this.currentYear -= 1;
    },
    nextYear() {
      this.currentYear += 1;
    },
  },
};
</script>

<style>
/* Agrega tus estilos personalizados aquí */
</style>
