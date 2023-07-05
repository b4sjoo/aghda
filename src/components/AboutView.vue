<template>
  <div class="Start">
    <GameInstruction msg="Welcome to my game" />
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