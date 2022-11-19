<template>
  <div>
    <HeaderComponent/>
  </div>
    <MainComponent :items="store.movie"/>
  <div>
  
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import {store} from './store';
import axios from 'axios';

  export default {
    components: {
    HeaderComponent,
    MainComponent
  },
  data() {
    return {
      store,
    }
  },

  watch: {
    'store.params.query'(newVal, oldVal){
        if(newVal !== oldVal){
          this.getMovies();
        }
    }
  },

  methods: {
    getMovies() {
      const apiurl = store.baseURL + store.endPoint.movie;
      const params = store.params;

      axios.get(apiurl, {params}).then((res) => {
        store.movie = res.data.results;
        console.log(store.movie)
      })
    }
  },

}
</script>

<style lang="scss" scoped>
@import './assets/style/general.scss';


</style>
