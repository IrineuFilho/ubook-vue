import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#fa7268',
        secondary: '#dbff90'
      }
    },
    icons: {
      iconfont: 'mdi'
    }
  }
})
