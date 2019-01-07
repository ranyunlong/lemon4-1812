<template>
    <div>
        Home
        {{user}}
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        computed: {
            ...mapGetters([
                'user'
            ])
        },
        methods: {
            ...mapActions([
                'GET_USER_INFO'
            ])
        },
        created() {
            if (!this.user.username) {
                this.GET_USER_INFO()
            }
        }
    }
</script>

<style scoped>

</style>