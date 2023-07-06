<template>
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <div class="row g-5">
    <div class="col-md-12 col-lg-12 justify-content-center">
        <main class="ungrouped">
        <div class="col-lg-12">
            <h2>{{ printoutdata }}</h2>
        </div>
        <div class="col-lg-12">
        <button class="btn btn-large btn-danger" @click="printOut">Print Contact</button>
      </div>
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
import {apiHTTPClient} from '@/app.services';

export default defineComponent({
    data() {
    return {
      printoutdata: '',
    };
  },
  methods: {
    async printOut(): Promise<void> {
      try {
        const response = await apiHTTPClient.get('',
        {headers: {
            'Content-Type': 'application/json',
        }});
        console.log(response);
        const data = response.data.map((obj: { timestamp: string }) => ({ ...obj, timestamp: new Date(obj.timestamp) })); // Convert the timestamp property of each object to a Date object
        data.sort((a: { timestamp: Date }, b: { timestamp: Date }) => b.timestamp.getTime() - a.timestamp.getTime()); 
        this.printoutdata = JSON.stringify(data.slice(0,3));
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

main.ungrouped  {
  margin: 50px;
  padding: 12rem
}
</style>