const m = require('mithril')
const style = 'padding-top: 16px'

// VisualSnippet is a clickable HTML snippet
const VisualSnippet = {
  view: (ctrl, args) => {
    const snippets = (args && args.snippets) || []

    return m('.ui.items.divided', {style},
      snippets.map(s => m('.ui.item', {style: 'padding: 8px'}, m.trust(s.code)))
    )
  }
}

module.exports = VisualSnippet
