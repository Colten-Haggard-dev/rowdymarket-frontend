<script lang="ts">
  import { onMount } from 'svelte';
  import Topnav from '../lib/Topnav.svelte';
    import User from './User.svelte';

  let email: string = '';
  let username: string = '';
  let password: string = '';
  let address: string = '';
  let phone: string = '';
  let isError: boolean = false;

  console.log(localStorage.getItem('users'))
  console.log(sessionStorage.getItem('user_id'))

  let isReady: boolean = false
  let loginSwitch: boolean = false

  let isLoading: boolean = false;
  let errorMessage: string = '';

  async function createUser() {
    errorMessage = '';
    try {
      const response = await fetch('http://localhost:8080/api/Users/register', {
        method: 'POST',
        body: JSON.stringify({
          "username": username,
          "password": password,
          "email": email,
          "address": address,
          "phoneNumber": phone
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error(`Failed to create user: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    }
  }

  const handleSubmit = (event: SubmitEvent): void => {
    event.preventDefault();
    if (loginSwitch)
      createUser().then()
    else
      console.log("login")
    //handleLogin();

    // let usr_str: any = localStorage.getItem("users")
    // isReady = false

    // if (!loginSwitch)
    // {
    //   if (usr_str == null)
    //   {
    //     return
    //   }

    //   let users = (usr_str as string).split(',')
    //   users.forEach(function (element, i) {
    //     const user = element.split(' ')
    //     let nfound: boolean = user[0] == username
    //     let pfound: boolean = user[2] == password

    //     if (nfound && pfound)
    //     {
    //       sessionStorage.setItem('user_id', i.toString())
    //     }
    //   });

    //   return
    // }

    // if (usr_str != null)
    // {
    //   let users = (usr_str as string).split(',')
    //   users.push(username + ' ' + email + ' ' + password)
    //   localStorage.setItem('users', users.toString())
    // }
    // else
    // {
    //   let user: string = username + ' ' + email + ' ' + password
    //   localStorage.setItem('users', user)
    // }
  };

  function handleLoginSingup(setup: boolean): void {
    isReady = true
    loginSwitch = setup
  }
</script>

<style>
  .login-container {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  .input-group {
    margin-bottom: 15px;
  }
  input, button {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
  }
</style>


<Topnav />
{#if !isReady}
  <button on:click={() => handleLoginSingup(false)}>Login</button>
  <button on:click={() => handleLoginSingup(true)}>Sign Up</button>
{:else}
  <form on:submit={handleSubmit} class="login-container">
    {#if loginSwitch}
      <div class="input-group">
        <label for="email">Email:</label>
        <input type="email" id="email" bind:value={email} required>
      </div>
      <div class="input-group">
        <label for="address">Address:</label>
        <input type="address" id="address" bind:value={address} required>
      </div>
      <div class="input-group">
        <label for="phone">Phone Number:</label>
        <input type="phone" id="phone" bind:value={phone} required>
      </div>
    {/if}
    <div class="input-group">
      <label for="username">Username:</label>
      <input type="username" id="username" bind:value={username} required>
    </div>
    <div class="input-group">
      <label for="password">Password:</label>
      <input type="password" id="password" bind:value={password} required>
    </div>
    {#if loginSwitch}
      <button type="submit">Sign Up</button>
    {:else}
      <button type="submit">Login</button>
    {/if}
    
  </form>
{/if}

