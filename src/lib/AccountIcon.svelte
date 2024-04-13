<script lang="ts">
  const active = "active"
  const inactive = "inactive"

  $: current = inactive
  $: loggedin = false
  $: username = ""

  export function logIn(uname: string) {
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
    {username}
  {:else}
    Login/SignUp
  {/if}
  
</main>

<style>
  * {
    text-align: center;
    float: left;
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