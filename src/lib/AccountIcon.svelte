<script lang="ts">
  import User from "../pages/User.svelte";

  const active = "active"
  const inactive = "inactive"

  $: current = inactive
  $: loggedin = false
  $: username = ""

  export function isLoggedIn(): boolean
  {
    return loggedin
  }

  export function logIn(uname: string): void {
    loggedin = true
    username = uname
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