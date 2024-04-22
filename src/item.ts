import './app.css'
import Item from './pages/Item.svelte'

const app = new Item({
  target: document.getElementById('app')!,
})

export default app