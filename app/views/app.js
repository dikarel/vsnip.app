const Vue = require('vue/dist/vue')
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
    '  <toast :text="toastText"/>' +
    '  <snippet-list :snippets="snippets" @select="snippetSelected"/>' +
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
// Also re-focus back to search bar
function snippetSelected ({code}) {
  toast.show('Copied to clipboard')
  copy(code)
  console.log(this)
}
