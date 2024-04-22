<script lang="ts">
  import Topnav from "../lib/Topnav.svelte";
  import AdminSideNav from "../lib/AdminSideNav.svelte";
  import CreateItem from "../lib/CreateItem.svelte";
</script>

<main>
  <Topnav />
  <div class = "sideNav">
    <AdminSideNav />
  </div>
  <div class="welcome">
    <p>WELCOME TO THE ADMIN PORTAL</p>
  </div>
  <CreateItem />
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
  .welcome{
    font-size: 50px;
  }
</style>
  