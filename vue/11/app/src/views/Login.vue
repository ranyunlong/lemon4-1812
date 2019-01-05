<template>
    <Layout>
        <Content class="content"></Content>
        <Sider class="sider" :width="350">
            <Layout class="form">
                <Form ref="form" :model="form" :rules="formRule">
                    <FormItem>
                        <h2>管理系统登陆</h2>
                    </FormItem>
                    <FormItem prop="username">
                        <Input v-model="form.username" prefix="md-person" clearable />
                    </FormItem>
                    <FormItem prop="password">
                        <Input v-model="form.password" type="password" prefix="md-lock" clearable />
                    </FormItem>
                    <FormItem prop="captcha">
                        <Layout class="captcha">
                            <Input v-model="form.captcha" class="input" prefix="md-image" clearable />
                            <Button :loading="captchaLoding" style="padding:0" type="text"><img @load="captchaLoding=false" @click="resetuid(), captchaLoding = true" :src="captcha" /></Button>
                        </Layout>
                    </FormItem>
                    <FormItem>
                        <Button :loading="loading" type="primary" long @click="login">登录</Button>
                    </FormItem>
                </Form>
            </Layout>
        </Sider>
    </Layout>
</template>

<script>
    import http from '@/utils/http'
    import uuid from 'uuid'
    export default {
        data() {
            return {
                form: {
                    username: "",
                    password: "",
                    captcha: "",
                    uuid: uuid()
                },
                captchaLoding: false,
                loading: false,
                formRule: {
                    username: [
                        { required: true, message: '账号必须', trigger: 'blur' },
                        { max: 10, min: 3, message: '长度必须3-10位', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '密码必须', trigger: 'blur' },
                        { max: 10, min: 3, message: '长度必须6-18位', trigger: 'blur' }
                    ],
                    captcha: [
                         { required: true, message: '验证码必须', trigger: 'blur' },
                        { max: 5, min: 5, message: '长度必须5位', trigger: 'blur' }
                    ]
                }
            }
        },
        created() {
            // 创建组件时添加对键盘的事件监听
            document.addEventListener('keydown', this.onKeydown)
        },
        destroyed() {
            // 销毁登录组件时 同时清理掉keydown 事件监听
            document.removeEventListener('keydown', this.onKeydown)
        },
        computed: {
            captcha() {
                return '/proxyapi/captcha.jpg?uuid=' + this.form.uuid
            }
        },
        methods: {
            resetuid() {
                this.form.uuid = uuid()
            },
            onKeydown(e) {
                if (e.keyCode === 13) {
                    if (this.loading) return;
                    this.login()
                }
            },
            async login() {
                const valid = await this.$refs['form'].validate()
                if (valid) {
                    this.loading = true
                    const result = await http.post('/sys/login', this.form)
                    console.log(result)
                    const { code, msg, token } = result.data
                    if (code === 500) {
                        // this.$Notice.error({
                        //     title: '错误',
                        //     desc: msg
                        // })
                        this.$Message.error({
                            content: msg
                        })
                        this.form.uuid = uuid()
                    } else if (code === 0) {
                        localStorage.setItem('token', token)
                        this.$router.replace('/admin')
                    }
                    this.loading = false
                }
            }
        }
    }
</script>

<style scoped>
.sider {
    background: #fff;
    border-left: 1px solid #ddd;
}
.content {
    background: #ddd;
}
.form {
    padding: 20px;
    height: 100%;
    justify-content: center;
}
.captcha {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.captcha .input {
    width: 130px;
}

.captcha img {
    width: 130px;
    height: 32px;
}
</style>