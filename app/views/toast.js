const Vue = require('vue/dist/vue')

// A toast notification
Vue.component('toast', {
  props: [
    'text'
  ],
  template: '<div v-if="text" class="toast">{{text}}</div>'
})
