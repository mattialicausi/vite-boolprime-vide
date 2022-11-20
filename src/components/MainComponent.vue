<template>

    <h2>{{title}}</h2>
    <section class="mycarousel">
        <div class="position-relative" v-for="(item, index) in items" :key="item.id">
            <CardComponent :item="item"/>
        </div>
    </section>
        
</template>

<script>
import CardComponent from './CardComponent.vue';
import {store} from '../store';

    export default {
    name: "MainComponent",

    components: { 
        CardComponent
    },

    data () {
        return {
            store,
        }
    },

    props: {
        items: Array,
        title: String
    },

}
</script>

<style lang="scss" scoped>
@import '../assets/style/general.scss';
    .mycarousel{
        display: flex;
        overflow-x: auto;
    }
</style>