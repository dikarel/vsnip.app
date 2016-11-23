const Vue = require('../assets/js/vue.min')

// A toast notification
Vue.component('toast', {
  props: [
    'text'
  ],
  template: '<div v-if="text" class="toast">{{text}}</div>'
})
