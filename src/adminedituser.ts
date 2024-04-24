import './app.css'
import EditUser from './pages/EditUser.svelte'

const app = new EditUser({
  target: document.getElementById('app')!,
})

export default app