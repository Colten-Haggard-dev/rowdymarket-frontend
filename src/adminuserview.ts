import './app.css'
import AdminUserView from './pages/AdminUserView.svelte'

const app = new AdminUserView({
  target: document.getElementById('app')!,
})

export default app