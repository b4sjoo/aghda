<template>
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <div class="row g-5">
    <div class="col-md-12 col-lg-12">
        <main class="ungrouped">
            <h1>You haven't been registered to any group yet.</h1>  
        </main>
    </div>
    </div>
<hr class="featurette-divider">
  <footer class="container">
    <p class="float-end"><a href="#">Back to top</a></p>
    <p>&copy; 2017–2023 GeoGaming Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
  </footer> 
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PendingView',
  props: {
    msg: String,
  },
});
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';
@import '../styles/carousel.css';

main.ungrouped  {
  margin: 20px;
  padding: 8rem
}
</style>