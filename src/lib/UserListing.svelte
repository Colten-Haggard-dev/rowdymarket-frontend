<script lang="ts">
  export let userId: number = 0
  export let address: string = ""
  export let email: string = ""
  export let password: string = ""
  export let phoneNumber: string = ""
  export let userName: string = ""

function click(){
  sessionStorage.setUser('orderId', userId.toString())
  location.href = "/user"
}
</script>

<main>
  <button on:click={()=>click()}>
    <p>
      UserId: {userId}<br>
      Address: {address}<br>
      Email: {email}<br>
      Phone Number: {phoneNumber}<br>
      User Name: {userName}<br>
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