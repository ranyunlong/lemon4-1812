<template>
    <Screen>
        <div class="content">
            <div class="home" v-show="selected === 'Home'">
                <mt-header class="screen-header" title="车友会">
                    <mt-button slot="right">
                        <Icon name="ios-menu" />
                    </mt-button>
                </mt-header>
                <mt-swipe class="banner">
                    <mt-swipe-item>
                        <img src="https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/25871/28/4203/113257/5c2f4133E318c6d5d/12aef0d7289527a3.jpg!cr_1125x549_0_72!q70.jpg.dpg" />
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/9576/39/11951/195075/5c33169fE0631ff99/f885faf90304c8a1.jpg!cr_1125x549_0_72!q70.jpg.dpg" />
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="https://m.360buyimg.com/mobilecms/s750x366_jfs/t23554/196/252614617/149239/73b66270/5b2a6ecdNc10d686b.jpg!cr_1125x549_0_72!q70.jpg.dpg" />
                    </mt-swipe-item>
                </mt-swipe>
                <router-link to="/home/detail">跳转至详情页</router-link>
            </div>
            <div v-show="selected === 'Club'">
                <mt-header class="screen-header" title="车汇">
                    <mt-button slot="right">
                        <Icon name="ios-menu" />
                    </mt-button>
                </mt-header>
            </div>

            <div v-show="selected === 'News'">
                <mt-header class="screen-header" title="消息">
                    <mt-button slot="right">
                        <Icon name="ios-menu" />
                    </mt-button>
                </mt-header>
            </div>

            <div v-show="selected === 'Mine'">
                <mt-header class="screen-header" title="我的">
                    <mt-button slot="right">
                        <Icon name="ios-menu" />
                    </mt-button>
                </mt-header>
            </div>
        </div>
        <mt-tabbar fixed v-model="selected">
            <mt-tab-item id="Home">
                <Icon slot="icon" :size="22" name="ios-home" />
                首页
            </mt-tab-item>
            <mt-tab-item id="Club">
                <Icon slot="icon" :size="22" name="md-car" />
                车汇
            </mt-tab-item>
            <mt-tab-item id="News">
                <Icon slot="icon" :size="22" name="ios-chatbubbles" />
                消息
            </mt-tab-item>
            <mt-tab-item id="Mine">
                <Icon slot="icon" :size="22" name="ios-person" />
                我的
            </mt-tab-item>
        </mt-tabbar>
    </Screen>
</template>

<script>
    export default {
        data() {
            return {
                selected: 'Home'
            }
        },
    }
</script>

<style>
.banner {
    height: 240px;
}
.banner img {
    width: 100%;
}
.screen-header {
    height: 90px;
    font-size: 32px;
}
</style>