Vue.component('Page', {
    props:{
        total: Number,
        size: {
            type: Number,
            default: 10
        },
        current: {
            type: Number,
            default: 1
        }
    },
    computed:{
        pages() {
            return this.total / this.size
        }
    },
    data() {
        return {
            iCurrent: this.current
        }
    },
    watch: {
        current(val) {
            this.iCurrent = val
        },
        iCurrent(val) {
            if (val < 1) {
                this.iCurrent = 1
            }
            if (val > this.pages) {
                this.iCurrent = this.pages
            }
            this.$emit('update:current', this.iCurrent)
        }
    },
    template: `
    
    `
})