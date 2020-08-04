<template>
  <section class="gallery-column" ref="col">
    <img
      class="column__img"
      :class="{'column__img--full-width': $store.state.windowWidth <= 600}"
      v-for="(img, i) in imgsShow"
      :key="i"
      :src="img"
      loading="lazy"
      alt="img"
    />
  </section>
</template>

<script>
//import Ligma from "./Ligma.vue";

export default {
  name: "GalleryColumn",
  components: {},
  props: {
    imgs: Array,
    col: Number,
  },
  data: function () {
    return {};
  },
  computed: {
    imgsShow() {
      return this.imgs.slice(
        0,
        Math.floor(
          this.$store.state.galleryImgsShow /
            this.$store.state.galleryColumnsQty
        )
      );
    },
    colHeight() {
      return this.$refs.col.clientHeight;
    },
  },
};
</script>

<style scoped>
.gallery-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.column__img {
  width: 97%;
  margin-bottom: 3%;
  box-shadow: 0 4px 7px #33333322;
  user-select: none;
  cursor: pointer;
  transition: all 200ms ease-in-out;
}

.column__img:hover {
  transform: scale(1.02);
}

.column__img--full-width {
  width: 100%;
  margin-bottom: 5%;
}

@media screen and (max-width: 600px) {
  .column__img:hover {
    transform: none;
  }
}
</style>