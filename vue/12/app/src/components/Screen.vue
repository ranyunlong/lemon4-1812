<template>
    <div class="screen">
        <slot/>
    </div>
</template>

<script>
    export default {
        name:'Screen'
    }
</script>

<style>
.screen {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: absolute;
    border: 1px solid #ddd;
    border-top: none;
    border-bottom: none;
}
</style>