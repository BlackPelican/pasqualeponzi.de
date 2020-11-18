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
        size: 20,
        show: 20
      },
      {
        name: "2019",
        size: 43,
        show: 43
      },
      {
        name: "2018-2012",
        size: 67,
        show: 40
      },
      {
        name: "2011-2002",
        size: 100,
        show: 40
      },
      {
        name: "bis 2001",
        size: 81,
        show: 41
      }
    ],
    foldersCurrIndex: 0,
    showGallery: false,
    showContact: false,
    showImprint: false,
    showOverlay: false,
    showAbout: true,
    galleryColumnsQty: undefined,
    imgCurr: null,
    windowWidth: undefined,
  },
  getters: {
    foldersCurr: state => {
      return state.folders[state.foldersCurrIndex]
    }
  },
  mutations: {
    setGalleryImgsMax: (state, max) => state.galleryImgsMax = max,
    setGallerySubPath: (state, path) => state.gallerySubpath = path,
    setShowGallery: (state, show) => state.showGallery = show,
    setShowAbout: (state, show) => state.showAbout = show,
    setShowContact: (state, show) => state.showContact = show,
    setShowImprint: (state, show) => state.showImprint = show,
    setShowOverlay: (state, show) => state.showOverlay = show,
    setGalleryColumnsQty: (state, qty) => state.galleryColumnsQty = qty,
    setWindowWidth: (state, width) => state.windowWidth = width,
    setFoldersCurrIndex: (state, folder) => state.foldersCurrIndex = folder,
    setFoldersCurrShow: (state, show) => state.folders[state.foldersCurrIndex].show = show,
    setImgCurr: (state, img) => state.imgCurr = img,
    hideAll: state => {
      state.showContact = false;
      state.showGallery = false;
      state.showImprint = false;
      state.showAbout = false;
    }
  }
});

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
