<script setup>
import { ref, onMounted } from 'vue'
import { useProductStore } from '../stores/productos'
import { useRouter, useRoute } from 'vue-router'

const store = useProductStore()
const router = useRouter()
const route = useRoute()

// El id llega por los parámetros de la URL cuando estamos editando
const props = defineProps(['id']) 

const producto = ref({
  nombre: '',
  precio: 0
})

onMounted(() => {
  if (props.id) {
    const prodExistente = store.obtenerProductoPorId(props.id)
    if (prodExistente) {
      producto.value = { ...prodExistente }
    }
  }
})

const guardarProducto = () => {
  if (props.id) {
    store.editarProducto(props.id, producto.value)
  } else {
    store.agregarProducto(producto.value)
  }
  router.push('/productos') // Redirigir a la lista después de guardar
}
</script>

<template>
  <section>
    <h2>{{ props.id ? '✏️ Editar' : '📝 Crear' }} Producto</h2>
    
    <form @submit.prevent="guardarProducto" class="formulario">
      <div>
        <label>Nombre del producto:</label>
        <input v-model="producto.nombre" type="text" required placeholder="Ej. Teclado Mecánico" />
      </div>
      
      <div>
        <label>Precio:</label>
        <input v-model.number="producto.precio" type="number" required min="1" />
      </div>
      
      <button type="submit">Guardar Producto</button>
      <button type="button" @click="router.push('/productos')">Cancelar</button>
    </form>
  </section>
</template>