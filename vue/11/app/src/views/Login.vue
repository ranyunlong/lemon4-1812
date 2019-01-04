<template>
    <div>
        账号：<input type="text" v-model="form.username">
        <br/>
        <br/>
        密码：<input type="text" v-model="form.password">
        <br/>
        <br/>
        验证码：<input type="text" v-model="form.captcha">
        <img :src="'/proxyapi/captcha.jpg?uuid=' + form.uuid" />
        <br/>
        <br/>
        <button @click="login">登录</button>
    </div>
</template>

<script>
    import http from '@/utils/http'
    import uuid from 'uuid'
    export default {
        data() {
            return {
                form: {
                    username: "string",
                    password: "string",
                    captcha: "string",
                    uuid: uuid()
                }
            }
        },
        methods: {
            async login() {
                // console.log(axios)
                // const data = await axios.post('/proxyapi/sys/login', this.form)
                // const data = await axios({
                //     method: 'post',
                //     url: '/proxyapi/sys/login',
                //     data: this.form
                // })
                // console.log(data)

                const data = await http.post('/sys/login', this.form)
                console.log(data)
            }
        }
    }
</script>

<style scoped>

</style>