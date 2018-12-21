import 'babel-polyfill'
import 'common/js/hack'
import Vue from 'vue'
import App from './App'
import router from './router/router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

import 'lib-flexible'

// import 'common/stylus/index.styl'
// import 'common/stylus/index.scss'
/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'

fastclick.attach(document.body)

Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})

// const historySongs = loadPlay()
// processSongsUrl(historySongs).then((songs) => {
//   console.log(store)
//   console.log(store)
//   store.commit(SET_PLAY_HISTORY, songs)
// })

// const favoriteSongs = loadFavorite()
// processSongsUrl(favoriteSongs).then((songs) => {
//   store.commit(SET_FAVORITE_LIST, songs)
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
