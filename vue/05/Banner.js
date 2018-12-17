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
        {{iIndex}}
        <div class="item" v-show="idx === iIndex" v-for="(item, idx) in srcs">
            <img :src="item" />
        </div>
        <button class="prev" @click="prev">上一张</button>
        <button class="next" @click="next">下一张</button>
    </div>
    `,
    data() {
        return {
            iIndex: this.index
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
            this.iIndex--
        },
        next(){
            this.iIndex++
        }
    }
})