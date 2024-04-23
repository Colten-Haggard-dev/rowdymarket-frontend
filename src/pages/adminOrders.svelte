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
    top:10.5%;
    display: flex;
    flex-wrap: flex;
    background-color: gray;
    width: 10%;
    min-height: 100%
  }
</style>