<script setup lang="ts">
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
</script>

<template>
  <header data-bs-theme="dark">
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">GeoGaming</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link"><router-link to="/">Home</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/pending" style="text-decoration: none">
                Start</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/countdown" style="text-decoration: none">
                Contact</router-link></a>
          </li>
        </ul>
        <div class="col-md-2 login-field">
          <router-link to="/countdown">
            <button class="btn btn-warning me-2">
              Registration & Login
            </button>
          </router-link>
          </div>
      </div>
    </div>
  </nav>
</header>
  <router-view></router-view>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

.nav-item a {
  color: #dcf5fd;
  text-decoration: none;
}

.nav-item a:hover {
  font-weight: bold;
  color: #dcf5fd;
  text-decoration: none;
}

.nav-item a.router-link-exact-active {
  font-weight: bold;
  color: #fdf4dc;
  text-decoration: none;
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.bi {
  vertical-align: -0.125em;
  fill: #fdf4dc;
}

.navbar {
  background-color: #533a71;
  font-size: 1.25rem;
}

.navbar .form-control {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

nav a {
  color: #2c3e50;
}

.navbar .form-control:focus {
  border-color: #ced4da;
  box-shadow: 0px 0px 0px inset, 0px 0px 0px;
}

.navbar-brand {
  font-weight: bold;
  --bs-navbar-brand-color: #fdf4dc;
  --bs-navbar-brand-hover-color: #85754d;
}

.navbar-nav {
  --bs-navbar-active-color: #fdf4dc;
  --bs-navbar-hover-color: #dcf5fd;
  --bs-navbar-disabled-color: rgba(255, 255, 255, 0.5);
}

.navbar .btn-light {
  background-color: #fff;
  border: 1px solid #ced4da;
  border-left-width: 0;
}

.navbar .btn-warning {
  font-weight: 700;
  background-color: #fdf4dc;
  border: 1px solid #fdf4dc;
  color: #533a71;
}

.navbar .btn-warning:hover {
  font-weight: 700;
  background-color: #85754d;
  border-color: #fdf4dc;
  color: #fdf4dc;
}

.navbar .btn-outline-warning {
  font-weight: 700;
  color: #fdf4dc;
  border: 1px solid #fdf4dc;
}

.navbar .btn-outline-warning:hover {
  font-weight: 700;
  color: #533a71;
  background-color: #fdf4dc;
  border-color: #fdf4dc;
}

.navbar .bi {
  fill: rgba(0, 0, 0, 0.65);
}

.py-5 {
  background-color: #533a71;
  color: #fdf4dc;
}

.py-5 .nav-link {
  color: #fdf4dc;
  font-size: 0.75rem;
}
</style>
