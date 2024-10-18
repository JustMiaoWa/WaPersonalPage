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
                <li @click="gotoPro('media')">
                    <span class="absolute top-[0px] right-[0px] text-[#298BFF] text-[16px] border border-[#298BFF] rounded-full
                    flex items-center justify-center px-[10px]">已上线</span>
                    <div class="bg-[#5628FE]">
                        <img src="/img/imgLogo.svg" alt="" class="w-[60%] h-[60%]" ></img>
                    </div>
                    <span class="sub-font-color text-[14px]">媒体账号</span> 
                </li>
                <li @click="gotoPro('soulmate')">
                    <span class="absolute top-[0px] right-[0px] text-[#298BFF] text-[16px] border border-[#298BFF] rounded-full
                    flex items-center justify-center px-[10px]">已上线</span>
                    <div class="bg-[#2a2b2e]">
                        <img src="/img/soulmategzh.png" alt="" class="" ></img>
                    </div>
                    <span class="sub-font-color text-[14px]">Soulmate公众号</span> 
                </li>
                <li>
                    <span class="absolute top-[0px] right-[0px] text-[#20DE40] text-[16px] border border-[#20DE40] rounded-full
                    flex items-center justify-center px-[10px]">正在开发</span>
                    <div class="bg-[#d8d8d8]"></div>
                    <span class="sub-font-color text-[14px]">堂客餐饮小程序</span> 
                </li>
                <li>
                    <span class="absolute top-[0px] right-[0px] text-[#20DE40] text-[16px] border border-[#20DE40] rounded-full
                    flex items-center justify-center px-[10px]">正在开发</span>
                    <div class="bg-[#d8d8d8]"></div>
                    <span class="sub-font-color text-[14px]">星岛小程序</span> 
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>

const emit = defineEmits(['update:proitemVisible','update:contentUrl']);

const gotoPro = (url) => {
    // console.log('gotoPro')
    emit('update:contentUrl', url);
    emit('update:proitemVisible', true);
    
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
            position: relative;
            cursor: pointer;
            div {
                // background-color: #D8D8D8;
                border-radius: 12px;
                width: 100%;
                height: 120px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
}
</style>