import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('carrito', () => {
  const items = ref([])

  const agregarAlCarrito = (producto) => {
    const existe = items.value.find(i => i.id === producto.id)
    if (existe) {
      existe.cantidad++
    } else {
      items.value.push({ ...producto, cantidad: 1 })
    }
  }

  const eliminarDelCarrito = (id) => {
    items.value = items.value.filter(item => item.id !== id)
  }

  const vaciarCarrito = () => {
    items.value = []
  }

  const totalAcumulado = computed(() => {
    return items.value.reduce((total, item) => total + (item.precio * item.cantidad), 0)
  })

  return { items, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, totalAcumulado }
})