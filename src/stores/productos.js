import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('productos', () => {
  const productos = ref([
    { id: 1, nombre: 'Laptop Gamer', precio: 15000 },
    { id: 2, nombre: 'Mouse Inalámbrico', precio: 500 }
  ])

  const agregarProducto = (producto) => {
    producto.id = Date.now() // ID único temporal
    productos.value.push(producto)
  }

  const editarProducto = (id, productoActualizado) => {
    const index = productos.value.findIndex(p => p.id === Number(id))
    if (index !== -1) {
      productos.value[index] = { ...productoActualizado, id: Number(id) }
    }
  }

  const eliminarProducto = (id) => {
    productos.value = productos.value.filter(p => p.id !== id)
  }

  const obtenerProductoPorId = (id) => {
    return productos.value.find(p => p.id === Number(id)) || null
  }

  return { productos, agregarProducto, editarProducto, eliminarProducto, obtenerProductoPorId }
})