<script lang="ts">
  import LandingPage from "./lib/LandingPage.svelte"
  import Browse from "./pages/Browse.svelte"
  import Counter from './lib/Counter.svelte'
  import AccountIcon from "./lib/AccountIcon.svelte"
  
  const active = "active"
  const inactive = "inactive"

  $: bclasses = [inactive, inactive, inactive, inactive]

  let account_icon: AccountIcon
  
  let curr_comp: any = LandingPage

  export function change_comp(comp: any)
  {
    curr_comp = comp
  }

  function update_classes(idx: number): void {
    for (let index = 0; index < bclasses.length; index++) {
      bclasses[index] = inactive
    }

    bclasses[idx] = active
  }

  function update_nav(str: string): void {
    switch (str) {
      case "browse":
        update_classes(0)
        curr_comp = Browse
        break;
      case "news":
        update_classes(1)
        curr_comp = Counter
        break;
      case "contact":
        update_classes(2)
        curr_comp = AccountIcon
        break;
      case "about":
        update_classes(3)
        break;
    
      default:
        break;
    }
  }
</script>

<main>
  <div class="topnav">
    <a class={bclasses[0]} on:click={() => update_nav("browse")} href="#browse">Browse</a>
    <!-- <a class={bclasses[1]} on:click={() => update_nav("news")} href="#news">News</a> -->
    <a class={bclasses[2]} on:click={() => update_nav("contact")} href="#contact">Contact</a>
    <a class={bclasses[3]} on:click={() => update_nav("about")} href="#about">About</a>
    <a style="float: right;" on:click={() => account_icon.logIn("Rowdy")} on:mouseenter={() => account_icon.useHover(true)} on:mouseleave={() => account_icon.useHover(false)} href="#signup"> <AccountIcon bind:this={account_icon}/> </a>
  </div>

  <div class="card">
    <svelte:component this={curr_comp}> </svelte:component>
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

  .card {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
</style>
