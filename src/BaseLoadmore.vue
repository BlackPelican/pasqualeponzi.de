<template>
  <button class="base-loadmore" @click="setGalleryImgsMax" v-if="isEnabled">
    <svg
      class="base-loadmore__icon"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      style="enable-background:new 0 0 512 512;"
      xml:space="preserve"
    >
      <g>
        <g>
          <path
            d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
			v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"
          />
        </g>
      </g>
    </svg>
    <span class="base-loadmore__text">Mehr laden</span>
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
        this.$store.getters.foldersCurr.length
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

.base-loadmore__text {
  color: var(--on-primary);
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}

.base-loadmore__icon {
  height: 1.5em;
  margin-right: 1em;
  fill: #fff;
}

.base-loadmore--disabled {
  background: #ccc;
  box-shadow: none;
  cursor: default;
}

.base-loadmore--disabled .base-loadmore__text {
  color: #888;
}

.base-loadmore--disabled .base-loadmore__icon {
  fill: #888;
}

@media screen and (max-width: 600px) {
  .base-loadmore {
    font-size: 12px;
    margin-bottom: 4em;
  }
}
</style>