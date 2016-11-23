const Vue = require('vue/dist/vue')

// A toast notification
Vue.component('toast', {
  props: [
    'text'
  ],
  template:
    '<div v-if="text" class="ui nag" style="display: block">' +
    '  <span class="title">{{text}}</span>' +
    '  <i class="close icon"></i>' +
    '</div>'
})
