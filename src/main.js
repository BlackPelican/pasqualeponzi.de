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
        length: 21,
        show: 40
      },
      {
        name: "2019",
        length: 43,
        show: 40
      },
      {
        name: "2018-2012",
        length: 71,
        show: 40
      },
      {
        name: "2011-2002",
        length: 103,
        show: 40
      },
      {
        name: "bis 2001",
        length: 104,
        show: 40
      }
    ],
    foldersCurrIndex: 0,
    showGallery: true,
    showContact: false,
    showImprint: false,
    galleryColumnsQty: undefined,
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
    setShowContact: (state, show) => state.showContact = show,
    setShowImprint: (state, show) => state.showImprint = show,
    setGalleryColumnsQty: (state, qty) => state.galleryColumnsQty = qty,
    setWindowWidth: (state, width) => state.windowWidth = width,
    setFoldersCurrIndex: (state, folder) => state.foldersCurrIndex = folder,
    setFoldersCurrShow: (state, show) => state.folders[state.foldersCurrIndex].show = show,
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
