<template>
    <div class="tree">
        <TreeItem v-for="item in data" :key="item.menuId" :data="item" />
    </div>
</template>

<script>
    import TreeItem from './TreeItem'
    export default {
        props: {
            data: Array
        },
        components: {
            TreeItem
        }
    }
</script>

<style>
.tree {
    width: 100%;
    height: auto;
    margin-left: -25px;
}
</style>