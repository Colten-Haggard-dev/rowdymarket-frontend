import './app.css'
import Order from './pages/Order.svelte'

const app = new Order({
  target: document.getElementById('app')!,
})

export default app