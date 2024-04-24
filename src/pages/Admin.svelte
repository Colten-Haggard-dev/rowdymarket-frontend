<script lang="ts">
  import AdminSideNav from "../lib/AdminSideNav.svelte";

  sessionStorage.setItem("is_admin", "true")
</script>

<main>
  <!-- <Topnav /> -->
  <div class = "sideNav">
    <AdminSideNav />
  </div>
  <div class="welcome">
    <p>WELCOME TO THE ADMIN PORTAL</p>
  </div>
</main>

<style>
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
  .welcome{
    font-size: 50px;
  }
</style>
  