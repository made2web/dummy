<template>
  <div class="container">
    <nuxt-content :document="json" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  async asyncData({ $content }) {
    const json = await $content("teste").fetch();
    return {
      json
    };
  }
});
</script>
