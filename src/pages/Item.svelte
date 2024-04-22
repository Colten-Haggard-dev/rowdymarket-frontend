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

  let currItem: Item

  onMount(async () => {
		// Example of how to use the fetchItems function
    await itemRequest().then(item => currItem);
	});
</script>

<main>
  <Topnav />

  
</main>

<style>
</style>