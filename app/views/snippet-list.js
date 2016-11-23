const Vue = require('../assets/js/vue.min')

// A list of snippets
Vue.component('snippet-list', {
  props: [
    'snippets'
  ],
  methods: {
    select
  },
  template:
    '<div class="ui divided items">' +
    '  <div v-for="snippet in snippets" class="item" @click="select(snippet)">' +
    '    <div class="middle aligned content" style="pointer-events: none">' +
    '      <div v-html="snippet.code"></div>' +
    '    </div>' +
    '  </div>' +
    '</div>'
})

// Notify parent when a snippet is selected
function select (snippet) {
  this.$emit('select', snippet)
}
