<script lang="ts">
    import { writable, derived } from 'svelte/store';
    import { onMount } from 'svelte'
    import Topnav from './Topnav.svelte';
    import Listing from './Listing.svelte';
  
    interface Item {
      itemId: number;
      name: string;
      description: string;
      price: number;
      quantityAvailable: number;
      imageUrl: string;
    }
  
    interface Discount {
      code: string;
      amount: number; // Discount amount as a decimal (e.g., 0.20 for 20% off)
    }

    async function fetchItem(str: string) {
      try {
        const url = "http://localhost:8080/api/Items/" + str
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Accept": "application/json"
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const item: Item = await response.json();
        console.log("Item fetched successfully:", item);

        // Here you can manipulate the fetched data
        return item;
      } catch (error) {
        console.error("Error fetching item:", error);
        return undefined;
      }
    }

    const discount = 0;
    const taxRate = 0.0825; // Tax rate of 8.25%
    let total = 0

    let cart: Item[] = []
    let cart_ids = sessionStorage.getItem('cart')?.split(',');

    onMount(async () => {
      if (cart_ids == null)
        return

      for (let i: number = 0; i < cart_ids.length; ++i)
      {
        cart.push((null as unknown) as Item)
        await fetchItem(cart_ids[i]).then(item => {
          if (item)
          {
            cart[i] = item
          }
        })
      }

      total = calcTotal()
    });

    function calcTotal() {
      let sum: number = cart[0].price;

      for (let i: number = 1; i < cart.length; ++i)
      {
        sum += cart[i].price * cart[i].quantityAvailable;
      }

      return sum + sum * taxRate
    }

    function removeItem(id: number)
    {
      cart.splice(id, 1)
      cart_ids?.splice(id, 1)

      if (cart_ids != null)
        sessionStorage.setItem('cart', cart_ids?.toString())

      location.reload()
      //delete cart[id]

      console.log(cart)
    }
    async function orderRequest() {
      
    }
    async function checkoutRequest(id: number): Promise<void> {
      try {
        const url = 'http://localhost:8080/api/Items/' + id
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
        });
  
        if (!response.ok) {
          throw new Error('Failed to delete items from the database.');
        }
  
        console.log('Items successfully deleted from the database.');
      } catch (error) {
        console.error('Error during checkout:', error);
      }
    }

    async function checkout() {
      for (let i: number = 0; i < cart.length; ++i)
      {
        await checkoutRequest(cart[i].itemId)
      }

      location.href = "/checkout"
    }


  </script>
  
  <style>
  </style>
  
  <div>
    <Topnav />

    {#each cart as _item, i}
      <button on:click={() => removeItem(i)}>Remove
        <Listing id={cart[i].itemId} name={cart[i].name} price={cart[i].price} quantity={cart[i].quantityAvailable} image_dir={cart[i].imageUrl}/>
      </button>
    {/each}

    <br>Total = ${total.toFixed(2)} (including tax)<br>
    <button on:click={checkout}>Checkout</button>
  </div>