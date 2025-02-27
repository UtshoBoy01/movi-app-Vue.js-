<template>
  <div class="app-container">
    <header>
      <router-link :to="{ name: 'home' }" class="nav-link">
        <h1 class="app-title">Movies</h1>
      </router-link>
    </header>

    <main>
      <router-view> </router-view>
    </main>
  </div>
</template>

<style scoped></style>
