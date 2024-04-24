import './app.css'
//import AdminItems from './pages/AdminItems.svelte'
import Browse from './pages/Browse.svelte'

const app = new Browse({
  target: document.getElementById('app')!,
})

export default app