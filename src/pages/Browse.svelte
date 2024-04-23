<script lang="ts">
  import Listing from "../lib/Listing.svelte"
  import Topnav from "../lib/Topnav.svelte"
  import { onMount } from 'svelte'
  
  let bitems: Item[] = []
  let dir: string = "asc"
  let sort: string = "unsorted"

  // Function to fetch items from the API
  async function fetchItems(): Promise<Item[] | undefined> {
    try {
      // const dir = udir ? "desc" : "asc"
      // let sort: string
      // switch (sort_id) {
      //   case 0:
      //     sort = "price"
      //     break;
      //   case 1:
      //     sort = "name"
      //     break;
      //   case 2:
      //     sort = "quantityAvailable"
      //     break;
      
      //   default:
      //     sort = "unsorted"
      //     break;
      // }

      const url_end = sort != "unsorted" ? "Items?sort=" + sort + "&direction=" + dir : "Items";
      const url = "http://localhost:8080/api/" + url_end
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
  <Topnav />
  <div class="filter">
    <label for="search">Search:</label>
    <input style="min-width: 20vw;" type="text" id="search" name="search" on:submit={()=>console.log("search")} placeholder="Try searching for new stuff..."><br>
    
    <p style="margin-right: 30px;">Sort by: </p>

    <label for="unsorted">Unsorted:</label>
    <input type="radio" id="unsorted" bind:group={sort} value="unsorted">
    <label for="price">Price:</label>
    <input type="radio" id="price" bind:group={sort} value="price">
    <label for="name">Name:</label>
    <input type="radio" id="name" bind:group={sort} value="name">
    <label for="quant">Quantity:</label>
    <input type="radio" id="quant" bind:group={sort} value="quantityAvailable">

    <p style="margin-right: 30px;">Sort direction: </p>

    <label for="asc">Ascending:</label>
    <input type="radio" id="asc" bind:group={dir} value="asc">
    <label for="desc">Descending:</label>
    <input type="radio" id="desc" bind:group={dir} value="desc">

  </div>
  <div class="listings">
    {#each bitems as _item, i}
      <Listing id={bitems[i].itemId} name={bitems[i].name} price={bitems[i].price} quantity={bitems[i].quantityAvailable} image_dir={bitems[i].imageUrl}/>
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
</style>