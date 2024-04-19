<script lang="ts">
  import Listing from "../lib/Listing.svelte"

  let listings: Listing[] = [ (null as unknown) as Listing ]
  let numListings: number = 0

  function search(str: string) {
    for (let i = 0; i < listings.length; ++i)
    {
      if (listings[i].hasTag(str))
      {
        console.log("found")
      }
    }
    
  }

  function add_listing() {
    numListings++
    listings.push( (null as unknown) as Listing )
  }
</script>

<main>
  <div class="filter">
    <label for="search">Search:</label>
    <input style="min-width: 20vw;" type="text" id="search" name="search" on:submit={()=>search("item")} placeholder="Try searching for new clothes..."><br><button on:click={()=>search("item")}>Search</button><br>
  </div>
  <div class="listings">
    {#each {length: numListings} as _item, i}
      <svelte:component this={Listing} bind:this={listings[i]}></svelte:component>
    {/each}
    <button style="float: left;" on:click={() => add_listing()}>
      Add Listing
    </button>
  </div>
  
</main>

<style>
  .filter {
    min-width: 66vw;
    min-height: 20vh;
  }

  .listings {
    min-width: 66vw;
    max-width: 67vw;
    display: flex;
    flex-wrap: wrap;
    background-color: #495A70;
    outline: 2px solid blue;
    overflow-y: scroll;
  }
</style>