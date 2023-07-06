<template>
  <authenticator :social-providers="['google']" style="padding: 128px">
    <template v-slot="{ signOut }">
      <div class="container">
    <div class="text-center contact">
      <h2>Welcome back player! Please choose between</h2>
    </div>
    <div class="row g-5 justify-content-around">
      <div class="col-lg-3">
        <a class="btn btn-large btn-primary" href="https://aghda.net/about" role="button">See the instruction</a>
      </div>
      <div class="col-lg-3">
        <a class="btn btn-large btn-success" href="https://aghda.net/contact" role="button">Submit contact forms</a>
      </div>
      <div class="col-lg-3">
        <button class="btn btn-large btn-danger" @click="signOut">Sign Out</button>
      </div>
    </div>
  </div>
    </template>
  </authenticator>
</template>

<script setup lang="ts">
import { Authenticator } from '@aws-amplify/ui-vue';
import '@aws-amplify/ui-vue/styles.css';
import { Auth, Amplify } from 'aws-amplify';
import awsmobile from '@/aws-authconfig';
import { apiHTTPClient } from '@/app.services';

Amplify.configure(awsmobile);
// Debug: console.log(Auth.configure());
async function getJwtToken() {
  try {
    const session = await Auth.currentSession();
    const idToken = session.getIdToken().getJwtToken();
    const jwtToken = session.getAccessToken().getJwtToken();
    console.log('Access token:', jwtToken);
    console.log('ID token:', idToken);
    const response = await apiHTTPClient.get('', {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    console.log(response);
    // Share the JWT token with your backend
  } catch (error) {
    console.error('Error getting JWT token:', error);
  }
}
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';

template .guides {
  margin: 50 px;
}
</style>