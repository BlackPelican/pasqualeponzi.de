<template>
  <div class="the-totop" @click="totop">
    <svg
      class="totop__icon"
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
//import Ligma from "./Ligma.vue";

export default {
  name: "TheTotop",
  components: {},
  data: function () {
    return {};
  },
  methods: {
    totop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
  computed: {},
  created() {
    var scrollPrev = window.pageYOffset;

    window.onscroll = () => {
      const scrollCurr = window.pageYOffset;

      document.querySelector(".the-totop").style.bottom =
        scrollPrev > scrollCurr && window.scrollY > 1200 ? "5vmin" : "-20vmin";

      scrollPrev = scrollCurr;
    };
  },
};
</script>

<style scoped>
.the-totop {
  transform: rotate(90deg);
  height: 4rem;
  width: 4rem;
  background: var(--background);
  position: fixed;
  right: 5vmin;
  bottom: -20vmin;
  border-radius: 50%;
  box-shadow: 0 4px 7px #33333322;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 300ms ease-in-out;
}

.the-totop:active {
  transform: translateY(-4px);
}

.totop__icon {
  width: 40%;
  fill: #222222ee;
}

@media screen and (max-width: 600px) {
  .the-totop {
    height: 3.5rem;
    width: 3.5rem;
  }
}
</style>