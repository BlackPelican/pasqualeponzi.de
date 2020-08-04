<template>
  <div id="app">
    <TheNav />
    <TheGallery v-if="$store.state.showGallery" />
    <TheContact v-if="$store.state.showContact" />
    <TheImprint v-if="$store.state.showImprint" />
    <TheFooter />
  </div>
</template>

<script>
import TheNav from "./TheNav.vue";
import TheGallery from "./TheGallery.vue";
import TheFooter from "./TheFooter.vue";
import TheContact from "./TheContact.vue";
import TheImprint from "./TheImprint.vue";

export default {
  name: "App",
  components: {
    TheGallery,
    TheNav,
    TheFooter,
    TheContact,
    TheImprint,
  },
  methods: {
    windowResize() {
      this.$store.commit("setWindowWidth", window.innerWidth);
      this.$store.commit(
        "setGalleryColumnsQty",
        this.$store.state.windowWidth > 1200
          ? 3
          : this.$store.state.windowWidth > 600
          ? 2
          : 1
      );
    },
  },
  created() {
    window.onresize = this.windowResize;
    this.windowResize();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: "Open Sans";
  scroll-behavior: smooth;
}

#app {
  background: var(--background);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

:root {
  --black: #222222ee;
  --grey: #bbbbbbee;
  --primary: #43aa8b;
  --primary-variant: #254441;
  --secondary: #ff6f59;
  --secondary-variant: #db504a;
  --background: #f5fbf9;
  --on-primary: #ffffff;
  --on-secondary: #222222ee;
}

button,
button:focus,
input,
input:focus {
  outline: none;
  border: none;
}

ul {
  list-style: none;
}

li {
  text-decoration: none;
}

::selection {
  background: var(--secondary);
  color: var(--black);
}
</style>
