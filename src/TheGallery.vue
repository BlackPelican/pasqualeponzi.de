<template>
  <main class="the-gallery" :class="{'the-gallery--no-padding': $store.state.windowWidth <= 600}">
    <div class="columns">
      <GalleryColumn
        v-for="(col, i) in columnsQty"
        :key="i"
        :imgs="imgs.filter((img, index) => (index + ((col - (columnsQty + 1)) * (-1))) % columnsQty == 0)"
        :col="col"
      />
    </div>
    <BaseLoadmore />
    <TheTotop />
  </main>
</template>

<script>
import GalleryColumn from "./GalleryColumn.vue";
import BaseLoadmore from "./BaseLoadmore.vue";
import TheTotop from "./TheTotop.vue";

export default {
  name: "TheGallery",
  components: {
    GalleryColumn,
    BaseLoadmore,
    TheTotop
  },
  data: function() {
    return {};
  },
  computed: {
    columnsQty() {
      return this.$store.state.columnsQty;
    },
    imgs() {
      const imgs = [];

      for (let i = 1; i <= this.$store.state.galleryImgsMax; i++) {
        imgs.push(`img/minified/${i}.jpg`);
      }

      return imgs;
    }
  }
};
</script>

<style scoped>
.the-gallery {
  display: flex;
  padding: 0 2vmin;
  flex-direction: column;
  width: 100%;
  align-items: center;
}

.columns {
  display: flex;
  width: 100%;
}

.the-gallery--no-padding {
  padding: 0;
}
</style>