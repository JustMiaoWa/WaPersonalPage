<template>
    <div class="info-box container-box">
        <div class="font-color text-[60px] mt-[30px] mb-[38px] flex justify-center items-center">
            {{ info.title }}
        </div>
        <div class="card-box h-[373px] overflow-hidden flex justify-between gap-[56px]">
            <div class="information-box flex flex-col justify-between h-full flex-auto">
                <div class="h-[166px] flex gap-[14px] justify-between">
                    <div class="white-color h-full flex flex-col pt-[34px] pl-[20px] 
                    rounded-[12px] border border-[#E3E8F7] flex-auto">
                        <span>你好，很高兴认识你👋</span> 
                        <span>你好，很高兴认识你</span>
                        <span>你好，很高兴认识你</span>
                    </div>
                    <div class="h-full bg-[#FFFFFF] flex flex-col rounded-[12px] border border-[#E3E8F7] w-[275px]">
                        <span>追求</span>
                        <span>源于热爱而去创造</span>
                        <span>高效的编程</span>
                    </div>
                </div>
                <div class="h-[166px]">
                    <div class="h-full">

                    </div>
                    <div class="h-full">

                    </div>
                </div>
            </div>
            <div class="swiper-box h-full bg-[#F95454] w-[317px] rounded-[16px] flex-none">
                
            </div>
        </div>

    </div>
</template>
<script setup>
let {info} = await queryContent('/config/config').findOne()
</script>
<style lang="less" scoped>
.white-color {
    color: #F7F9FE;
    background-color: #3471FF;
}
</style>