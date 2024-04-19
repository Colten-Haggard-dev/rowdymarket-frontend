<script lang="ts">
  const active = "active"
  const inactive = "inactive"

  $: current = inactive

  let username = "Rowdy"
  let loggedin = sessionStorage.getItem("user_id") != null;

  console.log(sessionStorage.getItem("user_id"))

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
</script>

<main class={current}>
  {#if loggedin}
    <img src="/UTSA-Roadrunners-Logo.png" alt="Account icon" width="32" height="32"/>
    <a href="/user">{username}</a>
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