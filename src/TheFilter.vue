<template>
  <ul class="the-filter">
    <li
      class="filter__option"
      :class="{'filter__option--active': i == $store.state.foldersCurrIndex}"
      v-for="(folder, i) in $store.state.folders"
      :key="i"
      @click="selectFolder(i)"
    >{{folder.name}}</li>
  </ul>
</template>

<script>
export default {
  name: "TheFilter",
  components: {},
  data: function () {
    return {};
  },
  methods: {
    selectFolder(i) {
      this.$store.commit("setFoldersCurrIndex", i);
    },
  },
};
</script>

<style scoped>
.the-filter {
  width: 30rem;
  display: flex;
  justify-content: center;
  margin: 4vmin;
}

.filter__option {
  border-top: 1px solid var(--primary);
  border-bottom: 1px solid var(--primary);
  border-left: 1px solid var(--primary);
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 0;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  color: var(--primary);
  transition: all 200ms ease-in-out;
  cursor: pointer;
}

.filter__option:last-child {
  border-right: 1px solid var(--primary);
}

.filter__option:hover:not(.filter__option--active) {
  background: #eee;
}

.filter__option--active {
  color: white;
  border: 1px solid var(--primary);
  background: var(--primary);
}

@media screen and (max-width: 480px) {
  .the-filter {
    width: 100%;
  }

  .filter__option {
    font-size: 10px;
  }
}
</style>