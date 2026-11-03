import { createRouter, createWebHashHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Productos from '../views/Productos.vue'
import FormularioProducto from '../views/FormularioProducto.vue'
import Carrito from '../views/Carrito.vue'

const routes = [
  { path: '/', component: Inicio },
  { path: '/productos', component: Productos },
  { path: '/productos/crear', component: FormularioProducto },
  { path: '/productos/:id', component: FormularioProducto, props: true },
  { path: '/carrito', component: Carrito }
]

const router = createRouter({
  // Usamos HashHistory para evitar problemas de ruteo al publicar en GitHub Pages
  history: createWebHashHistory(),
  routes
})

export default router