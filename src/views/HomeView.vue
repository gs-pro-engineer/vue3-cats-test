<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="home">
    <RouterLink to="/cats">
      <button>Cats</button>
    </RouterLink>
    <h1>This is an Home page</h1>
    <table>
      <tr>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
  }

  button {
    margin-left: 30px;
  }
}
</style>
