<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div id="app">
    <CSVUploader />
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import CSVUploader from "@/components/CSVUploader.vue";

export default defineComponent({
  name: 'AboutView',
  components: {
    CSVUploader
  },
});

</script>