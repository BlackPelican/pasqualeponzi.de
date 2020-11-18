<template>
  <div class="the-overlay" @mousemove="iconsShowHide">
    <svg
      :class="{'overlay__icon--invisible': !iconsShow}"
      version="1.1"
      @click="closeOverlay"
      @mouseenter="iconsEnter"
      @mouseleave="iconsLeave"
      class="overlay__icon overlay__icon--close"
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

    <svg
      :class="{'overlay__icon--invisible': !iconsShow}"
      class="overlay__icon overlay__icon--back"
      @click="setImgCurr('previous')"
      @mouseenter="iconsEnter"
      @mouseleave="iconsLeave"
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
        <polygon points="367.1,0 111.1,256 367.1,512 400.9,478.2 178.7,256 400.9,33.8 367.1,0 	" />
      </g>
    </svg>

    <img class="overlay__image" :src="imgCurr.replace(/filetype/g, 'jpg')" alt="img" />

    <svg
      :class="{'overlay__icon--invisible': !iconsShow}"
      class="overlay__icon overlay__icon--next"
      @click="setImgCurr('next')"
      @mouseenter="iconsEnter"
      @mouseleave="iconsLeave"
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
        <polygon points="367.1,0 111.1,256 367.1,512 400.9,478.2 178.7,256 400.9,33.8 367.1,0 	" />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "TheOverlay",
  props: {
    imgCurr: String,
  },
  components: {},
  data: function () {
    return {
      iconsShow: true,
      iconsHide: null,
      iconsHover: false,
    };
  },
  computed: {},
  methods: {
    closeOverlay() {
      this.$store.commit("setShowOverlay", false);
    },
    setImgCurr(which) {
      const imgCurr = this.$store.state.imgCurr;
      const foldersCurr = this.$store.getters.foldersCurr;
      const imgSplit = imgCurr.split("/");
      const n = imgSplit[imgSplit.length - 1].split(".")[0];

      let imgNew =
        which == "previous"
          ? n == 1 ? `img/bilder/1000px/filetype/${foldersCurr.name}/${foldersCurr.size - 1}.filetype` :
          `img/bilder/1000px/filetype/${
              foldersCurr.name
            }/${parseInt(n) - 1}.filetype`
          : n == foldersCurr.size - 1 ? `img/bilder/1000px/filetype/${foldersCurr.name}/1.filetype` :
          `img/bilder/1000px/filetype/${
              foldersCurr.name
            }/${parseInt(n) + 1}.filetype`;

      this.$store.commit("setImgCurr", imgNew);
    },
    iconsEnter() {
      this.iconsHover = true;
      this.iconsShow = true;
      clearInterval(this.iconsHide);
    },
    iconsLeave() {
      this.iconsHover = false;
      this.iconsShow = false;
    },
    iconsShowHide() {
      if (!this.iconsShow) {
        clearInterval(this.iconsHide);
        this.iconsShow = true;
        this.iconsHide = setTimeout(() => {
          this.iconsShow = false;
        }, 3000);
      } else {
        if (!this.iconsHover) {
          clearInterval(this.iconsHide);
          this.iconsHide = setTimeout(() => {
            this.iconsShow = false;
          }, 3000);
        }
      }
    },
  },
  mounted() {
    this.iconsHide = setTimeout(() => {
      this.iconsShow = false;
    }, 3000);
  },
};
</script>

<style scoped>
.the-overlay {
  background: #222222ee;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
}

.overlay__image {
  filter: drop-shadow(0 4px 7px #11111188);
  object-fit: contain;
  width: 100%;
  height: 90%;
}

.overlay__image,
.overlay__icon {
  user-select: none;
}

.overlay__icon--close {
  filter: drop-shadow(0 4px 7px #11111188);
  height: 4rem;
  width: 4rem;
  position: absolute;
  top: 2rem;
  transform: rotate(45deg);
  right: 2rem;
}

.overlay__icon--close:hover {
  transform: rotate(45deg) scale(0.95);
}

.overlay__icon {
  cursor: pointer;
  fill: #ffffffee;
  transition: transform 200ms ease-in-out, opacity 400ms ease-in-out;
}

.overlay__icon--back,
.overlay__icon--next {
  height: 6rem;
}

.overlay__icon--back {
  filter: drop-shadow(0 4px 7px #11111188);
  margin-right: 2rem;
}

.overlay__icon--back:hover {
  transform: scale(0.95);
}

.overlay__icon--next:hover {
  transform: scale(0.95) rotate(180deg);
}

.overlay__icon--next {
  transform: rotate(180deg);
  filter: drop-shadow(0 -4px 7px #11111188);
  margin-left: 2rem;
}

.overlay__icon--invisible {
  opacity: 0;
}
</style>