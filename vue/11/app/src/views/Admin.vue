<template>
    <div class="admin">
        <div class="sider">
            <div>
                <router-link to="/admin/user/zhangsan/01">zhangsan</router-link>
            </div>
            <div>
                <router-link to="/admin/user/lisi/01">lisi</router-link>
            </div>
            <button @click="go">跳转到menu管理页面</button>
            <button @click="rep">替换路由</button>

        </div>
        <div class="content">
            <header></header>
            <main>
                <router-view />
            </main>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            go() {
                // $route 对象用来获取路由中的数据
                // $router 是用来处理路由跳转
                // console.log(this.$router)

                console.log(this.$route)

                /**
                 * 1. push 跳转到指定页面
                 * 2. replace 替换上一条访问记录 跳转至指定页面
                 * 3. back //返回
                 */

                // 通过路由的path 跳转页面
                // this.$router.push('/admin/user/lisi')
                // this.$router.push({
                //     path: '/admin/user/lisi',
                //     query: {
                //         name: 'path'
                //     }
                // })

                // 通过路由名称来跳转
                this.$router.push({
                    name: 'AdminUserDetail',
                    params: {
                        name: 'lisi'
                    },
                    query: {
                        name: 'haha'
                    }
                })
            },
            rep() {
                this.$router.replace('/admin')
            }
        }
    }
</script>

<style scoped>
.admin {
    display: flex;
    height: 100%;
}

.admin .sider {
    width: 200px;
    height: inherit;
    background: red;
}

.admin .content {
    flex: 1;
}

.admin .content header{
    height: 64px;
    border-bottom: 1px solid #ddd;
}
</style>