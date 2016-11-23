// @flow

const m = require('mithril')
const style = 'padding-top: 16px'

// Pickerlist is a list of visual snippets
const Pickerlist = {
  view: (_, args) => {
    const snippets = (args && args.snippets) || []

    return m('.ui.items.divided', {style},
      snippets.map(s => m('.ui.item', {style: 'padding: 8px'}, m.trust(s.code)))
    )
  }
}

module.exports = Pickerlist
