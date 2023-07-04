<template>
  <div class="Start">
    <h1>Welcome to my game</h1>
    <GameInstruction msg="Game Instruction" />
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import GameInstruction from "@/components/GameInstruction.vue";

export default defineComponent({
  name: 'AboutView',
  components: {
    GameInstruction,
  },
});
</script>