const Vue = require('vue/dist/vue')

// A search bar
Vue.component('search-bar', {
  data: () => ({
    query: ''
  }),
  methods: {
    queryChanged
  },
  template:
    '<div class="ui form search-bar">' +
    '  <div class="field">' +
    '    <div class="ui icon input">' +
    '      <i class="search icon"></i>' +
    '      <input type="text" placeholder="Search UI components" v-model="query" v-on:input="queryChanged" autofocus="autofocus">' +
    '    </div>' +
    '  </div>' +
    '</div>'
})

// Notify parent when user inputs query
function queryChanged () {
  this.$emit('query', this.query)
}
