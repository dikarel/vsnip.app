const Vue = require('../assets/js/vue.min')
const snippets = require('../services/snippets')
const copy = require('copy-to-clipboard')

snippets.load()

Vue.component('app', {
  data: () => ({
    snippets: snippets.search(''),
    query: ''
  }),
  methods: {
    queryChanged,
    snippetSelected
  },
  template:
    '<div>' +
    '  <search-bar @query="queryChanged"/>' +
    '  <snippet-list :snippets="snippets" @select="snippetSelected"/>' +
    '  <toast/>' +
    '</div>'
})

function queryChanged (query) {
  if (query === this.query) return
  this.snippets = snippets.search(query)
  this.query = query
}

function snippetSelected ({code}) {
  copy(code)
}
