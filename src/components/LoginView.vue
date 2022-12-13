<script setup>
import { ref } from 'vue';
<<<<<<< HEAD
import SiteModal from './SiteModaltesting.vue';
=======
import SiteModal from '../components/SiteModal.vue';
>>>>>>> b63a16896ba5165645881778203183b901c621ff

const showModal = ref(false);
const selectedId = ref(0);

const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<template>
  <div>
    <h1>Login</h1>
    <button @click="openModal(5000)">Modal</button>
  </div>
  <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
</template>

<style scoped>

</style>