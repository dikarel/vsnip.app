const Vue = require('../assets/js/vue.min')
const snippets = require('../services/snippets')
const copy = require('copy-to-clipboard')
const toast = require('../services/toast')

// Top-level app container
Vue.component('app', {
  data: () => ({
    snippets: snippets.search(''),
    toastText: '',
    query: ''
  }),
  beforeMount,
  beforeDestroy,
  methods: {
    queryChanged,
    snippetSelected
  },
  template:
    '<div>' +
    '  <search-bar @query="queryChanged"/>' +
    '  <snippet-list :snippets="snippets" @select="snippetSelected"/>' +
    '  <toast :text="toastText"/>' +
    '</div>'
})

// Listen to toast events before mounting
function beforeMount () {
  this.textChangedListener = toast.addListener(toast.TEXT_CHANGED, (text) => {
    this.toastText = text
  })
}

// Clean listeners before destroying
function beforeDestroy () {
  toast.removeListener(toast.TEXT_CHANGED, this.textChangedListener)
}

// Update snippets list when query changes
function queryChanged (query) {
  if (query === this.query) return
  this.snippets = snippets.search(query)
  this.query = query
}

// Copy to clipboard and display toast when snippet is selected
function snippetSelected ({code}) {
  toast.show('Copied to clipboard')
  copy(code)
}
