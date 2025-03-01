<template>
  <div class="app-container">
    <header>
      <router-link :to="{ name: 'home' }" class="nav-link">
        <h1 class="app-title">Movies <span>App</span></h1>
      </router-link>
    </header>

    <main>
      <div class="container">
        <router-view> </router-view>
      </div>
    </main>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  &::selection {
    background: transparentize($color: #34d399, $amount: 0.5);
  }
}
body {
  background-color: #4b5563;
}
a {
  text-decoration: none;
}
header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background-color: #1f2937;
  box-shadow: 0px 0px 6px rgba($color: #000000, $alpha: 0.1);
}
h1 {
  color: #fff;
  font-size: 28px;
  span {
    color: #34d399;
  }
}
.container {
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}
</style>
