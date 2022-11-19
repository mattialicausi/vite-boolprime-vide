<template>
    <section class="row">
        <div v-for="(item, index) in items" :key="item.id">
            <CardComponent :movie="item"/>
        </div>
        
    </section>

    <section>
        <!-- TV Series -->
        
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
        items: Array
    },

}
</script>

<style lang="scss" scoped>
@import '../assets/style/general.scss';

</style>