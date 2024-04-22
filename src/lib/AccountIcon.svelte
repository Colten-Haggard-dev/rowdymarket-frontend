<script lang="ts">
  const active = "active"
  const inactive = "inactive"

  $: current = inactive

  let username = "Rowdy"
  let loggedin = sessionStorage.getItem("user_id") != null;

    // Function to fetch items from the API
  async function fetchUser() {
    try {
      const url = "http://localhost:8080/api/Users/" + sessionStorage.getItem('user_id')
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

  function updateInfo()
  {
    fetchUser().then(user => {
      if (user)
      {
        username = user.username
      }
    })
  }

  if (loggedin)
    updateInfo()

  export function isLoggedIn(): boolean
  {
    return loggedin
  }

  export function useHover(isactive: boolean): void
  {
    if (isactive)
      current = active
    else
      current = inactive
  }

  function updateVUId() {
    const user_id = sessionStorage.getItem("user_id")

    if (user_id)
      sessionStorage.setItem('view_user_id', user_id)
  }
</script>

<main class={current}>
  {#if loggedin}
    <img src="/UTSA-Roadrunners-Logo.png" alt="Account icon" width="32" height="32"/>
    <a on:click={updateVUId} href="/user">{username}</a>
  {:else}
    <a class={current} href="/login">Login/SignUp</a>
  {/if}
  
</main>

<style>
  * {
    text-align: center;
    float: left;
  }

  .account {
    float: right;
    font-size: small;
  }

  a:hover {
    color: #0C2340;
  }

  /* Change the color of links on hover */
  .active {
    color: #0C2340;
  }

  /* Style the links inside the navigation bar */
  .inactive {
    color: #F15A22;
  }
</style>