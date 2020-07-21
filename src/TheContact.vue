<template>
  <section class="the-contact">
    <div class="contact__line">
      <p class="contact__text">
        <span class="contact__title">E-Mail:</span> pasqualeponzi@gmx.de
      </p>
    </div>
    <div class="contact__line">
      <p class="contact__text">
        <span class="contact__title">Telefon:</span> 0176 725 061 47
      </p>
    </div>
  </section>
</template>

<script>
//import Ligma from "./Ligma.vue";

export default {
  name: "TheContact",
  components: {},
  data: function() {
    return {};
  }
};
</script>

<style scoped>
.the-contact {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 0 4vmin;
  flex-direction: column;
  color: var(--black);
}

.contact__line {
  text-align: center;
  line-height: 1.6;
  font-size: 24px;
}

.contact__title {
  font-weight: 600;
}
</style>