<script lang="ts">
  let symbol: string = "$"
  export let price: number = 10
  export let name: string = "Rowdy balls"
  export let quantity: number = 0
  export let image_dir: string = "/UTSA-Roadrunners-Logo.png"
  export let id: number = -1

  function click() {
    let temp = sessionStorage.getItem('cart')

    if (temp != null)
    {
      let str: string[] = temp.split(',')
      for (let i: number = 0; i < str.length; ++i)
      {
        if (id.toString() == str[i])
          return
      }

      str.push(id.toString())
      sessionStorage.setItem('cart', str.toString())
    }
    else
    {
      sessionStorage.setItem('cart', id.toString())
    }
  }
</script>

<main>
  <button on:click={()=>click()}>
    <img class="image" src={image_dir} alt="Item" width="100" height="100"/>
    <p>
      {name}<br>
      Price: {symbol}{price}<br>
      Quanity: {quantity}<br>
    </p>
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
  