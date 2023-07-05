<template>
  <div class="col-lg-8 mx-auto p-4 py-md-5 rules">
  <main>
    <h1 class="text-body-emphasis">Game Instruction</h1>
    <h3 class="text-body-emphasis">Watch a short clip</h3>
    <h3 class="text-body-emphasis">Game rules</h3>
    <p class="fs-5 col-md-8">1. Register your team: After signing up, go to the contact page. In the cotact form:</p>
    <p class="fs-6 col-md-8">a. Fill the "topic" as "[Create group] $YOUR_GROUP_NAME".</p>
    <p class="fs-6 col-md-8">b. Fill the "contact email" to your team leader's email.</p>
    <p class="fs-6 col-md-8">c. Fill the "content" as Your team member's name and email, including your name and your email.</p>
    <p class="fs-6 col-md-8">d. A successful registration of your team will result in an automatic email with a puzzle on your first clue.</p>
    <p class="fs-5 col-md-8">2. Each letter will include a tarot card, 3 small letters.</p>
    <p class="fs-5 col-md-8">3. Fill the "topic" as "[Create group] $YOUR_GROUP_NAME".</p>
    <p class="fs-5 col-md-8">4. Fill the "topic" as "[Create group] $YOUR_GROUP_NAME".</p>
    <p class="fs-5 col-md-8">5. Fill the "topic" as "[Create group] $YOUR_GROUP_NAME".</p>
  </main>
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
  name: 'GameInstruction',
  props: {
    msg: String,
  },
});
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';
@import '../styles/carousel.css';
.rules main {
  margin-left: 50px;
  text-align: start;
}
</style>