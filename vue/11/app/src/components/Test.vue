<template>
    <div>
        <Button @click="setUser('yy')">{{$store.getters.user}}</Button>
        <Button @click="changeCount">修改计数器</Button>
        <Button @click="SET_USER('小明')">触发action</Button>
    </div>
</template>

<script>
    // const commits = {
    //     setUser() {
    //         this.$store.commit('setUser', Math.random())
    //     }
    // }

    // function mapMutations(arr) {
    //     const commits = {}
    //     if (Array.isArray(arr)) {
    //         arr.forEach(k => {
    //             commits[k] = function mutations(data) {
    //                 this.$store.commit(k, data)
    //             }
    //         })
    //     }

    //     return commits
    // }

    import { mapMutations, mapActions } from 'vuex'

    export default {
        created() {
            console.log(this.$store)
        },
        methods: {
            // change() {
            //     this.$store.commit('setUser', Math.random())
            // }
            // setUser() {
            //     this.$store.commit('setUser', Math.random())
            // }
            // ...commits
            ...mapMutations([
                'setUser',
                'changeCount'
            ]),
            ...mapActions([
                'SET_USER'
            ])
        }
    }
</script>

<style scoped>

</style>