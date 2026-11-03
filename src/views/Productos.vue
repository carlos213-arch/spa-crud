<script setup>
import { useProductStore } from '../stores/productos'
import { useCartStore } from '../stores/carrito'
import { useRouter } from 'vue-router'

const storeProductos = useProductStore()
const storeCarrito = useCartStore()
const router = useRouter()

const irAEditar = (id) => {
  router.push(`/productos/${id}`)
}
</script>

<template>
  <section>
    <h2>📦 Gestión de Productos</h2>
    <button @click="router.push('/productos/crear')" class="btn-crear">
      + Crear Nuevo Producto
    </button>

    <div v-if="storeProductos.productos.length === 0" class="alerta">
      No hay productos registrados en el sistema.
    </div>
    
    <ul v-else class="lista-productos">
      <li v-for="producto in storeProductos.productos" :key="producto.id" class="item-producto">
        <div>
          <strong>{{ producto.nombre }}</strong> - ${{ producto.precio }}
        </div>
        <div class="acciones">
          <button @click="irAEditar(producto.id)">Editar</button>
          <button @click="storeProductos.eliminarProducto(producto.id)">Eliminar</button>
          <button @click="storeCarrito.agregarAlCarrito(producto)">🛒 Agregar al carrito</button>
        </div>
      </li>
    </ul>
  </section>
</template>