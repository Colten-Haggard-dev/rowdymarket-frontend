<script lang="ts">
  export let orderId: number = 0
  export let userId: string = ""
  export let itemsIds: number[] = [1,2]
  export let quantities: number[] = [1,2]
  export let totalPrice: number = 9.99

function click(){
  sessionStorage.setOrder('orderId', orderId.toString())
  location.href = "/order"
}
</script>

<main>
  <button on:click={()=>click()}>
    <p>
      {userId}<br>
      Order ID: {orderId}<br>
      Items: {itemsIds}<br>
      Price: {"$"}{totalPrice}<br>
      Quanity: {quantities}<br>
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
</style>