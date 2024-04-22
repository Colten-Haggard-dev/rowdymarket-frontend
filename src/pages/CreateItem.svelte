<script lang="ts">
    import Topnav from "../lib/Topnav.svelte";


  let name: string = "item"
  let amount: number = 0
  let price: number = 0
  let desc: string = "desc"
  let image_dir: string = "/pizza.png"

  async function createItem() {
    try {
      const response = await fetch('http://localhost:8080/api/Items', {
        method: 'POST',
        body: JSON.stringify({
          "name": name,
          "description": desc,
          "price": price,
          "quantityAvailable": amount,
          "imageUrl": image_dir
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to create item: ${response.status} ${response.statusText}`);
      }

    } catch (error) {
      console.log(error instanceof Error ? error.message : 'An unknown error occurred')
    }
  }

  function handleSubmit() {
    createItem()
  }
</script>

<main>
  <Topnav />

  <form on:submit={handleSubmit} class="create-container">
    <div class="input-group">
      <label for="name">Item name:</label>
      <input type="name" id="name" bind:value={name} required>
    </div>
    <div class="input-group">
      <label for="price">Price:</label>
      <input type="price" id="price" bind:value={price} required>
    </div>
    <div class="input-group">
      <label for="amount">Amount:</label>
      <input type="amount" id="amount" bind:value={amount} required>
    </div>
    <div class="input-group">
      <label for="image">Amount:</label>
      <input type="image" id="image" alt="Item" bind:value={image_dir} required>
    </div>

    <button type="submit">List item</button>    
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
</style>
  