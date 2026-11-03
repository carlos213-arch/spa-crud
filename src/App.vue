<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navegacion">
      <router-link to="/">Inicio</router-link>
      <router-link to="/productos">Productos</router-link>
      <router-link to="/carrito">Carrito</router-link>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>
.navegacion { display: flex; gap: 1rem; margin-bottom: 2rem; }
</style>