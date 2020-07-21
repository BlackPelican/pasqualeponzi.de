<template>
  <section class="the-contact">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, accusamus voluptatibus rerum modi eos vel nulla harum delectus aperiam quasi sit perspiciatis autem nisi, quaerat architecto labore non, exercitationem illo!</p>
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
}

p {
  max-width: 70ch;
  text-align: center;
}
</style>