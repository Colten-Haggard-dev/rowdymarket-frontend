<script lang="ts">
  export let discountId: number = 0
  export let code: string = ""
  export let discountValue: number = 0
  export let expirationDate: string = ""

function click(){
  sessionStorage.setDiscount('view_discount_id', discountId.toString())
  location.href = "/Discount"
}
</script>

<main>
  <button on:click={()=>click()}>
    <p>
      DiscountId: {discountId}<br>
      Code: {code}<br>
      Discount Value: {discountValue}<br>
      Expiration Date: {expirationDate}<br>
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