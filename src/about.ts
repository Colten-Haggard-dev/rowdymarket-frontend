import './app.css'
import About from './pages/About.svelte'

const app = new About({
  target: document.getElementById('app')!,
})

export default app