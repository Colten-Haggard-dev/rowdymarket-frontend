<script lang="ts">
  import Topnav from "../lib/Topnav.svelte";
  import AdminSideNav from "../lib/AdminSideNav.svelte";
  import OrderListing from "../lib/OrderListing.svelte";
  import { onMount } from "svelte";

  let aOrders: Order[] = [];
  let sort: string = "price_desc"

  async function fetchOrders(): Promise<Order[] | undefined> {
    try {
      const url = "http://localhost:8080/api/Oders?sortBy=" + sort
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

    <label for="price_asc">Price Ascending:</label>
    <input type="radio" id="price_asc" bind:group={sort} on:change={onChange} value="price_asc">
    <label for="price_desc">Price Descending:</label>
    <input type="radio" id="price_desc" bind:group={sort} on:change={onChange} value="price_desc">
    <label for="username">Username:</label>
    <input type="radio" id="username" bind:group={sort} on:change={onChange} value="username">
    <label for="date">Date:</label>
    <input type="radio" id="date" bind:group={sort} on:change={onChange} value="date">

  </div>
  <div class="orders">
    {#each aOrders as order}
      <OrderListing orderId={order.id} userId={order.userId} orderDate={order.orderDate} orderStatus={order.orderStatus} totalPrice={order.price}/>
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

  .orders {
    min-width: 66vw;
    max-width: 67vw;
    display: flex;
    flex-wrap: wrap;
    background-color: #495A70;
    outline: 2px solid blue;
    overflow-y: scroll;
  }
</style>