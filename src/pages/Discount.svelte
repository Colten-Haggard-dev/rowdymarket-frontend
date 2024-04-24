<script lang="ts">
  import AdminSideNav from "../lib/AdminSideNav.svelte";
  import DiscountListing from "../lib/DiscountListing.svelte"
  import { onMount } from "svelte";

  let code: string = ""
  let discount_value: number = 0
  let is_percent: boolean = true

  let aDiscounts: Discount[] = [];

  async function fetchDiscounts(): Promise<Discount[] | undefined> {
    try {
      const url = "http://localhost:8080/api/discounts"
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const discounts: Discount[] = await response.json();
      console.log("Orders fetched successfully:", discounts);

      // Here you can manipulate the fetched data
      return discounts;
    } catch (error) {
      console.error("Error fetching items:", error);
      return undefined;
    }
  }

  async function createDiscount()
  {
    try {
      const response = await fetch('http://localhost:8080/api/discounts', {
        method: 'POST',
        body: JSON.stringify({
          "code": code,
          "discountValue": discount_value,
          "isPercentage": is_percent,
          "expiryDate": new Date(Date.now()).toJSON().toString()
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error(`Failed to create user: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.log(error instanceof Error ? error.message : 'An unknown error occurred')
    }
  }

  async function onSubmit() {
    console.log("submit")
    await createDiscount().then()
  }

  onMount(async () => {
		// Example of how to use the fetchItems function
    await fetchDiscounts().then(discounts => {
      if (discounts) {
        aDiscounts = discounts
      }
    });
	});

</script>

<main>
  <!-- <Topnav /> -->
  <div class="sideNav">
    <AdminSideNav />
  </div>

  <form class="create-container" on:submit={onSubmit}>
    <div class="input-group">
      <label for="code">Discount Code:</label>
      <input type="code" id="code" bind:value={code} required>
    </div>
    <div class="input-group">
      <label for="value">Discount Value:</label>
      <input type="value" id="value" bind:value={discount_value} required>
    </div>

    <button>
      Create Discount
    </button>
  </form><br>

  <div class="discounts" >
    {#each aDiscounts as discount}
      <DiscountListing discountId={discount.discountId} code={discount.code} discountValue={discount.discountValue} expirationDate={discount.experiationDate}/>
    {/each}
  </div>
</main>

<style>

  .sideNav {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-wrap: flex;
    background-color: #0C2340;
    width: 10%;
    min-height: 100%
  }

  .discounts {
    min-width: 66vw;
    max-width: 67vw;
    display: flex;
    flex-wrap: wrap;
    background-color: #495A70;
    outline: 2px solid blue;
    overflow-y: scroll;
  }
</style>