import './app.css'
import ShoppingCart from './lib/ShoppingCart.svelte'

const app = new ShoppingCart({
  target: document.getElementById('app')!,
})

export default app