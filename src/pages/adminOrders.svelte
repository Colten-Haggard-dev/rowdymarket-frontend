<script lang="ts">
  import Topnav from "../lib/Topnav.svelte";
  import AdminSideNav from "../lib/AdminSideNav.svelte";
  import { onMount } from "svelte";
  let aOrders: Order[] = [];
  let dir: string = "asc"
  let sort: string = "unsorted"

  async function fetchOrders(): Promise<Order[] | undefined> {
    try {
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

  async function onChange() {
    await fetchOrders().then(orders => {
      if (orders) {
        aOrders = orders
      }
    });
  }

  onMount(async () => {
		// Example of how to use the fetchItems function
    await fetchOrders().then(orders => {
      if (orders) {
        aOrders = orders
      }
    });
	});

</script>

<main>
  <Topnav />
  <div class="sideNav">
    <AdminSideNav />
  </div>
  <div class="filter">
    <p style="margin-right: 30px;">Sort by: </p>

    <label for="price">Price:</label>
    <input type="radio" id="price" bind:group={sort} on:change={onChange} value="price">
    <label for="username">Username:</label>
    <input type="radio" id="name" bind:group={sort} on:change={onChange} value="name">
    <label for="date">Date:</label>
    <input type="radio" id="quant" bind:group={sort} on:change={onChange} value="date">

    <p style="margin-right: 30px;">Sort direction: </p>

    <label for="asc">Ascending:</label>
    <input type="radio" id="asc" bind:group={dir} on:change={onChange} value="asc">
    <label for="desc">Descending:</label>
    <input type="radio" id="desc" bind:group={dir} on:change={onChange} value="desc">

  </div>
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