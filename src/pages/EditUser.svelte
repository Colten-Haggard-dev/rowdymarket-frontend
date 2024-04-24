<script lang="ts">
  import { onMount } from "svelte";
  import Topnav from "../lib/Topnav.svelte";
  import AdminSideNav from "../lib/AdminSideNav.svelte";
  
  let email: string = '';
  let username: string = '';
  let password: string = '';
  let address: string = '';
  let phone: string = '';

  async function fetchUser() {
    try {
      const url = "http://localhost:8080/api/Users/" + sessionStorage.getItem('view_user_id')
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

  async function updateUser() {
    try {
      const url = 'http://localhost:8080/api/Users/' + sessionStorage.getItem('view_user_id')
      const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
          "username": username,
          "password": password,
          "email": email,
          "address": address,
          "phoneNumber": phone
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error(`Failed to create user: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.log(error instanceof Error ? error.message : 'An unknown error occurred')
    }
  }

  async function handleSubmit() {
    await updateUser().then()

    location.href = "/adminuserview"
  }

  onMount(async () => {
    await fetchUser().then(user => {
      if (user)
      {
        email = user.email
        username = user.username
        password = user.password
        address = user.address
        phone = user.phone_number
      }
    })
  })

</script>

<main>
  {#if sessionStorage.getItem('is_admin')}
    <div class = "sideNav">
      <AdminSideNav />
    </div>
  {:else}
    <Topnav />
  {/if}
  

  <form class="create-container">
    <div class="input-group">
      <label for="email">Email:</label>
      <input type="email" id="email" bind:value={email} required>
    </div>

    <div class="input-group">
      <label for="address">Address:</label>
      <input type="address" id="address" bind:value={address} required>
    </div>

    <div class="input-group">
      <label for="phone">Phone Number:</label>
      <input type="phone" id="phone" bind:value={phone} required>
    </div>

    <div class="input-group">
      <label for="username">Username:</label>
      <input type="username" id="username" bind:value={username} required>
    </div>

    <div class="input-group">
      <label for="password">Password:</label>
      <input type="password" id="password" bind:value={password} required>
    </div>

    <button on:click={handleSubmit} type="submit">Update user</button>    
  </form>
</main>

<style>
  .create-container {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }

  .input-group {
    margin-bottom: 15px;
  }

  input, button {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
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
  