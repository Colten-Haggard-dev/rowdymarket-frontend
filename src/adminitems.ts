import './app.css'
import AdminItems from './pages/AdminItems.svelte'

const app = new AdminItems({
  target: document.getElementById('app')!,
})

export default app