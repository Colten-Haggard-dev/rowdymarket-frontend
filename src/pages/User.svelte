<script lang="ts">
  import UserSettings from "../lib/UserSettings.svelte"

  let image_dir: string = "/UTSA-Roadrunners-Logo.png"
  let user_name: string = "Rowdy"
  let email: string = "rowdy.roadrunner@utsa.edu"
  let address: string = "1 UTSA Circle, San Antonio, TX 78249"

  const is_user: boolean = GlobalVars.curr_user_id == GlobalVars.view_user_id
</script>

<main>
  <img class="image" src={image_dir} alt="Item" width="300" height="300"/>
  <h1>{user_name}</h1>
  <h2>{email}</h2>
  {#if is_user}
    <h2>{address}</h2>
    <UserSettings />
  {/if}

</main>

<style>
</style>
  