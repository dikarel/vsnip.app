// @flow

const m = require('mithril')

const SearchBar = {
  view: () => {
    return m('.ui.menu.bottom.fixed',
      m('.item', {style: 'min-width: 100%'},
        m('.ui.transparent.icon.input', [
          m('input', {type: 'text', placeholder: 'Search', autofocus: 'autofocus'}),
          m('i.search.link.icon')
        ])
      )
    )
  }
}

module.exports = SearchBar
