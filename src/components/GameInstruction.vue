<template>
  <div class="col-lg-8 mx-auto p-4 py-md-5 rules">
  <main>
    <h1 class="text-body-emphasis">Game Instruction</h1>
    <h3 class="text-body-emphasis">Watch a short clip before you start...</h3>
    <h3 class="text-body-emphasis">Game rules</h3>
    <p class="fs-5 col-md-8 fw-semibold">1. Register your team: After signing up, go to the contact page. In the cotact form:</p>
    <p class="fs-6 col-md-8">a. Fill the "contact email" to your team leader's email.</p>
    <p class="fs-6 col-md-8">b. In "Contact Category", choose "Group Registration", for the "Clue Number" and "Question type", select "NA".</p>
    <p class="fs-6 col-md-8">c. Fill the "content" with your team's name, team member's name and email, including leader's name and email.</p>
    <p class="fs-6 col-md-8">d. A successful registration of your team will result in an automatic email with a puzzle on your first clue.</p>
    <p class="fs-5 col-md-8 fw-semibold">2. Each clue letter represents a location in Seattle or Bellevue. </p>
    <p class="fs-5 col-md-8 fw-semibold">3. On the envelope there is a number on it, and each letter includes a tarot card, a paper with a hint poem and a question, as well as 3 small letters with numbers on them.</p>
    <p class="fs-6 col-md-8">a. Once you've received the clue letter from the staff, a timer will be initiated.</p>
    <p class="fs-6 col-md-8">b. If not explicitly specified, after 20 minutes you've received the clue letter, an automatic email will notice you to open the letter #1, which will give you more hints.</p>
    <p class="fs-6 col-md-8">c. After 15 minutes, an automatic email will notice you to open the letter #2, which will give you a location near the correct one.</p>
    <p class="fs-6 col-md-8">d. After 5 minutes, an automatic email will notice you to open the letter #3, which will give you the correct answer.</p>
    <p class="fs-5 col-md-8 fw-semibold">3. Any time during this 40-minutes time window you can fill out a correct answer with the contact form.</p>
    <p class="fs-6 col-md-8">a. Fill the "contact email" to your team leader's email.</p>
    <p class="fs-6 col-md-8">b. In "Contact Category", choose "Clues", for the "Clue Number", select the number on the envelope, and for "Question type", select "Location".</p>
    <p class="fs-6 col-md-8">c. Fill the "content" with your answer. An automatic email will tell you if you are correct. A correct answer will stop the timer, so we will not count your time when you are heading to the target place.</p>
    <p class="fs-5 col-md-8 fw-semibold">4. If correct, you'd still better to open the #3 small letter because it will tell you the exact location our staff at, as well as a recommend parking place.</p>
    <p class="fs-5 col-md-8 fw-semibold">5. The little question on the poem paper is a brain teaser. You can try unlimited time on it and you can answer it anytime during the game. If you want to answer a question:</p>
    <p class="fs-6 col-md-8">a. Fill the "contact email" to your team leader's email.</p>
    <p class="fs-6 col-md-8">b. In "Contact Category", choose "Clues", for the "Clue Number", select the number on the envelope, and for "Question type", select "Question".</p>
    <p class="fs-6 col-md-8">c. Fill the "content" with your answer. An email will tell you if you are correct.</p>
    <p class="fs-6 col-md-8">d. A correct answer will clear your time on that search; a partially correct answer will clear 5 minutes on that search.</p>
    <p class="fs-6 col-md-8">e. If you did not answer the question for that letter eventually, we will add 20 minutes on that search.</p>
    <p class="fs-5 col-md-8 fw-semibold">6. If you have other questions or concerns, feel free to use "Other" in the "Contact Category" to initiate an inqury.</p>
    <div class="col-lg-4">
        <a class="btn btn-large btn-success" href="https://aghda.net/contact" role="button">Submit contact forms</a>
    </div>
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