import './app.css'
import AdminEditItem from './pages/AdminEditItem.svelte'

const app = new AdminEditItem({
  target: document.getElementById('app')!,
})

export default app