<script lang="ts">
  export let orderId: number = 0
  export let userId: number = 0
  export let orderDate: string = ""
  export let orderStatus: string = ""
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
      Date: {orderDate}<br>
      Status: {orderStatus}<br>
      Price: ${totalPrice}<br>
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