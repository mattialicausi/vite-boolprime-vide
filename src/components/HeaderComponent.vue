<template>
    <header>
        <section class="h-100">
            <AppSearch/>
        </section>

        <section class="mycarousel">
            <div class="col-12" v-for="(item, index) in items" :key="item.id">
                <JumboComponent :item="item"/>
            </div>
        </section>
    </header>
</template>

<script>
import AppSearch from './AppSearch.vue';
import JumboComponent from './JumboComponent.vue';

    export default {
        name: "HeaderComponent",
        components: {
            AppSearch,
            JumboComponent
        },
        props: {
            items: Array
        }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/general.scss';
    .mycarousel{
        display: flex;
        overflow-x: auto;
    }
</style>