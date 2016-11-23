const Vue = require('../assets/js/vue.min')

Vue.component('app', {
  methods: {
    queryChanged
  },
  template: '<search-bar v-on:query="queryChanged"/>'
})

function queryChanged (e) {
  console.log(e)
}
