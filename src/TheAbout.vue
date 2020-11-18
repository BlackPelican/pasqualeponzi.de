<template>
  <section class="the-about">
    <h1 class="quote">"Es gibt keine/n bessere/n Künstler/in, als die Natur, Mutter der Menschheit."</h1>
    <h2 class="from">-Pasqualino Ponzi, 15.11.2020</h2>
  </section>
</template>

<script>

  export default {
    name: "TheAbout",
    components: {},
    data: function() {
      return {}
    }
  }
</script>

<style scoped>
.the-about {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 7rem);
  padding: 0 4vmin;
  flex-direction: column;
  color: var(--black);
}

.quote {
  font-size: 40px;
  font-style: italic;
  max-width: 33ch;
}

.from {
  font-size: 24px;
  font-weight: 400;
}
</style>