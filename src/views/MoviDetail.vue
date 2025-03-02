<script setup>
import { onMounted } from "vue";
import { useMovieStore } from "@/stores/movie";
import { useRoute } from "vue-router";

const movieStore = useMovieStore();
const route = useRoute();

onMounted(() => {
  movieStore.getSingleMovi(route.params.id);
});
</script>
<template>
  <div class="movi-details">
    <h3>{{ movieStore.singleMovie.Title }}</h3>
    <p>{{ movieStore.singleMovie.Year }}</p>
    <img :src="movieStore.singleMovie.Poster" alt="" class="movi-image" />
    <p>{{ movieStore.singleMovie.Plot }}</p>
  </div>
</template>
<style lang="scss">
.movi-details {
  padding: 16px;

  h3 {
    color: #fff;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 16px;
  }
  .movi-image {
    display: block;
    max-width: 200px;
    margin-bottom: 16px;
  }
  p {
    color: #fff;
    font-size: 18px;
    line-height: 1.4;
  }
}
</style>
