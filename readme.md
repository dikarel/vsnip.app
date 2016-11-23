# v-snip

Visual snippet copy-paste tool

## Quickstart

Install [yarn](https://yarnpkg.com)

```bash
yarn        # Install dependencies
yarn test   # Run tests
yarn start  # Start v-snip
```

## Goals

- G1: Make something genuinely useful
- G2: Get dev community support

## Decisions

- D1: Use Vue.js as framework of choice
  - Contenders: Angular 1, React, Vue, JQuery
  - Should be idiomatically functional, as opposed to imperative to make it
    easier to verify correctness
  - Vue.js claims to combine the good parts of Angular 1 and React
  - To support G2, it should be something popular (actively maintained and has wide community support)
  - To support G2, it should be something easy to pick up as well
  - Vue.js has a

- D2: Not using Bower
  - Not pulling in many third-party JS/CSS assets
  - Benefit not yet worth complicating build process

- D3: Not using ES6 import/exports
  - Sometimes we want to maintain control when imports happen (e.g. for mocking)

## Todo

- Continuous development pipeline
- All Semantic ui elements
- All Bootstrap ui elements
- All Font awesome ui elements
- All Foundation ui elements
- Handle misspellings
- Handle synonyms
- UX pattern snippets
- User-made snippets
- Visual Studio Code integration
- Pug/Jade
- React/Angular

## Resources

- https://github.com/mawie81/electron-window-state
- https://github.com/electron/spectron
- https://github.com/sindresorhus/electron-config
- https://github.com/jviotti/electron-json-storage
- https://github.com/sindresorhus/electron-context-menu
- https://github.com/louischatriot/nedb