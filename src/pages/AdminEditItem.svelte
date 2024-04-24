<script lang="ts">
  import { onMount } from "svelte";
  import AdminSideNav from "../lib/AdminSideNav.svelte";
  
  let name: string = '';
  let description: string = '';
  let price: number = 0;
  let quantityAvailable: number = 0;
  let image_dir: string = "/pizza.png"

  async function fetchItem() {
    try {
      const url = "http://localhost:8080/api/Items/" + sessionStorage.getItem('item_id')
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
      console.log("User fetched successfully:", item);

      // Here you can manipulate the fetched data
      return item;
    } catch (error) {
      console.error("Error fetching user:", error);
      return undefined;
    }
  }

  async function updateItem() {
    try {
      const url = 'http://localhost:8080/api/Items/' + sessionStorage.getItem('item_id')
      const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
          "name": name,
          "description": description,
          "price": price,
          "quantityAvailable": quantityAvailable,
          "imageUrl": image_dir
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error(`Failed to create user: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.log(error instanceof Error ? error.message : 'An unknown error occurred')
    }
  }

  async function handleSubmit() {
    await updateItem().then()

    location.href = "/adminitems"
  }

  onMount(async () => {
    await fetchItem().then(item => {
      if (item)
      {
        name = item.name
        description = item.description
        price = item.price
        quantityAvailable = item.quantityAvailable
        image_dir = item.imageUrl
      }
    })
  })

</script>

<main>
  <!-- <Topnav /> -->
  <div class = "sideNav">
    <AdminSideNav />
  </div>

  <form class="create-container">
    <div class="input-group">
      <label for="name">Name:</label>
      <input type="name" id="name" bind:value={name} required>
    </div>

    <div class="input-group">
      <label for="description">Description:</label>
      <input type="description" id="description" bind:value={description} required>
    </div>

    <div class="input-group">
      <label for="price">Price:</label>
      <input type="price" id="phone" bind:value={price} required>
    </div>

    <div class="input-group">
      <label for="quantityAvailable">Quantity:</label>
      <input type="quantityAvailable" id="quantityAvailable" bind:value={quantityAvailable} required>
    </div>

    <button on:click={handleSubmit} type="submit">Update Item</button>    
  </form>
</main>

<style>
  .create-container {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }

  .input-group {
    margin-bottom: 15px;
  }

  input, button {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
  }
  .sideNav {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-wrap: flex;
    background-color: #0C2340;
    width: 10%;
    min-height: 100%
  }
</style>
  