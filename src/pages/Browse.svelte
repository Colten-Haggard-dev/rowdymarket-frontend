<script lang="ts">
  import Listing from "../lib/Listing.svelte"
  import Topnav from "../lib/Topnav.svelte"
  import { onMount } from 'svelte'
  
  let bitems: Item[] = []

  // Function to fetch items from the API
  async function fetchItems(): Promise<Item[] | undefined> {
    try {
      const response = await fetch("http://localhost:8080/api/Items", {
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
    <input style="min-width: 20vw;" type="text" id="search" name="search" on:submit={()=>console.log("search")} placeholder="Try searching for new stuff..."><br><button on:click={()=>console.log("search")}>Search</button><br>
  </div>
  <div class="listings">
    {#each bitems as _item, i}
      <!-- <svelte:component this={Listing} bind:this={listings[i]}></svelte:component> -->
      <Listing id={bitems[i].itemId} name={bitems[i].name} price={bitems[i].price} quantity={bitems[i].quantityAvailable} image_dir={bitems[i].imageUrl}/>
    {/each}
  </div>
  
</main>

<style>
  .filter {
    min-width: 66vw;
    min-height: 20vh;
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