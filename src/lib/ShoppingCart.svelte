<script lang="ts">
    import { onMount } from 'svelte'
    import Topnav from './Topnav.svelte';
    import Listing from './Listing.svelte';

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
            cartAddRequest(item);
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
      if (!cart_ids)
      {
        sessionStorage.removeItem('cart')
        return
      }

      //cart.splice(id, 1)
      cart_ids.splice(id, 1)

      if (cart_ids.length != 0)
        sessionStorage.setItem('cart', cart_ids.toString())

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

      sessionStorage.removeItem('cart')

      location.href = "/checkout"
    }

    async function cartAddRequest(item: Item) {
      try {
        const url = 'http://localhost:8080/api/Cart/add?userId=' + sessionStorage.getItem('user_id') + "&itemId=" + item.itemId + "&quantity=" + item.quantityAvailable + "&discountPercent=" + discount
        const response = await fetch( url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

      if (!response.ok) {
        throw new Error(`Failed to add to shopping cart: ${response.status} ${response.statusText}`);
      }

      } catch (error) {
        console.log(error instanceof Error ? error.message : 'An unknown error occurred')
      }
    }

  </script>
  
  <style>
  </style>
  
  <div>
    <Topnav />
    {#if cart_ids}
      {#each cart as _item, i}
        <button on:click={() => removeItem(i)}>Remove
          <Listing id={cart[i].itemId} name={cart[i].name} price={cart[i].price} quantity={cart[i].quantityAvailable} image_dir={cart[i].imageUrl}/>
        </button>
      {/each}

      

      <br>Total = ${total.toFixed(2)} (including tax)<br>
      <button on:click={checkout}>Checkout</button>
    {:else}
      <h1>No items in cart...</h1>
    {/if}
    
  </div>