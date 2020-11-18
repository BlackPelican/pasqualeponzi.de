<template>
  <button class="base-loadmore" @click="setGalleryImgsMax" v-if="isEnabled">
    <svg
      version="1.1"
      class="loadmore__icon"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 341.4 341.4"
      style="enable-background:new 0 0 341.4 341.4;"
      xml:space="preserve"
    >
      <g>
        <g>
          <polygon
            points="192,149.4 192,0 149.4,0 149.4,149.4 0,149.4 0,192 149.4,192 149.4,341.4 192,341.4 192,192 341.4,192 
			341.4,149.4 		"
          />
        </g>
      </g>
    </svg>

    <span class="loadmore__text">Mehr laden</span>
  </button>
</template>

<script>
//import Ligma from "./Ligma.vue";

export default {
  name: "BaseLoadmore",
  components: {},
  data: function () {
    return {};
  },
  computed: {
    isEnabled() {
      return (
        this.$store.getters.foldersCurr.show <
        this.$store.getters.foldersCurr.size
      );
    },
  },
  methods: {
    setGalleryImgsMax() {
      this.$store.commit(
        "setFoldersCurrShow",
        (this.$store.getters.foldersCurr.show += 40)
      );
    },
  },
};
</script>

<style scoped>
.base-loadmore {
  padding: 1em;
  background: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4vmin 0;
  box-shadow: 0 4px 7px #22222222;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  font-size: 12px;
}

.base-loadmore:hover:not(.base-loadmore--disabled) {
  background: #43aa8bdd;
}

.base-loadmore:active:not(.base-loadmore--disabled) {
  transform: translateY(-4px);
}

.loadmore__text {
  color: var(--on-primary);
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}

.loadmore__icon {
  height: 1.5em;
  width: 1.5em;
  margin-right: 1em;
  fill: #fff;
}

@media screen and (max-width: 600px) {
  .base-loadmore {
    font-size: 12px;
    margin-bottom: 4em;
  }
}
</style>