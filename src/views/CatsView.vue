<script>
import { mapState } from 'pinia';
import { RouterLink } from 'vue-router';
import { useCatsStore } from '../stores/cats';

export default {
  setup() {
    const cats = useCatsStore();
    cats.getCatsData();
  },
  computed: {
    ...mapState(useCatsStore, {
      catsData: (state) =>  state.catsData
    }),
  }
}
</script>

<template>
  <div class="cats">
    <RouterLink to="/">
      <button>Home</button>
    </RouterLink>
    <h1>This is an Cats page</h1>
    
    <div v-for="item in catsData" class="item">
      <div>user: {{ item.user }}</div>
      <div>type: {{ item.type }}</div>
      <div>text: {{ item.text }}</div>
      <div>used: {{ item.used }}</div>
      <div>deleted: {{ item.deleted }}</div>
      <div>createdAt: {{ item.createdAt }}</div>
      <div>updatedAt: {{ item.updatedAt }}</div>
      <div>source: {{ item.source }}</div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .cats {
    min-height: 100vh;
  }

  button {
    margin-left: 30px;
  }
}

.item {
  border: 1px solid #000000;
  padding: 10px;
  margin-top: 10px;
}
.item > div {
  border-bottom: 1px solid #000000;
}
</style>
