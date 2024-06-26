<script lang="ts">
  import Listing from "../lib/Listing.svelte"
  import Topnav from "../lib/Topnav.svelte"
  import AdminSideNav from "../lib/AdminSideNav.svelte";
  import { onMount } from 'svelte'
  
  let bitems: Item[] = []
  let dir: string = "asc"
  let sort: string = "price"
  let search_str: string = ""
  let search: boolean = false

  // Function to fetch items from the API
  async function fetchItems(): Promise<Item[] | undefined> {
    try {
      const url_end = search ? "/search?query=" + search_str : "?sort=" + sort + "&direction=" + dir
      const url = "http://localhost:8080/api/Items" + url_end
      console.log(url)
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const items: Item[] = await response.json();
      console.log("Items fetched successfully:", items);

      // Here you can manipulate the fetched data
      return items;
    } catch (error) {
      console.error("Error fetching items:", error);
      return undefined;
    }
  }

  async function onChange() {
    await fetchItems().then(items => {
      if (items) {
        bitems = items
      }
    });
  }

  async function onSubmit() {
    search = true

    await fetchItems().then(items => {
      if (items) {
        bitems = items
      }
    });
  }

  function editItem(id: number) {
    sessionStorage.setItem('item_id', id.toString())

    location.href = "/adminedititem"
  }

  onMount(async () => {
		// Example of how to use the fetchItems function
    await fetchItems().then(items => {
      if (items) {
        bitems = items
      }
    });
	});
</script>

<main>
  {#if sessionStorage.getItem('is_admin')}
    <div class = "sideNav">
      <AdminSideNav />
    </div>
  {:else}
    <Topnav />
  {/if}

  <div class="filter">
    <form on:submit|preventDefault={onSubmit}>
      <label for="search">Search:</label>
      <input style="min-width: 20vw;" type="text" id="search" name="search" bind:value={search_str} placeholder="Try searching for new stuff...">
    </form><br>
    
    <p style="margin-right: 30px;">Sort by: </p>

    <label for="price">Price:</label>
    <input type="radio" id="price" bind:group={sort} on:change={onChange} value="price">
    <label for="name">Name:</label>
    <input type="radio" id="name" bind:group={sort} on:change={onChange} value="name">
    <label for="quant">Quantity:</label>
    <input type="radio" id="quant" bind:group={sort} on:change={onChange} value="quantityAvailable">

    <p style="margin-right: 30px;">Sort direction: </p>

    <label for="asc">Ascending:</label>
    <input type="radio" id="asc" bind:group={dir} on:change={onChange} value="asc">
    <label for="desc">Descending:</label>
    <input type="radio" id="desc" bind:group={dir} on:change={onChange} value="desc">

  </div>
  <div class="listings">
    {#each bitems as item}
      {#if sessionStorage.getItem('is_admin')}
        <button on:click={() => editItem(item.itemId)}>
          Edit item
          <Listing id={item.itemId} name={item.name} price={item.price} quantity={item.quantityAvailable} image_dir={item.imageUrl}/>
        </button>
      {:else}
        <Listing id={item.itemId} name={item.name} price={item.price} quantity={item.quantityAvailable} image_dir={item.imageUrl}/>
      {/if}
    {/each}
  </div>
  
</main>

<style>
  input {
    margin-right: 20px;
  }

  .filter {
    min-width: 66vw;
    min-height: 20vh;
    margin-bottom: 50px;
  }

  .listings {
    min-width: 66vw;
    max-width: 67vw;
    display: flex;
    flex-wrap: wrap;
    background-color: #495A70;
    outline: 2px solid blue;
    overflow-y: scroll;
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