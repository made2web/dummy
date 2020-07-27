<template>
  <div v-html="message"></div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    message: String
  },
  beforeUpdate() {
    console.time();
  },

  updated() {
    console.log("Time for render:");
    console.timeEnd();
  }
});
</script>
