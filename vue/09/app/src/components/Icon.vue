<template>
    <div :class="[prefix + 'icon']" @click="$alert">
       组件名：Icon 前缀：{{prefix}}
    </div>
</template>

<script>
    import common from '@/mixins/common'
    export default {
        mixins: [common],
        methods: {
            $alert() {
                alert('呵呵')
            }
        }
    }
</script>