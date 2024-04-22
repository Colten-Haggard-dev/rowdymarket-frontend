<script>
import Topnav from "../lib/Topnav.svelte";
import AdminSideNav from "../lib/AdminSideNav.svelte";
import ItemList from "../lib/ItemList.svelte";
</script>

<main>
  <Topnav />
  <div class="sideNav"><AdminSideNav /></div>
  <ItemList />
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