<template>
  <main class="the-gallery" :class="{'the-gallery--no-padding': $store.state.windowWidth <= 600}">
    <TheFilter />
    <div class="columns">
      <GalleryColumn
        v-for="(col, i) in galleryColumnsQty"
        :key="i"
        :imgs="imgs.filter((img, index) => (index + ((col - (galleryColumnsQty + 1)) * (-1))) % galleryColumnsQty == 0)"
        :col="col"
      />
    </div>
    <BaseLoadmore />
    <TheTotop />
  </main>
</template>

<script>
import TheFilter from "./TheFilter.vue";
import GalleryColumn from "./GalleryColumn.vue";
import BaseLoadmore from "./BaseLoadmore.vue";
import TheTotop from "./TheTotop.vue";

export default {
  name: "TheGallery",
  components: {
    GalleryColumn,
    BaseLoadmore,
    TheTotop,
    TheFilter,
  },
  data: function () {
    return {};
  },
  computed: {
    galleryColumnsQty() {
      return this.$store.state.galleryColumnsQty;
    },
    imgs() {
      const imgs = [];

      for (let i = 1; i <= this.$store.getters.foldersCurr.length; i++) {
        imgs.push(
          `img/bilder/${this.$store.getters.foldersCurr.name}/${i}.jpg`
        );
      }

      return imgs;
    },
  },
};
</script>

<style scoped>
.the-gallery {
  display: flex;
  padding: 0 2vmin;
  flex-direction: column;
  width: 100%;
  align-items: center;
  transition: all 200ms ease-in-out;
}

.columns {
  display: flex;
  width: 100%;
}

.the-gallery--no-padding {
  padding: 0;
}
</style>