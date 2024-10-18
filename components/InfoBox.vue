<template>
    <div class="info-box container-box">
        <div class="font-color text-[60px] mt-[30px] mb-[38px] flex justify-center items-center">
            {{ info.title }}
        </div>
        <div class="card-box flex flex-row justify-between gap-[56px] max-lg:flex-col max-lg:items-center max-lg:w-full">
            <div class="information-box flex flex-col justify-between flex-auto max-lg:order-last max-lg:gap-[30px] max-md:w-full">
                <div class="flex gap-[14px] justify-between max-md:flex-col max-md:w-full">
                    <div class="white-color h-[166px] flex flex-col pt-[34px] pl-[20px] pr-[20px] pb-[20px] 
                    rounded-[12px] border border-[#E3E8F7] flex-auto w-[422px] max-md:w-full max-md:h-fit">
                        <span class="text-[16px]">{{ info.introduce.sayHello }}</span>
                        <span class="text-[36px]">{{ info.introduce.sayName }}</span>
                        <span class="text-[16px]">
                            {{ info.introduce.sayRole }}
                            <span class="scroll-content" ref="scrollContent">
                
                            </span>
                            <span class="scroll-content-format">I</span>
                        </span>
                    </div>
                    <div class="h-[166px] bg-[#FFFFFF] flex flex-col rounded-[12px] border border-[#E3E8F7] w-[275px] 
                    pb-[20px] max-md:w-full max-md:h-fit
                    padding-px aboutsiteTips">
                        <span class="text-[12px] mb-[6px] sub-font-color">追求</span>
                        <span class="text-[20px] font-color max-md:text-[24px]">源于<br>热爱而去创造</span>
                        <!-- <span class="text-[20px] mt-[2px] max-md:text-[24px]">高效的编程</span> -->
                        <div class="mask text-[20px]">
                            <span class="first-tips" data-show="">优秀的产品</span>
                            <span>出色的设计</span>
                            <span>高效的编程</span>
                            <span data-up="">人性化的体验</span>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row gap-[20px] justify-between max-md:flex-col">
                    <div class="h-[166px] bg-[#FFFFFF] rounded-[12px] border border-[#E3E8F7] flex-auto padding-px
                    skills-container">
                        <span class="text-[12px] mb-[6px] sub-font-color">技能</span>
                        <div>
                            <div class="skills-style-group">
                                <div class="tags-group-all">
                                    <div class="first-group">
                                        <div class="flex justify-center items-center bg-[#2f7aff] rounded-[24px] w-[100px] h-[100px]">
                                            <img src="http://image.wazicode.top/blog/202307012251124.png" class="w-3/5 h-3/5"/>
                                        </div>
                                        <div class="flex justify-center items-center bg-[#e9572b] rounded-[24px] w-[100px] h-[100px]">
                                            <img src="/img/CSS3.png" class="w-3/5 h-3/5"/>
                                        </div>
                                        <div class="flex justify-center items-center bg-[#f0c655] rounded-[24px] w-[100px] h-[100px]">
                                            <img src="/img/JS.png" class="w-3/5 h-3/5"/>
                                        </div>
                                        <div class="flex justify-center items-center bg-[#df5b40] rounded-[24px] w-[100px] h-[100px]">
                                            <img src="/img/git.png" class="w-3/5 h-3/5"/>
                                        </div>
                                    </div>
                                    <div class="second-group">
                                        <div class="flex justify-center items-center bg-[#ffffff] rounded-[24px] w-[100px] h-[100px]">
                                            <img src="/img/Python.png" class="w-3/5 h-3/5"/>
                                        </div>
                                        <div class="flex justify-center items-center bg-[#57b6e6] rounded-[24px] w-[100px] h-[100px]">
                                            <img src="/img/docker.png" class="w-3/5 h-3/5"/>
                                        </div>
                                        <div class="flex justify-center items-center bg-[#2c51db] rounded-[24px] w-[100px] h-[100px]">
                                            <img src="/img/HTML.png" class="w-3/5 h-3/5"/>
                                        </div>
                                        <div class="flex justify-center items-center bg-[#ffffff] rounded-[24px] w-[100px] h-[100px]">
                                            <img src="http://image.wazicode.top/blog/202306192300927.png" class="w-3/5 h-3/5"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="skills-list">
                                    <div class="skill-info">
                                        <div class="skill-icon" style="background:#2f7aff">
                                            <img src="http://image.wazicode.top/blog/202307012251124.png" title="Java">
                                        </div>
                                        <div class="skill-name"> <span>Java</span></div>
                                    </div>

                                    <div class="skill-info">
                                        <div class="skill-icon" style="background:#ffffff">
                                            <img src="/img/Python.png" title="Python">
                                        </div>
                                        <div class="skill-name"> <span>Python</span></div>
                                    </div>
                                    <div class="skill-info">
                                        <div class="skill-icon" style="background:#57b6e6">
                                            <img src="/img/docker.png" title="docker">
                                        </div>
                                        <div class="skill-name"> <span>docker</span></div>
                                    </div>
                                    <div class="skill-info">
                                        <div class="skill-icon" style="background:#2c51db">
                                            <img src="/img/HTML.png" title="HTML">
                                        </div>
                                        <div class="skill-name"> <span>HTML</span></div>
                                    </div>
                                    <div class="skill-info">
                                        <div class="skill-icon" style="background:#e9572b">
                                            <img src="/img/CSS3.png" title="CSS3">
                                        </div>
                                        <div class="skill-name"> <span>CSS3</span></div>
                                    </div>
                                    <div class="skill-info">
                                        <div class="skill-icon" style="background:#f0c655">
                                            <img src="/img/JS.png" title="JS">
                                        </div>
                                        <div class="skill-name"> <span>JS</span></div>
                                    </div>
                                    <div class="skill-info">
                                        <div class="skill-icon" style="background:#df5b40">
                                            <img src="/img/git.png" title="git">
                                        </div>
                                        <div class="skill-name"> <span>git</span></div>
                                    </div>
                                    <div class="skill-info">
                                        <div class="skill-icon" style="background:#ffffff">
                                            <img src="http://image.wazicode.top/blog/202306192300927.png" title="Linux">
                                        </div>
                                        <div class="skill-name"> <span>Linux</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="h-[166px] bg-[#FFFFFF] rounded-[12px] border border-[#E3E8F7] flex-initial padding-px
                    w-[375px] max-md:w-full">
                        <span class="text-[12px] mb-[6px] sub-font-color">生涯</span>
                        <ul class="sub-sub-font-color">
                            <li class="display-flex">
                                <div class="rounded-full bg-[#1A57E4] w-[10px] h-[10px] mr-[7px]"></div>
                                <div>四川工商职业技术学院，软件技术</div>
                            </li>
                            <li class="display-flex">
                                <div class="rounded-full bg-[#F0137E] w-[10px] h-[10px] mr-[7px]"></div>
                                <div>成都信息工程大学，软件工程</div>
                            </li>
                            <li class="display-flex">
                                <div class="rounded-full bg-[#2DF013] w-[10px] h-[10px] mr-[7px]"></div>
                                <div>成都，后端开发工程师</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="swiper-box h-[373px] w-[317px] rounded-[16px] flex flex-col justify-center items-center gap-[30px]
            ">
                <div class="w-[160px] h-[160px] rounded-full bg-[#ffffff] overflow-hidden flex justify-center items-start">
                    <img src="/img/imgLogo.svg" class="w-full h-full"/>
                </div>
                <div class="text-[16px] text-[#ffffff]">有独立开发项目、运维上线项目经验</div>
            </div>
        </div>

    </div>
</template>
<script setup>
let {info} = await queryContent('/config/config').findOne()

const scrollContent = ref(null);

onMounted(() => {
      const stringArray = info.introduce.typeWriter
      let switch_box = scrollContent.value
      // 定义数组索引
      let index = 0
      let delay = 0
      let charIndex = 0
      // 删除标志
      let isDelete = false
      let defaultDelay = 100
      let waitDalay = 800

      let changeText = () => {
          switch_box.textContent = stringArray[index].substring(0,charIndex);
          if(!isDelete){
              delay = defaultDelay
              charIndex ++ 
              if(charIndex > stringArray[index].length){
                  // 当charIndex已经大于字符的长度的时候，表示应该执行删除动画了
                  isDelete = true    
                  delay = waitDalay
              }
          }else{
              delay = defaultDelay
              charIndex --
              if(charIndex < 1){
                  isDelete = false
                  index ++
                  if(index >= stringArray.length){
                      index = 0
                  }
              }
          }
          setTimeout(changeText,delay)
      }
      
      changeText()

        var pursuitInterval = null;
        pursuitInterval = setInterval(function () {
        const show = document.querySelector('span[data-show]')
        const next = show.nextElementSibling || document.querySelector('.first-tips')
        const up = document.querySelector('span[data-up]')
        if (up) {
            up.removeAttribute('data-up')
        }
        show.removeAttribute('data-show')
        show.setAttribute('data-up', '')
        next.setAttribute('data-show', '')
        }, 2000)


})


</script>
<style lang="less" scoped>
.swiper-box {
    background: linear-gradient(45deg,#EE82EE 0%,#00D1FF 100%); 
}

.skills-container:hover .skills-style-group .tags-group-all{
    opacity: 0;
}

.skills-container:hover .skills-style-group .skills-list{
    opacity: 1;
}

.skills-container {
    overflow: hidden;
    .skills-style-group {
        padding-top: 10px;
        position: relative;
        .tags-group-all {
            position: absolute;
            transition: 0.3s;
            opacity: 1;
            display: flex;
            flex-direction: row;
            gap: 15px;
            animation: rowup 15s linear infinite;
            right: 20px;
            .first-group {
                display: flex;
                flex-direction: column;
                gap: 20px;
                div {
                    box-shadow: 0 2px 16px -3px rgba(0, 0, 0, .15);
                }
            }
            .second-group {
                display: flex;
                flex-direction: column;
                gap: 20px;
                transform: translateY(-50px);
                div {
                    box-shadow: 0 2px 16px -3px rgba(0, 0, 0, .15);
                }
            }
        }
        .skills-list {
            position: absolute;
            transition: 0.3s;
            opacity: 0;
            display: flex;
            flex-wrap: wrap;
            height: 100px;
            overflow: auto;
            .skill-info {
                display: flex;
                align-items: center;
                margin-right: 10px;
                margin-top: 10px;
                background: #f7f9fe;
                border-radius: 40px;
                padding: 4px 12px 4px 8px;
                border: 1px solid #e3e8f7;
                box-shadow: 0 8px 16px -4px #2c2d300c;
                .skill-icon {
                    width: 32px;
                    height: 32px;
                    border-radius: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 8px;
                    img {
                        width: 18px;
                        height: 18px;
                    }
                }

            }
        }
    }
}

@keyframes rowup {
  from {
    transform: translateY(0%);
  }

  to {
    transform: translateY(-100%);
  }
}

.white-color {
    color: #F7F9FE;
    background-color: #3471FF;
}
.padding-px {
    padding-top: 25px;
    padding-left: 12px;
}
.display-flex {
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>