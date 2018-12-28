<template>
    <div :class="[prefix + 'button']" @click="select">
        <!-- 组件名：Button 前缀：{{prefix}}
        value: {{value}} -->
        <slot name="before" />按钮<slot name="after" />
        <slot></slot>
    </div>
</template>

<script>
    import common from '@/mixins/common'
    export default {
        props: {
            value: String
        },
        mixins: [common],
        methods: {
            select(e) {
                this.$emit('select', e)
            }
        }
    }
</script>