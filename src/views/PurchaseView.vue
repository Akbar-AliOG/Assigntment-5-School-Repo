<script setup>
<<<<<<< HEAD
import axios from "axios";
import LoginViewVue from '../components/LoginView.vue';
import SiteModal from "../components/SiteModal.vue";
import { ref } from "vue";
=======
import FooterCompVue from '../components/FooterComp.vue';
import LoginView from '../components/LoginView.vue';
import SiteModal from '../components/SiteModal.vue';
import Discovery from '../components/Discovery.vue';
>>>>>>> b63a16896ba5165645881778203183b901c621ff

</script>

<template>
    <div>
<<<<<<< HEAD
        <LoginViewVue></LoginViewVue>
    </div>

    <button @click="getmovies()">Movies</button>

    <div v-if="details">

=======
        <FooterCompVue></FooterCompVue>
        <LoginView></LoginView>
        <Discovery></Discovery>
        <!-- <SiteModal></SiteModal> -->
>>>>>>> b63a16896ba5165645881778203183b901c621ff
    </div>
</template>

<style scoped>

</style>