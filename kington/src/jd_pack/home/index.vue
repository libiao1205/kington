<template>
    <div class="w100">
        <div class="w100 banner-bg"/>
        <div class="main">
            <div class="swiper-container banner-container banner wow fadeInUp swiper-container-horizontal" data-wow-delay="0s" style="visibility: visible; animation-delay: 0s; animation-name: fadeInUp;"  >
                <swiper :options="swiperOptionBanner" ref="swiperBanner" >
                    <swiper-slide v-for="(item,index) in imgList " :key="index">
                        <img :src="item" class="banner_img">
                    </swiper-slide>
                </swiper>
                <div class="swiper-pagination" style="margin-bottom: 15px;"></div>
                <div class="swiper-button-next" ></div>
                <div class="swiper-button-prev" ></div>
            </div>

            <!--关于我们-->
            <div class="wow fadeInUp inDab "  delaytime="200" style="visibility: visible; animation-name: fadeInUp;">
                <a href="javascript:void(0)" @click="transPond('/introduceWe',0)">
                    <div class=" backdrop " ></div>
                    <div class="inDabTxt show fadeInDown animated " delaytime="600" >
                        <img src="../../assets/image/home/ablogo.png" >
                        <div class="txt" >赋予移动机器人以灵魂<br></div>
                        <div class="more" >Discover more</div>
                    </div>
                </a>
            </div>
            <!--产品展示-->
            <div class=" inDProd">
                <!--Swiper-->
                <div class="swiper-container inDProd-container" >
                    <swiper :options="swiperOption" ref="mySwiper" >
                        　　<swiper-slide v-for="(items,index) in productImgList" :key="index" >
                        <div  class="cpseries "  :style="{'background-color':items.color}">
                            <router-link :to="{ name: '/product', params: { code: items.code}}">
                                <div class="prodimg"><img :src="items.img" alt="" ></div>
                                <div class="prodname"><h3>{{items.chineseName}}</h3><span>{{items.englishName}}</span></div>
                            </router-link>
                        </div>
                        　　</swiper-slide>
                    </swiper>
                </div>
            </div>
            <!--新闻资讯-->
            <!--        <div class="indnews">
                        <div class="left">
                            <div class="indvideo indvideo1 wow fadeInLeft" data-wow-delay="0s" style="visibility: visible; animation-delay: 0s; animation-name: fadeInLeft;">
                                <span></span><img data-original="../../assets/image/home/indvideo1.jpg" class="lazy" src="../../assets/image/home/indvideo1.jpg" style="display: inline;">
                            </div>
                            <div class="indvideo indvideo2 wow fadeInLeft" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInLeft;">
                                <span></span><img data-original="../../assets/image/home/indvideo2.jpg" class="lazy" src="../../assets/image/home/indvideo2.jpg" style="display: inline;">
                            </div>
                        </div>
                        <div class="right wow fadeInRight" v-for="(item,index) in this.newsList" v-if="index > newsList.length-4" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInRight;">
                            <div class="newsone newsone1 wow fadeInRight" data-wow-delay="0s" style="visibility: visible; animation-delay: 0s; animation-name: fadeInRight;">
                                <div class="indnews-txt" >
                                    <a href="javascript:void(0)" @click="transPond('/newsDetails',item.code)" class="tit">{{item.title}}</a>
                                    <span></span>
                                    <a href="javascript:void(0)" @click="transPond('/newsDetails',item.code)">  {{item.brief}}</a>
                                </div>
                                <div class="indnews-img" :style='{backgroundImage:"url("+item.coverImg+")"}' ></div>
                            </div>
                        </div>
                    </div>-->
        </div>
    </div>
</template>
<script>
import {WOW} from 'wowjs';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import '../../assets/css/jd_css/home.scss';
import '../../assets/css/jd_css/common.scss';
import { mapState} from 'vuex';
export default {
  name:'jd_pack',
      components: {
          Swiper,
          SwiperSlide,
      },
      computed: {
          ...mapState({
              imgList: state => state.constant.homeImageList,
              productImgList: state => state.constant.productList,
              newsList: state => state.constant.newsList,
          }),
      },
        data() {
        return {
            swiperOptionBanner:{
                loop: true,
                autoplay: {
                    delay: 5000,
                    stopOnLastSlide: false,//到最一页是否停止
                    disableOnInteraction: false,//用户操作Swiper后是否停止自动切换
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            swiperOption: {
                //loop: true,
                autoplay: {
                    delay: 5000,
                    stopOnLastSlide: false,//到最一页是否停止
                    disableOnInteraction: false,//用户操作Swiper后是否停止自动切换
                },
                slidesPerView : 4,
                spaceBetween: 10,
            },
        }
      },
      methods:{
          transPond(path,code){
              this.$router.push({name:path,params:{code:code}});
          }
      },
      mounted(){
          let wow = new WOW({live: true, scrollContainer: null});
          wow.init();
      }
}
</script>

<style scoped>

</style>
