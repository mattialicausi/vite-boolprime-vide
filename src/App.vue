<template>
  <div>
    <HeaderComponent :items="store.popular"/>
  </div>
    <MainComponent title="Film" :items="store.movie"/>
  <div>
  </div>
    <MainComponent title="Serie TV" :items="store.tv"/>
  <div>
  
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
;
import {store} from './store';
import axios from 'axios';


  export default {
    components: {
    HeaderComponent,
    MainComponent,
  
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
          this.getSeries();
          //this.getPopular();
        }
    }
  },

  methods: {
    getMovies() {
      const apiurl = store.baseURL + store.endPoint.movie;
      const params = store.params;

      axios.get(apiurl, {params}).then((res) => {
        store.movie = res.data.results;
        //console.log(store.movie)
      }) 

    },

    getSeries() {
      const apiurl = store.baseURL + store.endPoint.tv;
      const params = store.params;

      axios.get(apiurl, {params}).then((res) => {
        store.tv = res.data.results;
        //console.log(store.tv)
        
      })
    },

    getPopular() {
      const apiurl = store.baseURL + store.endPoint.popular;
      const params = store.params;

      axios.get(apiurl, {params}).then((res) => {
        store.popular = res.data.results;
        console.log(store.popular)
        
      })
    }
    
   
  },

  mounted() {
    this.getPopular();
  },

}
</script>

<style lang="scss" scoped>
@import './assets/style/general.scss';


</style>
