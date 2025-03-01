import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useMovieStore = defineStore("movie", {
  state: () => ({
    search: ref(null),
    movies: ref([]),
    moviCount: ref(0),
  }),
  getters: {},
  actions: {
    async searchMovies() {
      if (this.search != "") {
        const { data } = await axios.get(
          `http://www.omdbapi.com/?apikey=5b973fa7&s=${this.search}`
        );
        console.log(data);
        this.movies = data.Search;
        this.moviCount = data.totalResults;
      }
    },
  },
});
