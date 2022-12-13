<script setup>
import { useRouter } from "vue-router";
const router = useRouter()


</script>

<template>
    <div>
        <RouterLink to="/login" custom v-slot="{ navigate }">
    <button @click="navigate" role="link">Login</button>
</RouterLink>
        <h1>header</h1>
    </div>
</template>

<style scoped>
h1{
    color: white;
}
</style>