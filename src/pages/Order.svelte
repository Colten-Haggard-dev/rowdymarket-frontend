<script lang="ts">
  import { onMount } from "svelte";

  async function fetchOrder() {
    try {
      const url = "http://localhost:8080/api/Orders/" + sessionStorage.getItem('order_id')
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const order: Order = await response.json();
      console.log("User fetched successfully:", order);

      // Here you can manipulate the fetched data
      return order;
    } catch (error) {
      console.error("Error fetching user:", error);
      return undefined;
    }
  }

  async function fetchUser() {
    try {
      const url = "http://localhost:8080/api/Users/" + order.userId
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const user: User = await response.json();
      console.log("User fetched successfully:", user);

      // Here you can manipulate the fetched data
      return user;
    } catch (error) {
      console.error("Error fetching user:", error);
      return undefined;
    }
  }

  function updateVUID() {
    sessionStorage.setItem('view_user_id', user.userId.toString())
  }

  let order: Order
  let user: User

  onMount(async () => {
    await fetchOrder().then(t_order => {
      if (t_order)
      {
        order = t_order
      }
    })

    await fetchUser().then(t_user => {
      if (t_user)
      {
        user = t_user
      }
    })
  })
</script>

<main>
  <p>
    Order ID: {order.orderId}<br>
    User ID: {order.userId}
    <a href="/user" on:click={updateVUID}>User: {user.username}</a><br>
    Order Date: {order.orderDate}<br>
    Order Status: {order.orderStatus}<br>
    Order Total: {order.totalAmount}
  </p>
</main>

<style>
</style>
  