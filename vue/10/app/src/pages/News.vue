<template>
    <div class="news">
        <div class="list">
            <ul>
                <li
                    v-for="item in list"
                    :key="item.id">
                    <router-link :to="'/news/' + item.id + '.html'">
                    {{item.title}}
                </router-link>
                </li>
            </ul>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [
                    {
                        id: '001',
                        title: '新闻1'
                    },
                    {
                        id: '002',
                        title: '新闻2'
                    },
                    {
                        id: '003',
                        title: '新闻3'
                    },
                    {
                        id: '004',
                        title: '新闻4'
                    }
                ]
            }
        },
    }
</script>

<style scoped>
    .news {
        display: flex;
    }
    .news .list {
        width: 200px;
    }
    .news .content{
        flex: 1;
    }
</style>