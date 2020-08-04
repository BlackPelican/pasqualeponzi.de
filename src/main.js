import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    folders: [
      {
        name: "2020",
        length: 21
      },
      {
        name: "2019-2020",
        length: 43
      },
      {
        name: "2012-2018",
        length: 74
      },
      {
        name: "2002-2011",
        length: 103
      },
      {
        name: "bis 2001",
        length: 104
      }
    ],
    foldersCurrIndex: 0,
    showGallery: true,
    showContact: false,
    showImprint: false,
    galleryColumnsQty: undefined,
    galleryImgsShow: 30,
    windowWidth: undefined,
  },
  getters: {
    foldersCurr: state => {
      return state.folders[state.foldersCurrIndex]
    }
  },
  mutations: {
    setGalleryImgsMax: (state, max) => state.galleryImgsMax = max,
    setGalleryImgsShow: (state, show) => state.galleryImgsShow = show,
    setGallerySubPath: (state, path) => state.gallerySubpath = path,
    setShowGallery: (state, show) => state.showGallery = show,
    setShowContact: (state, show) => state.showContact = show,
    setShowImprint: (state, show) => state.showImprint = show,
    setGalleryColumnsQty: (state, qty) => state.galleryColumnsQty = qty,
    setWindowWidth: (state, width) => state.windowWidth = width,
    setFoldersCurrIndex: (state, folder) => state.foldersCurrIndex = folder,
    hideAll: state => {
      state.showContact = false;
      state.showGallery = false;
      state.showImprint = false;
    }
  }
});

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
