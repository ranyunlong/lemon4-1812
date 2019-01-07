<template>
    <div class="tree-item" @click.stop="expand">
        <div class="tree-item-info">
            <Icon type="ios-arrow-forward" :class="{
                expand: data.expand && (data.type === 0 || data.type === 1)
            }" />
            <Icon v-if="data.type === 0" type="ios-folder" />
            <Icon v-if="data.type === 1" type="ios-document" />
            <Icon v-if="data.type === 2" type="md-bug" />
            <span>
                {{data.name}}
            </span>
        </div>
        <div class="tree-item-children" v-show="data.expand">
            <TreeItem v-for="item in data.children" :key="item.menuId" :data="item" />
        </div>
    </div>
</template>

<script>
    export default {
        name:'TreeItem',
        props: {
            data: Object
        },
        methods: {
            expand() {
                this.data.expand = !this.data.expand
            }
        }
    }
</script>

<style scoped>
    .tree-item {
        height: auto;
        padding-left: 25px;
    }
    .tree-item-info {
        height: 30px;
        background: #fff;
        line-height: 30px;
        user-select: none;
    }
    .tree-item-info:hover{
        background: #ddd;
        cursor: pointer;
    }
    .expand {
        transform: rotate(90deg);
    }
</style>