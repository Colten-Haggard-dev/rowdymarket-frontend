<script lang="ts">
  import Topnav from "../lib/Topnav.svelte";
  import AdminSideNav from "../lib/AdminSideNav.svelte";
  import DiscountListing from "../lib/DiscountListing.svelte"
  import { onMount } from "svelte";

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
  <Topnav />
  <div class="sideNav">
    <AdminSideNav />
  </div>
  <div class="discounts">
    {#each aDiscounts as discount}
      <DiscountListing discountId={discount.discountId} code={discount.code} discountValue={discount.discountValue} expirationDate={discount.experiationDate}/>
    {/each}
  </div>
</main>

<style>

  .sideNav {
    position: fixed;
    left: 0;
    top: 9.6%;
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