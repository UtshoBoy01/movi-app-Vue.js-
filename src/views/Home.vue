<script setup></script>
<template>
  <div class="home">
    <div class="featured-movi-card">
      <router-link to="/movie/tt0078346">
        <img
          src="https://m.media-amazon.com/images/M/MV5BMzFlZDJjMDAtZDYxZS00NzZhLTk2ODMtZWRlODA3Njk3ZTdmXkEyXkFqcGc@._V1_SX300.jpg"
          alt="Movi Image"
          class="featured-movi-img"
        />
        <div class="movi-details">
          <h3>Superman</h3>
          <p>
            An alien orphan is sent from his dying planet to Earth, where he
            grows up to become his adoptive home's first and greatest superhero.
          </p>
        </div>
      </router-link>
    </div>

    <form action="" class="search-bok">
      <div class="">
        <input type="text" placeholder="Search tha Movie" />
        <input type="submit" value="Search" />
      </div>
    </form>

    <div class="movies-list">
      <div class="movie">
        <router-link to="/movie/tt0078346" class="movie-link">
          <div class="movi-image">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMzFlZDJjMDAtZDYxZS00NzZhLTk2ODMtZWRlODA3Njk3ZTdmXkEyXkFqcGc@._V1_SX300.jpg"
              alt=""
            />
            <div class="movi-type">Action, Adventure, Sci-Fi</div>
          </div>
          <div class="movi-details">
            <p class="movie-year">1992</p>
            <h3>Superman</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.home {
  .featured-movi-card {
    position: relative;
    .featured-movi-img {
      display: block;
      width: 100%;
      height: 300px;
      object-fit: cover;
      position: relative;
      z-index: 0;
    }
    .movi-details {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgb(0, 0, 0, 0.6);
      padding: 0;
      z-index: 1;
      h3 {
        color: white;
      }
      p {
        color: white;
      }
    }
  }
  .search-bok {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    input {
      display: block;
      appearance: none;
      border: none;
      background: none;
      outline: none;

      &[type="text"] {
        width: 100%;
        color: #fff;
        background-color: #1f2937;
        font-size: 20px;
        padding: 10px 16px;
        border-radius: 12px;
        margin-bottom: 12px;
        transition: 0.4s;
        &::placeholder {
          color: #f3f3f3;
        }
        &:focus {
          box-shadow: 0px 0px 6px rgba($color: #000000, $alpha: 0.1);
        }
      }
      &[type="submit"] {
        width: 100%;
        max-width: 300px;
        background-color: #34d399;
        padding: 12px;
        border-radius: 8px;
        color: #fff;
        font-size: 20px;
        text-transform: uppercase;

        &:active {
          background-color: #064e3b;
        }
      }
    }
  }
  .movies-list {
    display: flex;
    flex-wrap: nowrap;
    margin: 0px 9px;
  }
  .movie {
    max-width: 50%;
    flex: 1 1 50%;
    padding: 16px 8px;

    .movie-link {
      display: flex;
      flex-direction: column;
      height: 100%;

      .movi-image {
        position: relative;
        display: block;
        img {
          display: block;
          width: 100%;
          height: 275px;
          object-fit: cover;
        }
        .movi-type {
          position: absolute;
          padding: 8px 16px;
          background-color: #34d399;
          color: white;
          bottom: 16px;
          left: 0px;
          text-transform: capitalize;
        }
      }
      .movi-details {
        background-color: #1f2937;
        padding: 16px 8px;
        flex-grow: 1 1 100%;
        border-radius: 0px 0px 8px 8px;

        .movie-year {
          color: #aaa;
          font-size: 14px;
        }
        h3 {
          color: white;
          font-weight: 600;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
