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
    </div>
    `,
    data() {
        return {
            iIndex: this.index,
            enter: 'animated slideInRight',
            leave: 'animated slideOutLeft',
            playing: false
        }
    },
    watch:{
        index(val) {
            this.iIndex = val
        },
        iIndex(val){
            if (val < 0) this.iIndex = this.srcs.length - 1
            if (val >= this.srcs.length ) this.iIndex = 0
        }
    },
    methods:{
        prev(){
            if (this.playing) return;
            // 上锁
            this.playing = true
            this.iIndex--
            this.enter = 'animated slideInRight';
            this.leave = 'animated slideOutLeft';
        },
        next(){
            if (this.playing) return;
            // 上锁
            this.playing = true
            this.iIndex++
            this.enter = 'animated slideInLeft';
            this.leave = 'animated slideOutRight';
        },
        run(text){
            console.log(text)
        }
    }
})