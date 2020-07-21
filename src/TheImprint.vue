<template>
  <div class="the-imprint">
    <h1 class="imprint__title">Impressum</h1>
    <p class="imprint__text">
      Angaben gemäß § 5 TMG:
      <br />Pasqualino Ponzi
      <br />Herderstraße 2
      <br />64285 Darmstadt
      <br />Telefon: 0176 725 061 47
      <br />E-Mail: pasqualeponzi@gmx.de
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
  min-height: calc(100vh - 7rem);
  padding: 0 4vmin;
  color: var(--black);
}

.imprint__title {
  margin-bottom: 4vmin;
  font-size: 34px;
  letter-spacing: 0.25px;
}

.imprint__text {
  text-align: center;
  font-size: 20px;
  letter-spacing: 0.15px;
  line-height: 1.5;
}
</style>