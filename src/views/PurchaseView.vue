<script setup>
import axios from "axios";
import LoginViewVue from '../components/LoginView.vue';
import SiteModal from "../components/SiteModal.vue";
import { ref } from "vue";

</script>

<template>
    <div>
        <LoginViewVue></LoginViewVue>
    </div>

    <button @click="getmovies()">Movies</button>

    <div v-if="details">

    </div>
</template>

<style scoped>

</style>