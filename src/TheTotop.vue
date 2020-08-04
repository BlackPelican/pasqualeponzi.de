<template>
  <div class="the-totop" @click="totop">
    <img class="totop__icon" src="img/icons/totop.svg" alt="Back" />
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
}

@media screen and (max-width: 600px) {
  .the-totop {
    height: 3.5rem;
    width: 3.5rem;
  }
}
</style>