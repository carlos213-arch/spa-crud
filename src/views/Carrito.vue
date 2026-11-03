<script setup>
import { useCartStore } from '../stores/carrito'

const storeCarrito = useCartStore()
</script>

<template>
  <section>
    <h2>🛒 Resumen del Carrito</h2>
    
    <div v-if="storeCarrito.items.length === 0" class="alerta">
      Tu carrito está vacío. Agrega productos desde el catálogo.
    </div>

    <div v-else>
      <ul class="lista-carrito">
        <li v-for="item in storeCarrito.items" :key="item.id" class="item-carrito">
          <p>
            <strong>{{ item.nombre }}</strong> <br>
            Precio unitario: ${{ item.precio }} x {{ item.cantidad }}
          </p>
          <p class="subtotal">Subtotal: ${{ item.precio * item.cantidad }}</p>
          <button @click="storeCarrito.eliminarDelCarrito(item.id)">🗑️ Eliminar del carrito</button>
        </li>
      </ul>

      <div class="total-container">
        <h3>Total a Pagar: ${{ storeCarrito.totalAcumulado }}</h3>
        <button @click="storeCarrito.vaciarCarrito" class="btn-vaciar">Vaciar todo el carrito</button>
      </div>
    </div>
  </section>
</template>