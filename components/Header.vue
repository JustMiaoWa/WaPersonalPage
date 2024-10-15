<template>
    <section class="container-box flex h-[60px] items-center justify-between">
        <div class="flex h-[42px] w-[90px] justify-between">
            <img :src="header.imgLogo" class="w-[42px] h-[42px] object-contain">
            <div class="flex items-center justify-center h-full text-[18px] font-color">
                {{ header.name }}
            </div>
        </div>
        <div class="max-md:hidden">
            <ul class="flex font-color text-[18px] gap-[85px]">
                <li>首页</li>
                <li>关于</li>
            </ul>
        </div>
    </section>
</template>
<script setup>
let {header} = await queryContent('/config/config').findOne()
</script>
<style lang="less" scoped>

</style>