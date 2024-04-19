import './app.css'
import User from './pages/User.svelte'

const app = new User({
  target: document.getElementById('app')!,
})

export default app