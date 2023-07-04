<template>
  <div>
    <h1>Game Instruction</h1>
    <h4>1. Each letter will include a tarot card,  3 small letters.</h4>
    <p class="lead"></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GameInstruction',
  props: {
    msg: String,
  },
});
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
