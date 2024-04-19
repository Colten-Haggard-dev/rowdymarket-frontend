<script lang="ts">
    import AccountIcon from "./AccountIcon.svelte"
    
    const active = "active"
    const inactive = "inactive"
  
    let bclasses = [inactive, inactive, inactive, inactive]

    if (document.URL.endsWith("browse"))
    {
      bclasses[0] = active
    }
    else if (document.URL.endsWith("contact"))
    {
      bclasses[1] = active
    }
    else if (document.URL.endsWith("about"))
    {
      bclasses[2] = active
    }
    else if (document.URL.endsWith("cart"))
    {
      bclasses[3] = active
    }
  
    let account_icon: AccountIcon
  </script>
  
  <main>
    <div class="topnav">
      <a class={bclasses[0]} href="/browse">Browse</a>
      <!-- <a class={bclasses[1]} on:click={() => update_nav("news")} href="#news">News</a> -->
      <a class={bclasses[1]} href="/contact">Contact</a>
      <a class={bclasses[2]} href="/about">About</a>

      <a style="float: right;" on:mouseenter={() => account_icon.useHover(true)} on:mouseleave={() => account_icon.useHover(false)} href="#account"> <AccountIcon bind:this={account_icon}/> </a>
      <a style="float: right;" class={bclasses[3]} href="/cart">Cart</a>
    </div>
  </main>
  
  <style>
    .topnav {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
    }
  
    /* Add a black background color to the top navigation */
    .topnav {
      background-color: #0C2340;
      overflow: hidden;
    }
  
    /* Style the links inside the navigation bar */
    .topnav a {
      float: left;
      color: #F15A22;
      text-align: center;
      padding: 16px 16px;
      text-decoration: none;
      font-size: 20px;
    }
  
    /* Change the color of links on hover */
    .topnav a:hover {
      background-color: #D3430D;
      color: #0C2340;
    }
  
    /* Add a color to the active/current link */
    .topnav a.active {
      background-color: #F15A22;
      color: #0C2340;
    }
  </style>
  