<script lang="ts">
  import Topnav from "../lib/Topnav.svelte";
  import AdminSideNav from "../lib/AdminSideNav.svelte";
  import { onMount } from "svelte";
  let aItems: Item[] = [];
  let dir: string = "asc"

  async function fetchItems(): Promise<Item[] | undefined> {
    try {
      const url = "http://localhost:8080/api/Item?sort=" + dir
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
  <Topnav />
  <div class="sideNav">
    <AdminSideNav />
  </div>
  <div>This is the user view and modify page for admins</div>
</main>

<style>
  .sideNav {
    position: fixed;
    left: 0;
    top: 9.6%;
    display: flex;
    flex-wrap: flex;
    background-color: #0C2340;
    width: 10%;
    min-height: 100%
  }
</style>
  