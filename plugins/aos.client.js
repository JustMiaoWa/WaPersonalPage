import AOS from 'aos';
import 'aos/dist/aos.css';
export default defineNuxtPlugin((nuxtApp) => {
    // 初始化 AOS
    nuxtApp.hook('app:mounted', () => {
      AOS.init({
        duration: 1500, // 动画持续时间
        once: false, // 是否只执行一次
        easing: 'ease-out-back', // 动画缓动效果
      });
    });
  });