// HolidayService.js

import axios from 'axios';

const baseURL = 'https://date.nager.at/api/v2';

export default {
  getHolidays(year, countryCode) {
    const url = `${baseURL}/PublicHolidays/${year}/${countryCode}`;
    return axios.get(url);
  },
};
