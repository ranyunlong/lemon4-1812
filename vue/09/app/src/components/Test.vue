<template>
    <div :class="[prefix + 'test']">
        组件名：Test 前缀：{{prefix}}
    </div>
</template>

<script>
    import common from '@/mixins/common'
    export default {
        mixins: [common],
        data() {
            return {
                // prefix:'test'
            }
        }
    }
</script>