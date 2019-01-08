<template>
    <i v-if="name" :style="{
        fontSize: size + 'px'
    }" :class="['iconfont', 'icon-' + name]"></i>
</template>

<script>
    import '@/assets/fonts/iconfont.css'
    export default {
        name: 'Icon',
        props: {
            name: String,
            size: Number
        }
    }
</script>

<style scoped>

</style>