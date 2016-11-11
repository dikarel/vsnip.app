// @flow

const $ = global.jQuery = require('../assets/js/jquery.min.js')
const Clipboard = require('../assets/js/clipboard.min.js')
const snippets = require('../app/snippets')
require('../assets/js/semantic.min.js')
const h = require('highland')

let lastQuery = ''

$(function () {
  console.log('Initializing')
  snippets.load()

  const initialized = h([null])
  const searchQueried = h('keydown', $('input'))
    .debounce(100)
    .map(() => $('input').val())
    .consume(dedupe)

  // Search and update UI on input
  h([initialized, searchQueried])
    .series()
    .map(snippets.search)
    .map(snippets => snippets.map(renderSnippet))
    .each(renderSnippets)

  return new Clipboard('[data-clipboard-text]')
})

function renderSnippets (snippetEntries) {
  $('#snippets').html('')
  snippetEntries.forEach(entry => {
    $('#snippets').append(entry)
  })
}

function renderSnippet (snippet) {
  return $('<div><div style="pointer-events: none">' + snippet.code + '</div></div>')
    .attr('data-clipboard-text', snippet.code)
    .attr('style', 'cursor: pointer; margin: 16px')
    .click(function () {
      $(this).children('div').transition('pulse')
    })
}

function dedupe (err, item, push, next) {
  if (err) {
    push(err)
    return next()
  }

  if (item === h.nil) {
    return push(null, item)
  }

  if (lastQuery !== item) {
    lastQuery = item
    push(null, item)
  }

  next()
}
