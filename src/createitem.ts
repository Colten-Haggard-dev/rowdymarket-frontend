import './app.css'
import CreateItem from './pages/CreateItem.svelte'

const app = new CreateItem({
  target: document.getElementById('app')!,
})

export default app