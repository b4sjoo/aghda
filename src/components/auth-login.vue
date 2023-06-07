<template>
  <authenticator :hide-sign-up="true" style="padding: 128px">
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

async function getJwtToken() {
  try {
    const session = await Auth.currentSession();
    const jwtToken = session.getAccessToken().getJwtToken();
    const response = await apiHTTPClient.get('/api/v1/users', {
      headers: {
        Authorization: jwtToken,
      },
    });
    console.log('JWT Token:', jwtToken);

    // Share the JWT token with your backend
  } catch (error) {
    console.error('Error getting JWT token:', error);
  }
}
</script>
