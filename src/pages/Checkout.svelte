<script lang="ts">
    import Topnav from "../lib/Topnav.svelte";

</script>

<style>
.confirmation-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f3f4f6;
  color: #333;
}

.message {
  font-size: 24px;
  color: #4a90e2;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin: 20px;
}

.email-notice {
  margin-top: 20px;
  font-size: 16px;
  color: #666;
}
</style>

<Topnav />

<div class="confirmation-page">
<div class="message">
  Order Confirmed!
</div>
<div class="email-notice">
  Your order details have been sent via the email associated with your account to the seller. You will be contacted shortly by them.
</div>
</div>