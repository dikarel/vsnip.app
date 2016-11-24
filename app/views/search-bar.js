const Vue = require('vue/dist/vue')

// A search bar
Vue.component('search-bar', {
  data: () => ({
    query: ''
  }),
  methods: {
    queryChanged,
    refocus
  },
  template:
    '<div class="ui form search-bar">' +
    '  <div class="field">' +
    '    <div class="ui icon input">' +
    '      <i class="search icon"></i>' +
    '      <input type="text" placeholder="Search UI components" v-model="query" @input="queryChanged" autofocus="autofocus" @blur="refocus">' +
    '    </div>' +
    '  </div>' +
    '</div>'
})

// Notify parent when user inputs query
function queryChanged () {
  this.$emit('query', this.query)
}

// Keep focus on the text field
function refocus () {
  setTimeout(() => this.$el.querySelector('input').focus(), 0)
}
