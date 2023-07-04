<template>
  <authenticator :social-providers="['google']" style="padding: 128px">
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      <button @click="getJwtToken">print JWT</button>
      <button @click="signOut">Sign Out</button>
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
