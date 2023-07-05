<template>
<body> 
  <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
      <symbol id="check2" viewBox="0 0 16 16">
        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
      </symbol>
      <symbol id="circle-half" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
      </symbol>
      <symbol id="moon-stars-fill" viewBox="0 0 16 16">
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
      </symbol>
      <symbol id="sun-fill" viewBox="0 0 16 16">
        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
      </symbol>
    </svg>

    <div class="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
      <button class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
              id="bd-theme"
              type="button"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              aria-label="Toggle theme (auto)">
        <svg class="bi my-1 theme-icon-active" width="1em" height="1em"><use href="#circle-half"></use></svg>
        <span class="visually-hidden" id="bd-theme-text">Toggle theme</span>
      </button>
      <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
            <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#sun-fill"></use></svg>
            Light
            <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
            <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#moon-stars-fill"></use></svg>
            Dark
            <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
            <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#circle-half"></use></svg>
            Auto
            <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
      </ul>
    </div>

  <main>
  <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel" data-bs-theme="light">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="parent">
          <img alt="titanic"
             src="@/assets/titanic.jpg"
             width="1400"
             height="512"/>
          <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        </div>
          <div class="container">
          <div class="carousel-caption text-start">
            <h1>A treasure-hunt inspired by Titanic</h1>
            <p>Dive into a captivating world of romance and intrigue and unlock the lost memories of the Titanic.</p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img alt="heartoftheocean"
             src="@/assets/heartoftheocean.jpg"/>
        <div class="container">
          <div class="carousel-caption">
            <h1>Find the Heart of the Ocean</h1>
            <p class="opacity-75">A heart-thrilling treasure hunting game for people chasing love and mystery.</p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img alt="costumes"
             src="@/assets/costumes.png" 
             width="1400"
             height="512"/>
        <div class="container">
          <div class="carousel-caption text-end">
            <h1>A costume party in Victorian era</h1>
            <p>Transport yourself to an enchanting era of elegance and opulence.</p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>


  <!-- Marketing messaging and featurettes
  ================================================== -->
  <!-- Wrap the rest of the page in another container to center all the content. -->

  <div class="container marketing">

    <!-- Three columns of text below the carousel -->
    <div class="row">
      <div class="col-lg-4">
        <img alt="party"
             class="rounded-circle"
             src="@/assets/party.png"
             width="180"
             height="180"/>
        <h2 class="fw-normal">Exciting</h2>
        <p>A once-in-a-lifetime experience that you will never regret!</p>
      </div><!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <img alt="mysterious"
             class="rounded-circle"
             src="@/assets/mysterious.jpg"
             width="180"
             height="180"/>
        <h2 class="fw-normal">Mysterious</h2>
        <p>Embark on a mystical journey into your destiny as the ancient art of tarot unveils the secrets of your future!</p>
      </div><!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <img alt="kiddo"
             class="rounded-circle"
             src="@/assets/kiddo.jpg"
             width="180"
             height="180"/>
        <h2 class="fw-normal">Mind-bending</h2>
        <p>Unlock the labyrinth of your mind with this exhilarating and mind-bending puzzle challenge!</p>
      </div><!-- /.col-lg-4 -->
    </div><!-- /.row -->


    <!-- START THE FEATURETTES -->

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading fw-normal lh-1">A great real-world treasure hunting game. <span class="text-body-secondary">For a party with a car.</span></h2>
        <p class="lead">Starting from 1000 4th Ave, Seattle, WA 98104 on 2023/07/08</p>
      </div>
      <div class="col-md-5">
        <img alt="startingpoint"
             src="@/assets/startingpoint.png"
             width="400"
             height="400"/>
      </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading fw-normal lh-1">Back to the good old days. <span class="text-body-secondary">Be the time machine on your own.</span></h2>
        <p class="lead">Dress like the victorian people and eat your dinner with the right fork!</p>
      </div>
      <div class="col-md-5 order-md-1">
        <img alt="victorian"
             src="@/assets/victorian.png"
             width="400"
             height="400"/>
      </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading fw-normal lh-1">It all starts with an exhibition of the Heart of the Ocean...</h2>
        <p class="lead">We've received a letter that someone is going to steal it. Please help us to protect it!</p>
      </div>
      <div class="col-md-5">
        <img alt="sapphire"
             src="@/assets/sapphire.png"
             width="400"
             height="400"/>
      </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading fw-normal lh-1">Are you really able to find it with the clue of Tarot? <span class="text-body-secondary">Checkmate.</span></h2>
        <p class="lead">The game might have already started without your notice. Be prepared!</p>
      </div>
      <div class="col-md-5 order-md-1">
        <img alt="tarot"
             src="@/assets/tarot.png"
             width="400"
             height="400"/>
      </div>
    </div>

    <hr class="featurette-divider">
    <!-- /END THE FEATURETTES -->

  </div><!-- /.container -->
    <footer class="container">
    <p class="float-end"><a href="#">Back to top</a></p>
    <p>&copy; 2017–2023 GeoGaming Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
  </footer> 
</main>
</body>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
});
</script>

<style>
@import '../styles/carousel.css';
</style>