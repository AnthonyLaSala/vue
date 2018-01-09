<template>
    <div class="container">
        <div class="row">
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits"> {{ fruit }}</li>
                </ul>
        </div>
    </div>
</template>

<script>
    import { fruitMixin } from './fruitMixin';

    export default {
        mixins: [fruitMixin],
        created(){
            console.log('Inside list created hook');
        }
    }
</script>

<style>

</style>
