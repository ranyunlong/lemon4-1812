<template>
    <Layout>
        <Sider collapsible v-model="sider">
            <div class="logo">
                <h1>后台管理系统</h1>
            </div>
            <Menu theme="dark" width="auto">
                <Submenu v-for="item in menu" :key="item.menuId" :name="item.menuId">
                    <template slot="title">
                        <Icon type="ios-paper" />
                        {{item.name}}
                    </template>
                    <MenuItem :to="'/admin/' + child.url" v-for="child in item.children" :key="child.menuId" :name="child.menuId">
                    {{child.name}}
                    </MenuItem>
                </Submenu>
            </Menu>
        </Sider>
        <Layout>
            <Header class="header">
                <div class="btn">
                    <Button @click="sider = !sider">
                        <Icon type="md-menu" />
                    </Button>
                </div>

                <Dropdown @on-click="handleHeaderDropdown">
                    <span>
                        <Icon type="md-person" :size="20" />
                        {{user.username}}
                        <Icon type="ios-arrow-down"></Icon>
                    </span>
                    <DropdownMenu slot="list">
                        <DropdownItem name="change_password">修改密码</DropdownItem>
                        <DropdownItem name="log_out">安全退出</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </Header>
            <Content>
                <router-view />
            </Content>
        </Layout>
    </Layout>
</template>

<script>
    import http from '@/utils/http'

    // http.get('/sys/log/list', {
    //     params: {
    //         page: 1,
    //         limit: 10,
    //         sidx: 'id',
    //         order: 'asc',
    //         key: ''
    //     }
    // }).then()
    
    export default {
        data() {
            return {
                sider: false,
                user: {},
                menuList: []
            }
        },
        beforeCreate() {
            http.get('/sys/user/info').then(({data}) => {
                const {code, user} = data
                if (code === 0) {
                    this.user = user
                }
            })
            http.get('/sys/menu/list').then(({data}) => {
                this.menuList = data
            })
        },
        methods: {
            handleHeaderDropdown(name) {
                if (name === 'log_out') {
                    this.$router.push('/login')
                    localStorage.removeItem('token')
                }
            }
        },
        computed: {
            menu() {
                function deep(arr, parentId) {
                    if (!Array.isArray(arr)) return;
                    return arr.filter((k) => {
                        if (k.parentId === parentId) {
                            k.children = deep(arr, k.menuId)
                            return true
                        }
                    })
                }
                return deep(this.menuList, 0)
            }
        }
    }
</script>

<style scoped>
.header {
    background: #fff;
    padding: 0 20px;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
}
.logo {
    height: 64px;
    line-height: 64px;
    background: #fff;
    padding: 0 10px;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    overflow: hidden;
}
</style>