<script lang="ts">

</script>

<main>
  <div class="buttonContainer">
    <a href="http://localhost:5173/adminorders">
      <br><button class="adminButton">Orders and Transactions</button><br>
    </a>
    <a href="http://localhost:5173/adminuserview">
      <br><button class="adminButton">User View and Edit</button><br>
    </a>
    <a href="http://localhost:5173/discount">
      <br><button class="adminButton">Discount Portal</button><br>
    </a>
    <a href="http://localhost:5173/adminitems">
      <br><button class="adminButton">Create and Modify Items</button><br>
    </a>
    <a href="http://localhost:5173/">
      <br><button class="adminButton">{"<"}-Exit portal-{">"}</button><br>
    </a>
  </div>
</main>

<style>

.adminButton {
    min-width: 2vw;
    max-width: 10vw;
    border-radius: 0%;
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    color: black;
    overflow-y: scroll;
    overflow: hidden;
  }
</style>