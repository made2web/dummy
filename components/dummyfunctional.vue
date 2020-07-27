<template functional>
  <div v-html="props.message"></div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    message: String
  }
});
</script>
