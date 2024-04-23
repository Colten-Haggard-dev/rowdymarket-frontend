import './app.css'
import AdminOrders from './pages/AdminOrders.svelte'

const app = new AdminOrders({
  target: document.getElementById('app')!,
})

export default app