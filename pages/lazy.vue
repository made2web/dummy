<template>
  <div class="container">
    <lazy-dummy :message="message" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      message:
        "<p>Existem inúmeras opções terapêuticas para o cancro da próstata que apresentam bons resultados.</p><p>A maioria dos homens diagnosticados com um tumor neste órgão pode esperar viver muitos anos. Embora o sucesso do tratamento dependa, naturalmente, da progressão da doença oncológica.</p><p>Se for detectado em fases precoces, localizado ainda apenas na próstata, o tratamento tem fins curativos. A braquiterapia, a cirurgia e a radioterapia externa são as opções terapêuticas possíveis, dado o tumor estar ainda numa fase precoce.</p><p>Se o cancro for diagnosticado em fases avançadas, ou seja, já não estiver localizado apenas na próstata, os tratamentos são mais agressivos. Nestes casos, têm um intuito paliativo. Procura-se controlar a doença, impedir a sua progressão e minimizar os sintomas.</p><p>Por isso, e como regra, quanto mais precocemente se diagnosticar um cancro da próstata, maior será a eficácia do tratamento, menores serão as consequências do tumor e dos seus tratamentos, menores as taxas de complicações e os efeitos secundários.</p>"
    };
  },
  beforeCreate() {
    console.time();
  },

  mounted() {
    console.log("Time for render:");
    console.timeEnd();
  }
});
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
