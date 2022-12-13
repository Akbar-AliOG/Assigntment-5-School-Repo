<script setup>
import { ref } from 'vue';
import axios from "axios";
import SiteModal from '../components/SiteModaltesting.vue';
import LoginViewVue from '../components/LoginView.vue';

const movie = ref(null);
const showModal = ref(false);
const selectedId = ref(0);

const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};

const closeModal = () => {
  showModal.value = false;
};

const getTrendingMovies = async () => {
    movie.value = (
        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=8d992bf093d92b23f2529662f9291664&language=en-US&page=1')
    ).data;
    console.log(movie.value);
};

</script>

<template>
    <div class="main-container">
        <h1>Welcome to Blockbuster Productions</h1>
        <button @click="getTrendingMovies()">Get Movies</button>
    </div>

    <div v-if="movie" class="movie-container">
        <div v-for="result in movie.results" class="MovieList">
            <img  @click="openModal(movie.id)" :src="`https://image.tmdb.org/t/p/w500${result.poster_path}`" alt="">
            <h1 id='title'>{{result.original_title}}</h1>
            <h2>Release Date:{{result.release_date}}</h2>
        </div>
    </div>
  <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
</template>

<style scoped>

</style>