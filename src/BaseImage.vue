<template>
  <div class="base-image">
    <img
      v-show="hasLoaded"
      class="image"
      :class="{'image--full-width': $store.state.windowWidth <= 600}"
      :src="img"
      alt="img"
      @load="loaded"
      @click="showOverlay"
    />
    <img
      v-show="!hasLoaded"
      class="image image--placeholder"
      :class="{'image--full-width': $store.state.windowWidth <= 600}"
      :src="img.replace('loaded', 'placeholder')"
      alt="img"
    />
  </div>
</template>

<script>
export default {
  name: "BaseImage",
  props: {
    img: String,
  },
  components: {},
  data: function () {
    return {
      hasLoaded: false,
    };
  },
  methods: {
    loaded() {
      this.hasLoaded = true;
    },
    showOverlay() {
      if(this.$store.state.windowWidth > 1200) {
        const imgSplit = this.img.split("/");
      const n = imgSplit[imgSplit.length - 1].split(".")[0];

      this.$store.commit(
        "setImgCurr",
        `img/bilder/1000px/jpg/${this.$store.getters.foldersCurr.name}/${n}.jpg`
      );
      this.$store.commit("setShowOverlay", true);
      }
    },
  },
  watch: {},
};
</script>

<style scoped>
.base-image {
  width: 100%;
  padding: 0;
  margin-bottom: calc(2vmin - 5px);
}

.base-image:last-child {
  margin-bottom: calc(4vmin - 5px);
}

.image {
  width: 100%;
  box-shadow: 0 4px 7px #33333322;
  user-select: none;
  transition: all 200ms ease-in-out;
}

.image:not(.image--placeholder) {
  cursor: pointer;
}

.image:hover:not(.image--placeholder):not(.image--full-width) {
  transform: scale(0.99);
}

.image--full-width {
  width: 100%;
  margin-bottom: 1vmin;
}
</style>