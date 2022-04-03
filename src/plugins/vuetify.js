// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#FCFBFB',
        secondary: '#F0DDD1',
        accent: '#FF858D',
      },
      dark: {
        primary: '#212121',
        secondary: '#4D7EA8',
        accent: '#D6515A',
        info: '#958FB4',
        success: '#D6EFFF',
      },
    },
    dark: true,
  },
})

export default vuetify