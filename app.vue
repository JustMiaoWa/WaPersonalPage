<template>
  <div>
    <div class="cursor max-md:none" ref="cursor">
      <div class="cursor-dot"></div>
    </div>
    <Header></Header>
    <InfoBox></InfoBox>
    <ProBox @update:contentUrl="changeUrl"
    @update:proitemVisible="proitemVisible = $event"></ProBox>
    <Footer></Footer>
    <ProInfoItem :proitemVisible="proitemVisible" :contentUrl="contentUrl"
    @update:proitemVisible="proitemVisible = $event"></ProInfoItem>
  </div>
</template>
<script setup>
let proitemVisible = ref(false);
let contentUrl = ref("")

const changeUrl = (url) => {
  contentUrl.value = url
  console.log(contentUrl.value)
}

// 监听 proitemVisible 的变化
watch(proitemVisible, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});


// 鼠标样式
const mouseX = ref(0);
const mouseY = ref(0);
let cursorX = 0, cursorY = 0;
const cursor = ref(null);

const cursorSize = 50; // 背景圆的宽度和高度

// 鼠标移动时更新目标位置
const updateMousePosition = (e) => {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
};

// 使用 requestAnimationFrame 实现平滑的延迟跟随
const animate = () => {
  cursorX += (mouseX.value - cursorX) * 0.1; // 延迟移动
  cursorY += (mouseY.value - cursorY) * 0.1;

  if (cursor.value) {
    cursor.value.style.transform = `translate(${cursorX - cursorSize / 2}px, ${cursorY - cursorSize / 2}px)`;
  }
  
  requestAnimationFrame(animate);
};

// 监听滚轮事件，立即更新位置
const handleScroll = (e) => {
  mouseX.value += e.deltaX;
  mouseY.value += e.deltaY;
  cursorX = mouseX.value;
  cursorY = mouseY.value;
  
  if (cursor.value) {
    cursor.value.style.transform = `translate(${cursorX - cursorSize / 2}px, ${cursorY - cursorSize / 2}px)`;
  }
};

onMounted(() => {
  window.addEventListener('mousemove', updateMousePosition);
  // window.addEventListener('wheel', handleScroll);
  animate();
});
</script>
<style lang="less" scoped>
.cursor {
    position: fixed;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    pointer-events: none; /* 防止背景圆阻挡鼠标点击 */
    transition: transform 0.1s ease-out; /* 平滑动画 */
    z-index: 999;
}

.cursor-dot {
    width: 10px;
    height: 10px;
    background: @theme-color;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
