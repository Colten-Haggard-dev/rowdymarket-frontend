<script lang="ts">
  import Counter from './lib/Counter.svelte'
  import AccountIcon from "./lib/AccountIcon.svelte"
  
  const active = "active"
  const inactive = "inactive"

  $: bclasses = [inactive, inactive, inactive, inactive]

  let account_icon: AccountIcon

  function update_classes(idx: number): void {
    for (let index = 0; index < bclasses.length; index++) {
      bclasses[index] = inactive
    }

    bclasses[idx] = active
  }

  function update_nav(str: string): void {
    switch (str) {
      case "home":
        update_classes(0)
        break;
      case "news":
        update_classes(1)
        break;
      case "contact":
        update_classes(2)
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
    <a class={bclasses[0]} on:click={() => update_nav("home")} href="#home">Home</a>
    <a class={bclasses[1]} on:click={() => update_nav("news")} href="#news">News</a>
    <a class={bclasses[2]} on:click={() => update_nav("contact")} href="#contact">Contact</a>
    <a class={bclasses[3]} on:click={() => update_nav("about")} href="#about">About</a>
    <a style="float: right;" on:click={() => account_icon.logIn("Rowdy")} on:mouseenter={() => account_icon.useHover(true)} on:mouseleave={() => account_icon.useHover(false)} href="#signup"> <AccountIcon bind:this={account_icon} /> </a>
  </div>

  <div class="card">
    <Counter />
  </div>

  <p class="checkout">
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>
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
    background-color: #F15A22;
    color: #0C2340;
  }

  .checkout {
    color: #F15A22;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }

  /* Add a color to the active/current link */
  .topnav a.active {
    background-color: #F15A22;
    color: white;
  }
</style>
