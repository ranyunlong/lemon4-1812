<template>
    <Layout class="user-list">
        <div class="search">
            <Input placeholder="请输入用户名" v-model="search" search style="width: 200px; margin-right: 10px" />
            <Button type="success" @click="showModal = true, modalTitle = '新增管理员'">新增</Button>
        </div>
        <Table @on-selection-change="(selection) => selectionList = selection" :loading="tableLoading" border size="small" :columns="columns" :data="data" />
        <div class="footer">
            <Button type="error" @click="deleteMany">批量删除</Button>
            <Page :total="totalCount" :current.sync="currPage" />
        </div>
        <Modal 
            v-model="showModal" 
            @on-ok="request"
            :loading="modalLoading"
            :title="modalTitle">
            <Form>
                <FormItem label="账号：">
                    <Input v-model="form.username" placeholder="输入用户名" />
                </FormItem>
                <FormItem label="密码">
                    <Input v-model="form.password" placeholder="输入密码" type="password" />
                </FormItem>
                <FormItem label="邮箱">
                    <Input v-model="form.email" placeholder="输入邮箱" />
                </FormItem> 
                <FormItem label="手机">
                    <Input v-model="form.mobile" placeholder="输入手机" />
                </FormItem> 
                <FormItem label="状态">
                    <iSwitch :true-value="1" :false-value="0" v-model="form.status"/>
                </FormItem>
            </Form>
        </Modal>
    </Layout>
</template>

<script>
    import http from '@/utils/http'
    export default {
        created() {
           this.getUserList()
        },
        data() {
            return {
                columns: [          // 表格列
                    {
                        type: 'selection',
                        width: 50
                    },
                    {
                        title: 'ID',
                        align: 'center',
                        sortable: true,
                        key: 'userId'
                    },
                    {
                        title: '用户名',
                        align: 'center',
                        sortable: true,
                        key: 'username'
                    },
                    {
                        title: '邮箱',
                        align: 'center',
                        key: 'email'
                    },
                    {
                        title: '手机',
                        align: 'center',
                        key: 'mobile'
                    },
                    {
                        title: '状态',
                        align: 'center',
                        key: 'status',
                        render: (h, params) => {
                            return h('iSwitch', {
                                props: {
                                    value: params.row.status,
                                    size: 'large',
                                    trueValue: 1,
                                    falseValue: 0
                                }
                            }, [
                                h('span',{
                                    slot: 'open'
                                }, '启用'),
                                h('span',{
                                    slot: 'close'
                                }, '禁用')
                            ])
                        }
                    },
                    {
                        title: '创建时间',
                        align: 'center',
                        sortable: true,
                        key: 'createTime'
                    },
                    {
                        title: '操作',
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button',{
                                    props: {
                                        size: 'small',
                                        type: 'primary'
                                    },
                                    on: {
                                        click: () => {
                                            this.showModal = true;
                                            this.modalTitle = '修改管理员'
                                            const { 
                                                userId,username, email, mobile, status, roleIdList } = params.row
                                            this.form = {
                                                userId,
                                                username,
                                                password: '',
                                                email,
                                                mobile,
                                                status,
                                                roleIdList
                                            }
                                        }
                                    },
                                    style: {
                                        marginRight: '5px'
                                    }
                                }, '修改'),
                                h('Button',{
                                    props: {
                                        size: 'small',
                                        type: 'error'
                                    },
                                    on: {
                                        click: () => {
                                            this.$Modal.confirm({
                                                title: `提示`,
                                                loading: true,
                                                content: `您正在删除用户<b>${params.row.username}</b>, 是否确认删除？`,
                                                onOk:() => {
                                                    http.post('/sys/user/delete', [params.row.userId]).then(({data}) => {
                                                        if (data.code === 0) {
                                                            this.$Notice.success({
                                                                title: '操作成功',
                                                                desc: `用户<b>${params.row.username}</b>，已删除！`
                                                            })
                                                            this.getUserList()
                                                        } else {
                                                            this.$Notice.error({
                                                                title: '操作失败',
                                                                desc: `用户<b>${params.row.username}</b>，删除失败！`
                                                            })
                                                        }

                                                    })

                                                    this.$Modal.remove()
                                                }
                                            })
                                        }
                                    }
                                }, '删除')
                            ])
                        }
                    }
                ],    
                data: [],           // 表格数据
                limit: 10,          // 条数限制
                totalCount: 1,      // 用户总数
                totalPage: 1,       // 页码总数
                currPage: 1,        // 当前页码
                search: '',         // 搜索内容
                showModal: false,   // 模态框的显示状态
                modalTitle: '',     // 模态框的标题
                modalLoading: false,// 模态框的加载状态
                tableLoading: false,// 表格的加载状态
                selectionList: [],  // 表格批量选择的数据 
                form: {
                    userId: 0,
                    username: "",
                    password: "",
                    email: "",
                    mobile: "",
                    status: 1,
                    roleIdList: [
                        0
                    ]
                }
            }
        },
        watch: {
            search(v) {
                this.getUserList()
            },
            currPage() {
                this.getUserList()
            }
        },
        methods: {
            getUserList() {
                this.tableLoading = true
                 http.get('/sys/user/list', {
                    params: {
                        page: this.currPage,
                        limit: this.limit,
                        sidx: "userId",
                        order: "desc",
                        username: this.search
                    }
                }).then(({data}) => {
                    const { code, msg, page } = data 
                    if (code === 0) {
                        const { list, pageSize, totalCount, totalPage, currPage } = page
                        this.data = list
                        this.limit = pageSize
                        this.totalCount = totalCount
                        this.totalPage = totalPage
                        this.currPage = currPage
                    } else if (code === 500) {
                        this.$Notice.error({
                            title: '管理员列表获取失败',
                            desc: msg
                        })
                    }
                    this.tableLoading = false
                })
            },
            request() {
                this.modalLoading = true
                if (this.modalTitle === '新增管理员') {
                    http.post('/sys/user/save', this.form).then(({data}) => {
                        const { code, msg } = data
                        if (code === 0) {
                            this.getUserList()
                        } else {
                            this.$Notice.error({
                                title: '管理员添加失败',
                                desc: msg
                            })
                        }
                    })
                } else if (this.modalTitle === '修改管理员') {
                    http.post('/sys/user/update', this.form).then(({data}) => {
                        const { code, msg } = data
                        if (code === 0) {
                            this.getUserList()
                        } else {
                            this.$Notice.error({
                                title: '管理员修改失败',
                                desc: msg
                            })
                        }
                    })
                }

                // 清空状态
                this.modalLoading = false
                this.form = {
                    userId: 0,
                    username: "",
                    password: "",
                    email: "",
                    mobile: "",
                    status: 1,
                    roleIdList: [
                        0
                    ]
                }
            },
            deleteMany() {
                const deleteList = this.selectionList.map((item) => item.userId)
                if (deleteList.length === 0) {
                    return this.$Notice.error({
                        title: '操作有误',
                        desc: '请选择要删除的用户'
                    })
                } 

                this.$Modal.confirm({
                    title: '批量删除',
                    content: '您正在批量删除多个用户, 确认要删除吗?',
                    loading: true,
                    onOk: () => {
                        http.post('/sys/user/delete', deleteList).then(({data}) =>{
                            if (data.code === 0) {
                                this.$Notice.success({
                                    title: '操作成功',
                                    desc: '批量删除成功！'
                                })
                                this.getUserList()
                            } else {
                                this.$Notice.error({
                                    title: '操作失败',
                                    desc: data.msg
                                })
                            }
                        })
                        this.$Modal.remove()
                    }
                })                
            }
        },
    }
</script>

<style scoped>
.user-list {
    background: #fff;
    margin: 15px;
    padding: 15px;
    height: 100%;
    position: absolute;
    width: 97%;
    box-sizing: border-box;
}

.user-list .search {
    padding: 15px 0;
}

.user-list .footer {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
}
</style>