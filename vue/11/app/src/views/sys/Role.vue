<template>
    <div>
        Role
        {{cc}}
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        computed: {
            ...mapGetters([
                'cc'
            ])
        }
    }
</script>

<style scoped>

</style>