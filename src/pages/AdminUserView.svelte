<script lang="ts">
  import Topnav from "../lib/Topnav.svelte";
  import AdminSideNav from "../lib/AdminSideNav.svelte";
  import UserListing from "../lib/UserListing.svelte";
  import { onMount } from "svelte";
  let aUsers: User[] = [];

  async function fetchUsers(): Promise<User[] | undefined> {
    try {
      const response = await fetch("http://localhost:8080/api/Users", {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const users: User[] = await response.json();
      console.log("Orders fetched successfully:", users);

      // Here you can manipulate the fetched data
      return users;
    } catch (error) {
      console.error("Error fetching items:", error);
      return undefined;
    }
  }

  onMount(async () => {
		// Example of how to use the fetchItems function
    await fetchUsers().then(users => {
      if (users) {
        aUsers = users
      }
    });
	});

</script>

<main>
  <Topnav />
  <div class="sideNav">
    <AdminSideNav />
  </div>
  <div class="listings">
  {#each aUsers as user}
    <UserListing userId={user.userId} userName={user.username} address={user.address} email={user.email} phoneNumber={user.phone_number} />
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
  .listings {
    min-width: 66vw;
    max-width: 67vw;
    margin-top: 10%;
    display: flex;
    flex-wrap: wrap;
    background-color: #495A70;
    outline: 2px solid blue;
    overflow-y: scroll;
  }
</style>
  