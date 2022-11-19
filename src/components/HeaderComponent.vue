<template>
    <header>
        <section class="h-100">
            <AppSearch/>
        </section>

        <section>
            <!-- Jumbo -->
        </section>
    </header>
</template>

<script>
import AppSearch from './AppSearch.vue';

    export default {
    name: "HeaderComponent",
    components: { 
        AppSearch,
     },
}
</script>

<style lang="scss" scoped>
@import '../assets/style/general.scss';

</style>