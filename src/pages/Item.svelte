<script lang="ts">
  import Topnav from "../lib/Topnav.svelte";
  import { onMount } from 'svelte'

  async function itemRequest() {
    try {
      const url: string = "http://localhost:8080/api/Items/" + sessionStorage.getItem('item_id')
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
      console.log("Items fetched successfully:", item);

      // Here you can manipulate the fetched data
      return item;
    } catch (error) {
      console.error("Error fetching item:", error);
      return undefined;
    }
  }

  function addToCart() {
    let temp = sessionStorage.getItem('cart')

    if (temp)
    {
      let str: string[] = temp.split(',')
      for (let i: number = 0; i < str.length; ++i)
      {
        if (currItem.itemId.toString() == str[i])
          return
      }

      str.push(currItem.itemId.toString())
      sessionStorage.setItem('cart', str.toString())
    }
    else
    {
      sessionStorage.setItem('cart', currItem.itemId.toString())
    }

    location.href = "/browse"
  }

  let currItem: Item

  onMount(async () => {
    await itemRequest().then(item => {
      if (item)
        currItem = item
    });
	});
</script>

<main>
  <Topnav />

  {#if currItem}
    <div>
      <img class="image" src={currItem.imageUrl} alt="Item" width="300" height="300"/>
      
      <h1>
        {currItem.name}
      </h1>

      <h2>
        {currItem.description}<br><br>
        Price: ${currItem.price}<br>
        Quantity: {currItem.quantityAvailable}
      </h2>
      {#if sessionStorage.getItem('user_id')}
        <button on:click={addToCart}>
          Add to cart
        </button>
      {/if}
      
    </div>
  {/if}
</main>

<style>
</style>