import './app.css'
import Admin from './pages/Admin.svelte'

const app = new Admin({
  target: document.getElementById('app')!,
})

export default app