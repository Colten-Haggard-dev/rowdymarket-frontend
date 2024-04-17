<script lang="ts">
  let denom: string = "USD"
  let symbol: string = "$"
  let price: number = 10
  let image_dir: string = "/UTSA-Roadrunners-Logo.png"

  export let tags = ["item"]

  function click(params:type) {
    console.log("funny ah")
  }

  export function hasTag(tag: string): boolean {
    tags.forEach(element => {
      if (element == tag)
        return true
    });

    return false
  }
</script>

<main>
  <button on:click={()=>click()}>
    <img class="image" src={image_dir} alt="Item" width="100" height="100"/>
    <p>Price: {symbol}{price}</p>
  </button>
</main>

<style>
  p {
    color: black;
  }

  main {
    margin: 16px 16px 16px 16px;
    min-width: 11vw;
    max-width: 11vw;
    min-height: 22vh;
    max-width: 22vh;
    float: left;
  }

  button {
    background-color: #DBDEE3;
  }

  .image {
    padding: 16px 16px;
  }
</style>
  