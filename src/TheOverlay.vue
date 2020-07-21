<template>
  <div @click="hideOverlay" class="the-overlay">
    <img class="the-overlay__arrow" src="img/icons/back.svg" alt="Back" />
    <img class="the-overlay__img" :src="`img/a-normal/${img.match(/\d+/g)}.jpg`" alt="img" />
    <img class="the-overlay__arrow" src="img/icons/next.svg" alt="Next" />
  </div>
</template>

<script>
//import Ligma from "./Ligma.vue";

export default {
  name: "TheOverlay",
  components: {},
  props: {
    img: String
  },
  data: function() {
    return {};
  },
  methods: {
    hideOverlay() {
      this.$store.commit("setShowOverlay", false);
    }
  }
};
</script>

<style scoped>
.the-overlay {
  position: fixed;
  height: 100%;
  width: 100%;
  background: #222222dd;
  display: flex;
  justify-content: space-between;
  padding: 0 4vmin;
  align-items: center;
}

.the-overlay__img {
  max-height: 90%;
  max-width: 90%;
}

.the-overlay__arrow {
  height: 4rem;
  cursor: pointer;
  transition: all 200ms ease-in-out;
}

.the-overlay__arrow:hover {
  transform: scale(1.05);
}

.the-overlay__arrow:active {
  transform: translateY(-4px);
}
</style>