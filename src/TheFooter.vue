<template>
  <footer class="the-footer">
    <span class="note">Made by Nico Ponzi</span>
    <span class="impressum">Impressum</span>
  </footer>
</template>

<script>
//import Ligma from "./Ligma.vue";

export default {
  name: "App",
  components: {},
  data: function() {
    return {};
  }
};
</script>

<style scoped>
.the-footer {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0.5em 4vmin;
  border-bottom: 4px solid var(--primary);
  position: absolute;
  bottom: 0;
}

.note {
  margin-right: 2em;
}

.impressum {
  text-decoration: underline;
  transition: all 200ms ease-in-out;
  cursor: pointer;
}

.impressum:hover {
  color: var(--primary);
}

.note,
.impressum {
  font-size: 12px;
  letter-spacing: 0.4px;
  color: var(--black);
}
</style>