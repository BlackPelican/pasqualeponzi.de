<template>
  <div class="the-imprint">
    <h1 class="imprint__title">Impressum</h1>
    <p class="imprint__text">
      Angaben gemäß § 5 TMG:
      <br />Pasqualino Ponzi
      <br />Herderstraße 2
      <br />64285 Darmstadt
      <br />Telefon: auf Anfrage
      <br />E-Mail: max@muster.de
    </p>
  </div>
</template>

<script>
//import Ligma from "./Ligma.vue";

export default {
  name: "TheImprint",
  components: {},
  data: function() {
    return {};
  }
};
</script>

<style scoped>
.the-imprint {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 0 4vmin;
}

.imprint__title {
  margin-bottom: 4vmin;
}

.imprint__text {
  text-align: center;
  line-height: 1.5;
}
</style>