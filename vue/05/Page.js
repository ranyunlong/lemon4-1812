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
        },

        before() {
            if (this.iCurrent <= this.pages / 2) {
                // 计算
                return this.iCurrent + 2
            } else {
                return 1
            }
        },
        after() {
            if (this.iCurrent > this.pages / 2) {
               return (this.pages - this.iCurrent) + 3
            } else {
                return 1
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
            if (val > this.pages) {
                this.iCurrent = this.pages
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
                @click="iCurrent = index+1"
                v-for="(item, index) in before"
                :class="{
                    active: iCurrent === (index + 1)
                }">
                <a>{{index + 1}}</a>
            </li>
            <li><a>...</a></li>
            <li 
                @click="iCurrent = pages - after + index + 1"
                v-for="(item, index) in after"
                :class="{
                    active: iCurrent === pages - after + index + 1
                }">
                <a>{{pages - after + index + 1}}</a>
            </li>
            <li>
            <a href="#" @click="iCurrent++">
                <span aria-hidden="next">&raquo;</span>
            </a>
            </li>
        </ul>
    </nav>
    `
})