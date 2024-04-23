<script>
  import AdminSideNav from "../lib/AdminSideNav.svelte";
  import Topnav from "../lib/Topnav.svelte";
</script>

<main>
  <Topnav />
  <div class="sideNav">
    <AdminSideNav />
  </div>
  <div>This is the order and transaction page for admins</div>
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