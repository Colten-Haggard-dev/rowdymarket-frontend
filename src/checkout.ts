import './app.css'
import Checkout from './pages/Checkout.svelte'

const app = new Checkout({
  target: document.getElementById('app')!,
})

export default app