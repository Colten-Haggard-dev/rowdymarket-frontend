import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')!,
})

export default app

// fetch('http://localhost:8080/api/Items', (
//   {
//     method: "POST",
//     body:
//       JSON.stringify({
//         "name": "Chips",
//         "description": "Bag of chips",
//         "price": 5.00,
//         "quantityAvailable": 3,
//         "imageUrl": "/lays_alcohol.png"
//       }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }
// ))
//   .then(response => response.json)
//   .catch(e => {
//     console.log(e);
//   })

// fetch('http://localhost:8080/api/Items', (
// {
//   method: "POST",
//   body:
//     JSON.stringify({
//       "name": "Water",
//       "description": "Bottle of water",
//       "price": 6.00,
//       "quantityAvailable": 10,
//       "imageUrl": "/water.png"
//     }),
//   headers: {
//     'Content-Type': 'application/json'
//   }
// }))
//   .then(response => response.json)
//   .catch(e => {
//     console.log(e);
//   })

// fetch('http://localhost:8080/api/Items', (
// {
//   method: "POST",
//   body:
//     JSON.stringify({
//       "name": "Pizza",
//       "description": "Box of pizza",
//       "price": 6.00,
//       "quantityAvailable": 10,
//       "imageUrl": "/pizza.png"
//     }),
//   headers: {
//     'Content-Type': 'application/json'
//   }
// }))
//   .then(response => response.json)
//   .catch(e => {
//     console.log(e);
//   })

// fetch('http://localhost:8080/api/Items{28}', (
// {
//   method: "POST",
//   body:
//     JSON.stringify({
//       "name": "Apple Laptop",
//       "description": "Best laptop on the market",
//       "price": 6.00,
//       "quantityAvailable": 10,
//       "imageUrl": "/apple.png"
//     }),
//   headers: {
//     'Content-Type': 'application/json'
//   }
// }))
//   .then(response => response.json)
//   .catch(e => {
//     console.log(e);
//   })

// let item: Item

// async function fetchItems(): Promise<Item[] | undefined> {
//   try {
//     const response = await fetch("http://localhost:8080/api/Items/27", {
//       method: "GET",
//       headers: {
//         "Accept": "application/json"
//       }
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const items: Item[] = await response.json();
//     console.log("Item fetched successfully:", items);

//     // Here you can manipulate the fetched data
//     return items;
//   } catch (error) {
//     console.error("Error fetching items:", error);
//     return undefined;
//   }
// }

// await fetchItems().then(items => {
//   if (items)
//   {
//     console.log(items)
//   }
// })


// let isLoading: boolean = false;
// let errorMessage: string = '';

// async function createUser() {
//   isLoading = true;
//   errorMessage = '';
//   try {
//     const response = await fetch('http://localhost:8080/api/Users/register', {
//       method: 'POST',
//       body: JSON.stringify({
//         "username": "exampleUser",
//         "password": "examplePassword",
//         "email": "user@example.com",
//         "address": "123 Example St",
//         "phoneNumber": "123-456-7890"
//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     if (!response.ok) {
//       throw new Error(`Failed to create user: ${response.status} ${response.statusText}`);
//     }
//   } catch (error) {
//     errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
//   }
//   isLoading = false;
// }

// createUser()