<template>
    <h1 class="bgRed">
        {{title}} {{value}}
        <img src="./assets/logo.png" />
        <Test />
    </h1>
</template>


<script>
    
    export default {
        props: {
            value: String
        },
        beforeCreate() {

        },
        data() {
            return {
                title: '标题'
            }
        },
        watch: {

        },
        methods:{

        },
        computed:{

        }
    }
</script>


<style scoped>
    .bgRed {
        background: red;
    }
</style>