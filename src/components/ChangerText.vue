<template>
  <div class="form">
    <input type="text" v-model="color" />
    <h2>{{ color }} </h2>
  </div>
</template>
<script setup>
import { ref } from "vue";
const color = ref("Ecrire ici ..");
</script>

<style scoped>
.form{
  width: 100%;
  margin: 2rem 0
}
</style>
