<template>
    <div class="proitem-box" v-if="proitemVisible">
        <div>关闭</div>
        <div>hhhh</div>
    </div>
</template>
<script setup>

let props = defineProps(['proitemVisible']);


</script>
<style lang="less" scoped>
.proitem-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* 背景遮罩 */
    z-index: 998; /* 比弹窗稍低 */
}
</style>