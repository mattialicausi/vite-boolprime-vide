<template>
   <div class="col-12 col-md-4 col-lg-2">
        <h5>{{movie.original_title}}</h5>
        <div>{{movie.vote_average}}</div>
        <div>{{movie.original_language}}</div>
   </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: {
            movie: Object
        }
    }
</script>

<style lang="scss" scoped>
@import '../assets/style/general.scss';

</style>