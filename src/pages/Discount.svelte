<script>
  import Topnav from "../lib/Topnav.svelte";
  import AdminSideNav from "../lib/AdminSideNav.svelte";
  import DiscountPortal from "../lib/DiscountPortal.svelte";
  </script>
  
  <main>
    <Topnav />
    <div class="sideNav"><AdminSideNav /></div>
    <DiscountPortal />
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