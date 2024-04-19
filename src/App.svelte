<script lang="ts">
  import LandingPage from "./lib/LandingPage.svelte"
  import Topnav from "./lib/Topnav.svelte"

  localStorage.setItem('user_id', '-1')
  localStorage.setItem('view_user_id', '-1')
</script>

<main>
  <Topnav />

  <div class="card">
    <svelte:component this={LandingPage}> </svelte:component>
  </div>
</main>

<style>
  .card {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
</style>
