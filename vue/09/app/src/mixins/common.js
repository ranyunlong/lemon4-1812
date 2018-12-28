const mixin = {
    data() {
        return {
            prefix: 'lemon-'
        }
    },
    methods: {
      $alert() {
        alert('mixin method')
      }
    },
}

export default mixin;

