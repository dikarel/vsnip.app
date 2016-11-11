// @flow

const fs = require('fs')
const path = require('path')
const snippetsDir = path.join(__dirname, '..', 'assets', 'snippets')
let snippets = null

// Manages snippets
module.exports = {
  isLoaded,
  load,
  search
}

// Return whether or not snippets have been loaded
function isLoaded () {
  return !!snippets
}

// Load snippets
function load () {
  snippets = fs
    .readdirSync(snippetsDir)
    .map(filename => ({
      id: filename,
      code: fs.readFileSync(path.join(snippetsDir, filename), 'utf8').replace('<!doctype html>', '').trim()
    }))
}

// Search snippets by id
function search (query:string) {
  if (!snippets) return []
  if (!query || query.length < 2) return snippets
  return snippets.filter(snippet => snippet.id.indexOf(query) >= 0)
}
