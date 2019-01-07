<template>
    <Layout  class="page-menu">
        <Tree :data="menu" />
    </Layout>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Tree from './Tree'
    export default {
        computed: {
            ...mapGetters([
                'menu'
            ])
        },
        components: {
            Tree
        }
    }
</script>

<style>
.page-menu {
    padding: 15px;
    margin: 15px;
    background: #fff;
    box-sizing: border-box;
}
</style>