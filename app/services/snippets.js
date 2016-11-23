const fs = require('fs')
const path = require('path')
const snippetsDir = path.join(__dirname, '..', '..', 'snippets')
let snippets = null

// Load snippets
snippets = fs
  .readdirSync(snippetsDir)
  .map(filename => ({
    id: filename,
    code: fs.readFileSync(path.join(snippetsDir, filename), 'utf8').replace('<!doctype html>', '').trim()
  }))

// Search snippets by id
module.exports.search = (query) => {
  if (!snippets) return []
  if (!query) return snippets
  if (query.length < 2) return []
  return snippets.filter(snippet => snippet.id.indexOf(query) >= 0)
}
