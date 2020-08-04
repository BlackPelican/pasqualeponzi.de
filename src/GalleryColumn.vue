<template>
  <section class="gallery-column">
    <BaseImage v-for="(img, i) in imgsShow" :key="i" :img="img" />
  </section>
</template>

<script>
import BaseImage from "./BaseImage.vue";

export default {
  name: "GalleryColumn",
  components: { BaseImage },
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
          this.$store.getters.foldersCurr.show /
            this.$store.state.galleryColumnsQty
        )
      );
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

.gallery-column:not(:last-child) {
  margin-right: 2vmin;
}
</style>