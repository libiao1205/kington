<template>
    <div>
        <div class="inner_banner">
            <div class="pic bannerpic" reach="" effect="img"><img src="../../assets/image/news/banner_news.jpg" alt="" class="animated" style="visibility: visible;"></div>
            <div class="pic bannerpic-s" reach="" effect="img"><img src="../../assets/image/news/banner_news_s.jpg" alt="" class="animated" style="visibility: visible;"></div>
            <div class="txt" reach="fadeInUp" effect="h3,p" eachdelay="h3,p" delaytime="50">
                <div class="tb">
                    <div class="tb_c">
                        <h3 class="fadeInUp animated" style="animation-delay: 0s; visibility: visible;">新闻资讯</h3>
                        <p class="fadeInUp animated" style="animation-delay: 0.05s; visibility: visible;">news information</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="container">
                <!-- 视频 -->
                <div class="videobox fxr">
                    <div class="vitem left wow fadeInUp" data-wow-delay="0.1s" v-for="item in newsVedioList" :style="item.color">
                        <span></span><img :src="item.vedioImg">
                    </div>
                    <div class="clear"></div>
                </div>
                <!-- END 视频 -->
                <!-- 新闻资讯 -->
                <div class="newsbox">
                    <div class="newnews wow fadeInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
                        <ul class="cf">
                            <li class="wow fadeInUp" v-for="(item) in newsList"  data-wow-delay=".2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;margin-bottom: 5%" @click="transpond('/newsDetails',item.code)">
                                <div class="nnews-img"><a href="javascript:void(0);"><img :src="item.coverImg"></a></div>
                                <h3><a href="javascript:void(0);">{{item.title}}</a></h3>
                                <p><a href="javascript:void(0);">                          {{item.brief}}</a></p>
                            </li>
                        </ul>
                        <div class="clear"></div>
                    </div>
                </div>
                <!-- END 新闻资讯 -->
            </div>
        </div>
    </div>
</template>

<script>
    import '../../assets/css/jd_css/introduceWe.scss'
    import '../../assets/css/jd_css/news.scss'
    import '../../assets/css/jd_css/home.scss'
    import {WOW} from 'wowjs'
    import {mapState} from 'Vuex'
    export default {
        name: "index",
        computed:{
            ...mapState({
                newsList:state =>state.constant.newsList,
                newsVedioList:state=>state.constant.newsVedioList,
            }),
        },
        mounted(){
            let wow = new WOW({live: true, scrollContainer: null});
            wow.init();
        },
        methods:{
            transpond(path,code){
                this.$router.push({name:path,params:{code:code}});
            }
        }
    }
</script>

<style scoped>

</style>
