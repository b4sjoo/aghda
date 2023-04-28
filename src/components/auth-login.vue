//user login component
<template>
    <div class="auth-login">
        <h1 class="Header">User Login</h1>
        <form>
            <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" v-model="name">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
            </div>
            <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button class="btn btn-primary btn-sm" @click="onClickLoginButton">Login</button>
            Does not have an account? <button @click="signInWithGoogle">Sign in with Google</button>
        </form>
        
        <div id="g_id_onload"
     data-client_id="858473685500-e7hpfvtu874otsien525ohpo3hck1glb.apps.googleusercontent.com"
     data-context="signup"
     data-ux_mode="popup"
     data-login_uri="http:localhost/8084"
     data-nonce=""
     data-auto_prompt="false">
</div>

<div class="g_id_signin"
     data-type="standard"
     data-shape="rectangular"
     data-theme="filled_blue"
     data-text="signup_with"
     data-size="medium"
     data-locale="en-US"
     data-logo_alignment="left">
</div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { Auth, Amplify  } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import amplifyConfig from "@/amplify-config";

Amplify.configure(amplifyConfig);

export default defineComponent({
    name: 'AuthLogin',
    
    title() {
        return 'User Login';
    },

    props: {
    },
    
    data() {
        return {
            name: '',
            password: '',
        };
    },
    
    // eslint-disable-next-line
    created() {
    },

    methods: {
    async signInWithGoogle(): Promise<void> {
      try {
        await Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google});
    } catch (error) {
        console.error("Error signing in with Google:", error);
      }
    },

    onClickLoginButton() {
            console.log('login:', this.name, this.password);
        },
    },
});


</script>

<style scoped>
.auth-login {
    text-align: start;
    max-width:520px;
    margin: 0 auto;
    padding: 32px;
}
</style>
