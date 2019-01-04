<template>
    <div>
       当前用户: {{user}}
       查询数据：{{$route.query.name}}
    </div>
</template>

<script>
    export default {
        computed: {
            user() {
                return this.$route.params.name
            }
        }
    }
</script>

<style scoped>

</style>