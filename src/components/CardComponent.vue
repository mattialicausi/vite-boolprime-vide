<template>
    <div class="col-12 col-md-4 col-lg-2 m-2">
        <div>
            <img :src="item.poster_path ? this.baseIMG + item.poster_path : 'https://via.placeholder.com/300x450'" :alt="item.original_title">
        </div>

        <div class="info-card">
            <h4>{{item.original_title ? item.original_title : item.original_name}}</h4>
            <span v-for="n in 5" class="fa-star" :class="(n <= star) ? 'fa-solid' : 'fa-regular'"></span>

            <div v-if="item.original_language" class="img-flag">
                <img :src="this.flagURL + item.original_language" :alt="item.original_title">
            </div>
                
            <div v-else>
                <div>{{item.original_language}}</div>
            </div>
            
            
        </div>
   </div>
</template>

<script>
import { store } from '../store';


    export default {
        name: 'CardComponent',

        props: {
            item: Object,
        },

        data() {
            return {
                flagURL: 'https://countryflagsapi.com/png/',
                baseIMG: 'https://image.tmdb.org/t/p/w300/',
            }
        },

        computed: {
            star() {
                return Math.ceil(this.item.vote_average / 2);
            }
        },

    }
</script>

<style lang="scss" scoped>
@import '../assets/style/general.scss';
    .info-card{
        position: absolute;
        top: 50%;
        left: 10px;
    }

    .img-flag{
        width: 50px;
        height: 50px;


        img{
            width: 100%;
        }
    }

</style>