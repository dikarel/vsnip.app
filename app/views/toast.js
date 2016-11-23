const Vue = require('vue/dist/vue')

// A toast notification
Vue.component('toast', {
  props: [
    'text'
  ],
  template:
    '<transition name="toastfade">' +
    '  <div v-if="text">' +
    '    <div class="ui nag">' +
    '      <span class="title">{{text}}</span>' +
    '    </div>' +
    '  </div>' +
    '</transition>'
})
