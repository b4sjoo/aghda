<template>
<div class="container">
    <div class="text-center contact">
      <h2>Contact</h2>
    </div>
  <main>
    <div class="row g-5">
      <div class="col-md-12 col-lg-12">
        <form class="needs-validation" @submit.prevent="handleSubmit">
          <div class="row g-3">
            <div class="col-12">
              <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="you@example.com" v-model="formData.email" required>
              <div class="invalid-feedback">
                Please enter a valid email address.
              </div>
            </div>

            <div class="col-md-5">
              <label for="category" class="form-label">Concact Category</label>
              <select class="form-select" id="category" v-model="formData.category" required>
                <option value="">Choose...</option>
                <option>Group Registration</option>
                <option>Clues</option>
                <option>Other</option>
              </select>
              <div class="invalid-feedback">
                Please select a valid category.
              </div>
            </div>

            <div class="col-md-4">
              <label for="clue" class="form-label">Clue number</label>
              <select class="form-select" id="clue" v-model="formData.clue" required>
                <option value="">Choose...</option>
                <option>NA</option>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
              </select>
              <div class="invalid-feedback">
                Please provide a valid clue number.
              </div>
            </div>

            <div class="col-md-3">
              <label for="answertype" class="form-label">Answer Type</label>
              <select class="form-select" id="answertype" v-model="formData.answertype" required>
                <option value="">Choose...</option>
                <option>NA</option>
                <option>Question</option>
                <option>Location</option>
              </select>
              <div class="invalid-feedback">
                Please provide a valid answer type.
              </div>
            </div>

            <div class="col-12 col-lg-12">
              <label for="content" class="form-label">Content</label>
                <textarea class="form-control" id="content" placeholder="Some text here" rows="7" v-model="formData.content" required></textarea>
              <div class="invalid-feedback">
                Valid content is required.
              </div>
            </div>
          </div>
          <hr class="my-4">

          <button class="w-100 btn btn-primary btn-lg" type="submit">Submit</button>
        </form>
      </div>
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
  data() {
    return {
      formData: {
        email: '',
        category: '',
        clue: '',
        answertype: '',
        content: '',
      },
      apiEndpoint: 'http://localhost:8080/',
    };
  },
  methods: {
    async handleSubmit(): Promise<void> {
      try {
        const jsonString = JSON.stringify(this.formData);
        console.log('Sending JSON data to the API Gateway:', jsonString);

        const response = await fetch(this.apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: jsonString,
        });

        if (response.ok) {
          alert('Form submitted successfully!');
        } else {
          alert('Error submitting form: ' + response.statusText);
        }
      } catch (error) {
        if (error instanceof Error) {
          alert('Error submitting form: ' + error.message);
        } else {
          alert('Error submitting form: An unknown error occurred');
        }
      }
    },
  },
});
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';
@import '../styles/carousel.css';

.container {
  max-width: 960px;
}

.contact {
    margin-top: 50px;
}
</style>