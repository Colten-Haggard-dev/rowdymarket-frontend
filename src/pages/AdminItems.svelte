<script lang="ts">
  import AdminSideNav from "../lib/AdminSideNav.svelte";
  import Listing from "../lib/Listing.svelte";
  import { onMount } from "svelte";
  let aItems: Item[] = [];
  let dir: string = "asc"

  async function fetchItems(): Promise<Item[] | undefined> {
    try {
      const url = "http://localhost:8080/api/Items" + dir
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
      console.log("Orders fetched successfully:", items);

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
        aItems = items
      }
    });
  }

  onMount(async () => {
		// Example of how to use the fetchItems function
    await fetchItems().then(items => {
      if (items) {
        aItems = items
      }
    });
	});

</script>

<main>
  <!-- <Topnav /> -->
  <div class="sideNav">
    <AdminSideNav />
  </div>
  <div class="listings">
  {#each aItems as item}
    <Listing price={item.price} name={item.name} quantity={item.quantityAvailable} id={item.itemId} image_dir={item.imageUrl}/>
  {/each}
  </div>
</main>

<style>
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
  .listings {
    min-width: 66vw;
    max-width: 67vw;
    margin-top: 10%;
    display: flex;
    flex-wrap: wrap;
    background-color: #495A70;
    outline: 2px solid blue;
    overflow-y: scroll;
  }
</style>
  