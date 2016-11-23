const Vue = require('../assets/js/vue.min')

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

function select (snippet) {
  this.$emit('select', snippet)
}
