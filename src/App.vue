<template>
  <!--Navigation Bar-->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Al-Qur'an</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="About" class="nav-link">Surah</router-link>
          <router-link to="Surah" class="nav-link">Ayat</router-link>
        </div>
      </div>
    </div>
  </nav>

  <!--Router View-->
  <RouterView/>
</template>

<style scoped>
.nav-link{
  font-family: Verdana;
  font-size: 24px;
}

</style>
