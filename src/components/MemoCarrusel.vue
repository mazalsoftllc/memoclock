<template>
  <div class="memo-carousel">
    <b-carousel controls controls-variant="dark" hide-control-text :prev-text="'Anterior'" :next-text="'Siguiente'">

      
      <b-carousel-slide img-src="https://i.ibb.co/tLtzQqr/carrusel-1.png" caption=""></b-carousel-slide>
      <b-carousel-slide img-src="https://i.ibb.co/DQ35L9H/carrusel-3.png" caption=""></b-carousel-slide>
      <b-carousel-slide img-src="https://i.ibb.co/LtSys6h/carrusel-2.png" caption=""></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'MemoCarrusel'
}
</script>

<style>
/* Estilos específicos para el componente MemoCarrusel */
.memo-carousel {
  max-width: 800px; /* Ancho máximo del carrusel */
  margin: 0 auto; /* Centrar el carrusel en el contenedor */
}

/* Estilos específicos para los slides del carrusel */
.memo-carousel b-carousel-slide {
  border: 2px solid #ddd; /* Borde del slide */
  border-radius: 8px; /* Bordes redondeados */
  overflow: hidden; /* Ocultar contenido que se desborda */
}

.memo-carousel b-carousel-caption {
  background-color: rgba(0, 0, 0, 0.5); /* Fondo semi-transparente para el título del slide */
  color: #fff; /* Color del texto del título */
  padding: 10px; /* Espaciado interno para el título */
  position: absolute; /* Posición absoluta para superponer el título sobre el slide */
  bottom: 0; /* Alinear el título en la parte inferior */
  width: 100%; /* Ancho completo del título */
}
</style>
