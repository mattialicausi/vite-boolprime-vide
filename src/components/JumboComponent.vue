<template>
   <section class="jumbo">
    <div class="col-12 col-md-4 col-lg-2 m-2 mycontainer">
        <div class="container-img">
            <img class="img-jumbo" :src="item.backdrop_path ? this.baseIMG + item.backdrop_path : 'https://via.placeholder.com/1280x450'" :alt="item.original_title">
        </div>

        <div class="info-card rounded-2">
            <h2>{{item.original_title ? item.original_title : item.original_name}}</h2>
            <span v-for="n in 5" class="fa-star" :class="(n <= star) ? 'fa-solid' : 'fa-regular'"></span>

            <div v-if="item.original_language" class="img-flag">
                <img :src="this.flagURL + item.original_language" :alt="item.original_title">
            </div>
                
            <div v-else>
                <div>{{item.original_language}}</div>
            </div>

            <div class="description">{{item.overview}}</div>
            
            
        </div>
   </div>
   </section>
</template>

<script>
    export default {
        name: 'JumboComponent',
        props: {
            item: Object,
        },

        data() {
            return {
                flagURL: 'https://countryflagsapi.com/png/',
                baseIMG: 'https://image.tmdb.org/t/p/w1280/',
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

    .mycontainer{
        height: 80vh;
        width: 100%;
        position: relative;
    }
    .jumbo{
        height: 100%;
        width: 100%;
    }
    .container-img{
        height: 100%;
        width: 100%;
    }
    .img-jumbo{
        height: 100%;
        width: 100%;
    }

    //MODIFICO INFO CARD
    .info-card{
        position: absolute;
        left: 50px;
        bottom: 50px;
        background-color: rgb(16, 23, 29);
        opacity: 0.80;
        padding: 10px;
        line-height: 2rem;
        max-width: 1000px;
        height: max-content;
    }

    .description{
        max-width: 80%;
        word-wrap: break-word;
    }

    .img-flag{
        height: 80px;
        width: 80px;
        img{
            width: 100%;
        }
    }

</style>