import { defineStore } from 'pinia'
import axios from 'axios'

export const useCatsStore = defineStore('cats', {
  state: () => ({ catsData: [] }),
  actions: {
    async getCatsData() {
      let config = {
        method: 'get',
        url: 'https://cat-fact.herokuapp.com/facts'
      };

      try {
        const response = await axios(config);
        this.catsData = response.data;
      } catch (error) {
        this.catsData = [];
      }
    }
  }
})
