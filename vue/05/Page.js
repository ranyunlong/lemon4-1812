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
            const len = this.total / this.size
            const arr = []
            for (let i = 1; i <= len; i++) {
                arr.push(i)
            }
            return arr
        },
        before() {
            if (this.iCurrent <= this.pages.length / 2) {
                return this.pages.slice(0, this.iCurrent + 2)
            } else {
                return [1]
            }
        },
        after() {
            if (this.iCurrent > this.pages.length / 2) {
                return this.pages.slice(this.iCurrent - 3, this.pages.length)
            } else {
                return [this.pages.length]
            }
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
            if (val > this.pages.length) {
                this.iCurrent = this.pages.length
            }
            this.$emit('update:current', this.iCurrent)
        }
    },
    template: `
    <nav>
        <ul class="pagination">
            <li>
            <a href="#" @click="iCurrent--">
                <span aria-hidden="true">&laquo;</span>
            </a>
            </li>
            <li 
                @click="iCurrent = item"
                v-for="item in before"
                :class="{
                    active: iCurrent === item
                }">
                <a>{{item}}</a>
            </li>
            <li><a>...</a></li>
            <li 
                @click="iCurrent = item"
                v-for="item in after"
                :class="{
                    active: iCurrent === item
                }">
                <a>{{item}}</a>
            </li>
            <li>
                <a href="#"  @click="iCurrent++">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
    `
})