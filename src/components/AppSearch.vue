<template>
    <section class="header-search-section d-flex justify-content-around align-items-center">
        <div>
            <h1 class="text-uppercase">Boolprime</h1>
        </div>
        <div>
            <form class="d-flex align-items-center justify-content-center" @submit.prevent="getCards">
                <input type="text" name="searchName" id="searchName" placeholder="Cerca per nome..." v-model.trim="queryName">
                <button type="submit" class="btn btn-primary m-2">Cerca</button>
            </form>
        </div>
        
    </section>
</template>

<script>
import {store} from '../store';

    export default {
        name: 'AppSearch',

        data() {
            return {
                queryName: '', 
            }
        }, 

        methods: {
            getCards() {
                store.params.query = this.queryName  
                console.log(this.queryName)
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../assets/style/general.scss';

</style>