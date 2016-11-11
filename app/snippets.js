// @flow

const fs = require('fs')
const path = require('path')
const snippetsDir = path.join(__dirname, '..', 'snippets')
let snippets = null

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
      code: fs.readdirSync(path.join(snippetsDir, filename), 'utf8')
    }))
}

// Search snippets by id
function search (query:string) {
  if (!snippets) return []
  return snippets.filter(snippet => snippet.id.indexOf(query) >= 0)
}

module.exports = {
  isLoaded,
  load,
  search
}
