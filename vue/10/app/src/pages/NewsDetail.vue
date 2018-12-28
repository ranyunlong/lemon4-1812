<template>
    <div>
        新闻{{id}} 的内容部分
        title: {{title}}
        image: {{image}}
        video: {{video}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: '',
                title: 'xx',
                image: '',
                video: ''
            }
        },
        created() {
            this.id = this.$route.params.id
        },
        watch: {
            $route(to, form) {
                this.id = to.params.id
            },
            id(id) {
                // ajax('请求数据')
                setTimeout(() => {
                    this.title = Math.random() * 100
                },300)
            }
        }
    }
</script>

<style scoped>

</style>