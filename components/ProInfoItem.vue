<template>
    <div class="proitem-box" v-if="proitemVisible" data-aos="fade-up">
        <div @click="closeProItem" class="sticky right-[20px] max-md:right-[10px] top-[20px] flex justify-end">
            <span class="cursor-pointer mr-[10px]">关闭</span>
        </div>
        <div class="flex justify-center p-[20px]">
            <ContentDoc :path="url" class="prose prose-blockquote:border-[#425AEF]" id="content-doc" v-if="proitemVisible"/>
        </div>
        <!-- <div class="h-[200px]">
            <div class="h-[9999px]"></div>
        </div> -->
    </div>
</template>
<script setup>

const props = defineProps({
    proitemVisible: Boolean,
    contentUrl: String
});

const { proitemVisible } = toRefs(props); 
const { contentUrl } = toRefs(props); 
let url = ref("")

onMounted(() => {
    // console.log(contentUrl.value);
});

watch(
  () => props.contentUrl,
  (newValue) => {
    if (newValue) {
      // 只有在 data 存在时才执行特定逻辑
      url.value = "/project/" + contentUrl.value;
    }
  }
);


const emit = defineEmits(['update:proitemVisible']);
let closeProItem = () => {
    emit('update:proitemVisible', false);
}


</script>
<style lang="less" scoped>
.proitem-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.85); /* 背景遮罩 */
    z-index: 998; /* 比弹窗稍低 */
    transition: .5s;
    backdrop-filter: saturate(180%) blur(20px);
    overflow-y: auto; /* 允许垂直方向滚动 */
}


// 重置样式
#content-doc{
    blockquote {
        border-inline-start-color: @theme-color;
    }
}
// #content-doc {
//     blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
//         margin: 10px !important;
//     }
//     h1, h2, h3, h4, h5, h6 {
//         font-size: revert !important;
//         font-weight: revert !important;
//     }
// }
</style>