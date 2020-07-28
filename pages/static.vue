<template>
  <div class="container">
    <static />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      message: "",
    };
  },
  beforeCreate() {
    console.time();
  },

  mounted() {
    console.log("Time for render:");
    console.timeEnd();
  },
});
</script>
