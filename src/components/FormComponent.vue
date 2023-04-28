<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="formData.name" required />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="formData.email" required />
    </div>
    <div>
      <label for="question">Choose your favorite color:</label>
      <select id="question" v-model="formData.question" required>
        <option value="">Select one</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      formData: {
        name: '',
        email: '',
        question: '',
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
