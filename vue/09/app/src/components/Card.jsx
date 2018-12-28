export default {
    data() {
        return {
            title: 'jsx组件',
            arr: ['张三', '里斯', '老王']
        }
    },
    methods: {
        run() {
            alert(1)
        },
        add() {
            this.arr.push('hehe')
        }
    },
    beforeCreate() {
        console.log('12312')
    },
    render() {
        return (
            <div onClick={this.run}>
                {
                    this.arr.map(val => (
                        <div onClick={this.add}>{val}</div>
                    ))
                }
            </div>
        )
    }
}