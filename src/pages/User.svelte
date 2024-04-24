<script lang="ts">
  import { onMount } from "svelte";
  import Topnav from "../lib/Topnav.svelte";

  let image_dir: string = "/UTSA-Roadrunners-Logo.png"
  let user_name: string = "Rowdy"
  let email: string = "rowdy.roadrunner@utsa.edu"
  let address: string = "1 UTSA Circle, San Antonio, TX 78249"

  const is_user: boolean = sessionStorage.getItem('user_id') == sessionStorage.getItem('view_user_id')

  // Function to fetch items from the API
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

  onMount(async () => {
    await fetchUser().then(user => {
      if (user)
      {
        user_name = user.username
        email = user.email
        address = user.address
      }
    })
  })

  function createListing()
  {
    location.href = "/createitem"
  }

  function logOut()
  {
    sessionStorage.removeItem('user_id')
    location.href = "/login"
  }

</script>

<main>
  <Topnav />
  <img class="image" src={image_dir} alt="Item" width="300" height="300"/>
  <h1>{user_name}</h1>
  <h2>{email}</h2>
  <h2>{address}</h2>

  {#if is_user}
    <button>
      Edit settings
    </button><br>
    <button on:click={createListing}>
      List item
    </button><br>
    <button on:click={logOut}>
      Log out
    </button>
  {/if}
  <!-- <UserSettings /> -->

</main>

<style>
  button {
    margin-bottom: 20px;
  }
</style>
  