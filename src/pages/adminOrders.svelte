<script lang="ts">
  import Topnav from "../lib/Topnav.svelte";
  import AdminSideNav from "../lib/AdminSideNav.svelte";
  import { onMount } from "svelte";
  let aOrders: Order[] = [];
  let dir: string = "asc"
  let sort: string = "unsorted"

  async function fetchOrders(): Promise<Order[] | undefined> {
    try {
      const url_end = sort != "unsorted" ? "Orders?sort=" + sort + "&direction=" + dir : "Orders";
      const url = "http://localhost:8080/api/Oders?sort=" + dir
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

      const orders: Order[] = await response.json();
      console.log("Orders fetched successfully:", orders);

      // Here you can manipulate the fetched data
      return orders;
    } catch (error) {
      console.error("Error fetching items:", error);
      return undefined;
    }
  }


  onMount(async () => {
		// Example of how to use the fetchItems function
    await fetchOrders().then(orders => {
      if (orders) {
      aOrders = orders
      }
    });
	}
</script>

<main>
  <Topnav />
  <div class="sideNav">
    <AdminSideNav />
  </div>
  <div>This is the order and transaction page for admins</div>
</main>

<style>
  .sideNav {
    position: fixed;
    left: 0;
    top: 7.5%;
    display: flex;
    flex-wrap: flex;
    background-color: #0C2340;
    width: 10%;
    min-height: 100%
  }
</style>