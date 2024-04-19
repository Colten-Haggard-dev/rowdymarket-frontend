import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')!,
})

export default app

let isLoading: boolean = false;
let errorMessage: string = '';

async function createUser() {
  isLoading = true;
  errorMessage = '';
  try {
    const response = await fetch('http://localhost:8080/api/orders', {
      method: 'POST',
      body: JSON.stringify({
        "userId": 1,
        "itemIds": [101, 102],
        "quantities": [1, 2],
        "totalPrice": 29.99
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error(`Failed to create user: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
  }
  isLoading = false;
}

createUser()