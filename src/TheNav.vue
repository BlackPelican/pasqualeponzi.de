<template>
  <nav class="the-nav">
    <img src="img/logo.png" alt="Logo" class="logo" />
    <ul class="the-nav__list">
      <li class="the-nav__link" @click="showGallery">Gallerie</li>
      <li class="the-nav__link">About</li>
      <li class="the-nav__link" @click="showContact">Kontakt</li>
    </ul>
  </nav>
</template>

<script>
//import Ligma from "./Ligma.vue";

export default {
  name: "TheNav",
  components: {},
  data: function() {
    return {};
  },
  methods: {
    showGallery() {
      this.$store.commit("setShowContact", false);
      this.$store.commit("setShowGallery", true);
    },
    showContact() {
      this.$store.commit("setShowGallery", false);
      this.$store.commit("setShowContact", true);
    }
  }
};
</script>

<style scoped>
.the-nav {
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4vmin;
  border-top: 4px solid var(--primary);
}

.logo {
  height: 3rem;
}

.the-nav__list {
  display: flex;
}

.the-nav__link {
  font-size: 20px;
  letter-spacing: 0.15px;
  margin-left: 3em;
  color: var(--black);
  cursor: pointer;
  transition: all 200ms ease-in-out;
}

.the-nav__link:hover {
  color: var(--primary);
}

@media screen and (max-width: 600px) {
  .the-nav__link {
    font-size: 16px;
    margin-left: 2em;
  }
}
</style>