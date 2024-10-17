<template>
    <div class="pro-box container-box">
        <div class="flex flex-col items-center mt-[90px] mb-[40px]">
            <span class="text-[14px] sub-font-color">项目</span>
            <span class="text-[18px] font-color">独立开发</span>
        </div>
        <div class="pro-box-content">
            <ul class="grid grid-cols-5 gap-y-[60px] gap-x-[121px] 
            max-lg:grid-cols-4 
            max-md:grid-cols-2 max-md:gap-x-[60px]">
                <li @click="gotoPro">
                    <div></div>
                    <span class="sub-font-color text-[14px]">媒体账号</span> 
                </li>
                <li>
                    <div></div>
                    <span class="sub-font-color text-[14px]">媒体账号</span> 
                </li>
                <li>
                    <div></div>
                    <span class="sub-font-color text-[14px]">媒体账号</span> 
                </li>
                <li>
                    <div></div>
                    <span class="sub-font-color text-[14px]">媒体账号</span> 
                </li>
                <li>
                    <div></div>
                    <span class="sub-font-color text-[14px]">媒体账号</span> 
                </li>
                <li>
                    <div></div>
                    <span class="sub-font-color text-[14px]">媒体账号</span> 
                </li>
                <li>
                    <div></div>
                    <span class="sub-font-color text-[14px]">媒体账号</span> 
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>

const gotoPro = () => {
    console.log('gotoPro')
}

</script>
<style lang="less" scoped>
.pro-box-content {
    display: flex;
    justify-content: center;
    ul {
        li {
            width: 120px;
            height: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            div {
                background-color: #D8D8D8;
                border-radius: 12px;
                width: 100%;
                height: 120px;
            }
        }
    }
}
</style>