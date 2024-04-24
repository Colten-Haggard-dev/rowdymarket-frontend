import './app.css'
import UserListing from './lib/UserListing.svelte'

const app = new UserListing({
  target: document.getElementById('app')!,
})

export default app