<script setup>
import { ref } from "vue";
import axios from "axios";
 
const id = ref("");
const movie = ref(null);
 
const getMovies = async () => {
  const data = id.value;
  movie.value = (
    await axios.get(`https://api.themoviedb.org/3/movie/${data}`, {
      params: {
        api_key: "8d992bf093d92b23f2529662f9291664",
      },
    })
  ).data;
};
</script>
 
<template>
  <select v-model="id">
    <option value="272">Batman Begins</option>
    <option value="155">The Dark Knight</option>
    <option value="49026">The Dark Knight Rises</option>
    <option value="120">The Lord of the Rings:The Fellowship of the Ring</option>  
    <option value="121">The Lord of the Rings:The Two Towers</option>  
    <option value="122">The Lord of the Rings:The Return of the King</option>
    <option value="238">The Godfather</option>
    <option value="240">The Godfather II</option>
    <option value="242">The Godfather III</option>
    <option value="24428">The Avengers</option>
    <option value="299536">Avengers:Infinity War</option>
    <option value="299534">Avengers:Endgame</option>
  </select>
  <button @click="getMovies">Get</button>
  <div v-if="movie" class="movie-container">
 
    <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="">
    <h1 id='title'>{{movie.original_title}}</h1>
    <h2>Release Date:{{movie.release_date}}</h2>
    <h3>Website: {{movie.homepage}}</h3>
    <h2>Runtime: {{movie.runtime}} minutes</h2>
    <h3>Buget: ${{movie.budget}}</h3>
    <h3>Revenue: ${{movie.revenue}}</h3>
    <h3>popularity: {{movie.popularity}}</h3>
    <h3>Vote Average:{{movie.vote_average}} stars</h3>
    <h3>Vote Count:{{movie.voute_count}} people</h3>
    <h3>Tagline: "{{movie.tagline}}"</h3>
    <h3>Overview: {{movie.overview}}</h3>
 
 
 
  </div>
</template>
 
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Chewy&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');
 
body {
    background-color: rgb(11, 11, 11);
    color: white;
    font-family: 'Abel', sans-serif;
 
}
 
#title{
    font-family: 'Chewy', cursive;
    font-size: 70px;
    text-align: center;
    text-decoration: underline;
    color: rgb(202, 101, 202);
}
 
img {
    float: left;
    border: 2px solid rgb(235, 229, 229);
    margin-right: 10px;
}
</style>
 
 
 
