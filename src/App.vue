<template>
  <nav class="navbar navbar-expand-md mb-4">
    <div class="container">
      <a class="navbar-brand" href="#">Top navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link"><router-link to="/">Home</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"
              ><router-link to="/About" style="text-decoration: none"
                >About</router-link
              ></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>

        <div class="d-flex input-group">
          <div class="col-sm-3">
            <input
              type="search"
              class="form-control"
              placeholder="e.g."
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
          </div>
          <button class="btn btn-light rounded-right">
            <svg class="bi" width="16" height="16">
              <use xlink:href="#search" />
            </svg>
          </button>
        </div>

        <div class="col-md-2 login-field">
          <!-- 
          <router-link to="/login"
            ><button class="btn btn-outline-warning me-2">
              Login
            </button></router-link
          > -->
          <router-link to="/signup"
            ><button class="btn btn-warning me-2">
              Sign-up & Login
            </button></router-link
          >
        </div>
      </div>
    </div>
  </nav>
  <router-view></router-view>
  <body>
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
      <symbol id="bootstrap" viewBox="0 0 118 94">
        <title>Bootstrap</title>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
        ></path>
      </symbol>
      <symbol id="facebook" viewBox="0 0 16 16">
        <path
          d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
        />
      </symbol>
      <symbol id="github" viewBox="0 0 16 16">
        <path
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
        />
      </symbol>
      <symbol id="twitter" viewBox="0 0 16 16">
        <path
          d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
        />
      </symbol>
      <symbol id="twitter" viewBox="0 0 16 16">
        <path
          d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
        />
      </symbol>
      <symbol id="search" viewbox="0 0 16 16">
        <path
          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
        />
      </symbol>
    </svg>

    <div class="b-example-divider"></div>

    <footer class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-6 col-md-2 mb-3">
            <h5>Affiliations</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary"
                  >Mooney Lab</a
                >
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary"
                  >Ellerby Lab</a
                >
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary"
                  >Biomedical Informatics <br />
                  and Medical Education <br />
                  (UW BIME)</a
                >
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary"
                  >Institute of Translational <br />
                  Health Sciences (ITHS)</a
                >
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary"
                  >UW Medicine</a
                >
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary"
                  >Buck Institute <br />
                  for Research on Aging</a
                >
              </li>
            </ul>
          </div>

          <div class="col-6 col-md-1 mb-3">
            <ul class="nav flex-column">
              <li class="nav-item mb-3">
                <a href="#!"
                  ><img
                    alt="BIME logo"
                    src="@/assets/bime.jpeg"
                    width="125"
                    height="125"
                /></a>
              </li>
              <li class="nav-item mb-3">
                <a href="#!"
                  ><img
                    alt="ITHS logo"
                    src="@/assets/iths.jpg"
                    width="125"
                    height="125"
                /></a>
              </li>
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3">
            <ul class="nav flex-column">
              <li class="nav-item mb-3">
                <a href="#!"
                  ><img
                    alt="UW logo"
                    src="@/assets/uw.jpg"
                    width="125"
                    height="125"
                /></a>
              </li>
              <li class="nav-item mb-3">
                <a href="#!"
                  ><img
                    alt="BUCK logo"
                    src="@/assets/buck.png"
                    width="125"
                    height="125"
                /></a>
              </li>
            </ul>
          </div>

          <div class="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden"
                  >Email address</label
                >
                <input
                  id="newsletter1"
                  type="text"
                  class="form-control"
                  placeholder="Email address"
                />
                <button class="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <div
          class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top"
        >
          <p>
            All contents on this site are covered by the
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              >Creative Commons Attribution 4.0 International License</a
            >.
          </p>
          <ul class="list-unstyled d-flex">
            <p>Star this project on GitHub!</p>
            <li class="ms-3">
              <a class="link-body-emphasis" href="#"
                ><svg class="bi" width="24" height="24">
                  <use xlink:href="#github" /></svg
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </body>
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
