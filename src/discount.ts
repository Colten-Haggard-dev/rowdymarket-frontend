import './app.css'
import Discount from './pages/Discount.svelte'

const app = new Discount({
  target: document.getElementById('app')!,
})

export default app