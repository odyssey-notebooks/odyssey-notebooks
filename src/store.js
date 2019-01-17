import Vue from 'vue'
import SimpleVuex from 'simple-vuex'

Vue.use(SimpleVuex)

export default SimpleVuex.Store({
  modules: {
    app: {
      state: {
        height: 0,
        width: 0,
        mode: 'mobile',
        menuExpanded: false,
        editing: false
      }
    }
  }
})
