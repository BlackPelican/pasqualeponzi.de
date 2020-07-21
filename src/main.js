import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)



const store = new Vuex.Store({
  state: {
    galleryImgsMax: 78,
    galleryImgsShow: 24,
    showOverlay: false,
    showGallery: true,
    showContact: false,
    currImg: "",
    columnsQty: undefined,
    windowWidth: undefined
  },
  mutations: {
    setGalleryImgsMax: (state, max) => state.galleryImgsMax = max,
    setGalleryImgsShow: (state, show) => state.galleryImgsShow = show,
    setShowOverlay: (state, show) => state.showOverlay = show,
    setShowGallery: (state, show) => state.showGallery = show,
    setShowContact: (state, show) => state.showContact = show,
    setCurrImg: (state, img) => state.currImg = img,
    setColumnsQty: (state, qty) => state.columnsQty = qty,
    setWindowWidth: (state, width) => state.windowWidth = width
  }
});

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
