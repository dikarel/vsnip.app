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
    '<div>' +
    '  <div class="ui input">' +
    '    <input type="text" placeholder="Search" v-model="query" v-on:input="queryChanged">' +
    '  </div>' +
    '  <hr/>' +
    '</div>'
})

// Notify parent when user inputs query
function queryChanged () {
  this.$emit('query', this.query)
}
