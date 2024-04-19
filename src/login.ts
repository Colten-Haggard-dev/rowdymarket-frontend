import './app.css'
import Login from './pages/Login.svelte'

const app = new Login({
  target: document.getElementById('app')!,
})

export default app