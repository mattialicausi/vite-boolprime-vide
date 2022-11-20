<template>
    <div class="col-12 col-md-4 col-lg-2 m-2">
        <div>
            <img :src="item.poster_path ? this.baseIMG + item.poster_path : 'https://via.placeholder.com/300x450'" :alt="item.original_title">
        </div>

        <div class="info-card">
            <h4>{{item.original_title}}</h4>
            <div>{{item.vote_average}}</div>
            <div>{{item.original_language}}</div>
        </div>
   </div>
</template>

<script>
    export default {
        name: 'CardComponent',

        props: {
            item: Object,
        },

        data() {
            return {
                baseIMG: 'https://image.tmdb.org/t/p/w300/',
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

</style>