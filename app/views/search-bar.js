const Vue = require('../assets/js/vue.min')

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

function queryChanged () {
  this.$emit('query', this.query)
}
