Vue.component('Banner', {
    props:{
        srcs: Array,
        index: {
            type: Number,
            default: 0
        },
        autoPlay: Boolean
    },
    template: `
    <div class="banner">
        <transition-group
            @before-enter="run('beforeEnter')"
            @enter="run('enter')"
            @after-enter="playing = false"
            @enter-cancelled="run('enterCancelled')"
        
            @before-leave="run('beforeLeave')"
            @leave="run('leave')"
            @after-leave="run('afterLeave')"
            @leave-cancelled="run('leaveCancelled')"
            
            :enter-active-class="enter"
            :leave-active-class="leave"
            >
            <div class="item" :key="item" v-show="idx === iIndex" v-for="(item, idx) in srcs">
                <img :src="item" />
            </div>
        </transition-group>
        <button class="prev" @click="prev">上一张</button>
        <button class="next" @click="next">下一张</button>
        <div class="btn-group">
            <div 
                class="btn-1" 
                :class="{
                    active: idx === iIndex
                }"
                @click="iIndex = idx"
                v-for="(item, idx) in srcs">
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            iIndex: this.index,
            enter: 'animated slideInRight',
            leave: 'animated slideOutLeft',
            playing: false,
            timer: null
        }
    },
    watch:{
        index(val) {
            this.iIndex = val
        },
        iIndex(val, oldVal){
            if (val < 0) this.iIndex = this.srcs.length - 1
            if (val >= this.srcs.length ) this.iIndex = 0
            if (val > oldVal) {
                this.enter = 'animated slideInLeft';
                this.leave = 'animated slideOutRight';
            }
            if (val < oldVal) {
                this.enter = 'animated slideInRight';
                this.leave = 'animated slideOutLeft';
            }
        },
        autoPlay(val) {
            if (val) {
                clearInterval(this.timer)
                this.timer = setInterval(() => {
                    this.next()
                }, 1000)
            } else {
                clearInterval(this.timer)
            }
        }
    },
    methods:{
        prev(){
            if (this.playing) return;
            // 上锁
            this.playing = true
            this.iIndex--
        },
        next(){
            if (this.playing) return;
            // 上锁
            this.playing = true
            this.iIndex++
        },
        run(text){
            console.log(text)
        }
    },
    mounted() {
        // 初始传递的autoplay为true的时候自动播放
        if (this.autoPlay) {
            this.timer = setInterval(() => {
                this.next()
            }, 1000)
        }
    },
})