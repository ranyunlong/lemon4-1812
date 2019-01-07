<template>
    <Layout>
        <Header /> 
        {{cc}}
        {{user}}
        {{test}}

        <router-link to="/admin/sys/role">role</router-link>
        <Test />
    </Layout>
</template>

<script>
    import Test from '@/components/Test'
    import { mapGetters } from 'vuex'

    // console.log(mapGetters([
    //     'user',
    //     'cc'
    // ]))

    // const getters = {
    //     user() {
    //         return this.$store.getters.user
    //     },
    //     cc() {
    //         return this.$store.getters.cc
    //     }
    // }

    // function mapGetters(arr) {
    //     const getters = {}
    //     if (Array.isArray(arr)) {
    //         arr.forEach((key) => {
    //             getters[key] = function() {
    //                 return this.$store.getters[key]
    //             }
    //         })
    //     }

    //     return getters
    // }

    export default {
        created() {
            console.log(this.$store)
        },
        methods: {
            
        },
        computed: {
            ...mapGetters([
                'user',
                'cc',
                'test'
            ])
        },
        components: { Test }
    }
</script>

<style scoped>

</style>