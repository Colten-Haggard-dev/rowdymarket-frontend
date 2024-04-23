import './app.css'
import AdminOrders from './pages/adminOrders.svelte'

const app = new AdminOrders({
  target: document.getElementById('app')!,
})

export default app