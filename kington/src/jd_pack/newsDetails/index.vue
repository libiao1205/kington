<template>
    <div>
        <div class="inner_banner">
            <div class="pic bannerpic" reach="" effect="img"><img src="../../assets/image/news/banner_news.jpg" alt="" class="animated" style="visibility: visible;"></div>
            <div class="pic bannerpic-s" reach="" effect="img"><img src="../../assets/image/news/banner_news_s.jpg" alt="" class="animated" style="visibility: visible;"></div>
            <div class="txt" reach="fadeInUp" effect="h3,p" eachdelay="h3,p" delaytime="50">
                <div class="tb">
                    <div class="tb_c">
                        <h3 class="fadeInUp animated" style="animation-delay: 0s; visibility: visible;">新闻正文</h3>
                        <p class="fadeInUp animated" style="animation-delay: 0.05s; visibility: visible;">a story of colors</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="container">
                <!-- 新闻正文 -->
                <div class="newsdetail cf">
                    <div class="newsdetail-title">{{getNewsRow(this.$route.params.code).title}}</div>
                    <div class="newsdetail-time"><label>{{getNewsRow(this.$route.params.code).companyName}}</label></div>
                    <div class="newsdetail-cont fxcc" v-for="item in getNewsRow(this.$route.params.code).content">
                        <section>
                            <section>
                                <section>
                                    <p style="text-align:center;display: block;width: 800px">
                                        <img :src="item.img" title="1.png" alt="1.png" style="width: 100%;height:100%">
                                    </p>
                                </section>
                            </section>
                        </section>
                        <p><br></p>
                        <section>
                            <section>
                                <section>
                                    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; box-sizing: border-box; clear: both; min-height: 1em; word-wrap: break-word !important;"><br></p>
                                </section>
                            </section>
                        </section>
                        <section>
                            <section>
                                <section>
                                    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; box-sizing: border-box; clear: both; min-height: 1em; word-wrap: break-word !important; text-align: center;">
                                        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box; word-wrap: break-word !important; letter-spacing: 0px;" class="font-b">{{item.newsTitle}}</span><br>
                                        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box; word-wrap: break-word !important; letter-spacing: 0px;">{{item.newsContent}}</span>
                                    </p>
                                </section>
                            </section>
                        </section>
                        <section>
                            <section>
                                <section>
                                    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; box-sizing: border-box; clear: both; min-height: 1em; word-wrap: break-word !important;"><br></p>
                                </section>
                            </section>
                        </section>
                    </div>
                    <div class="go-back">[<a href="javascript:history.back()">返回</a>]</div>
                    <div class="clear"></div>
                </div>
                <!-- END 新闻正文 -->
            </div>
        </div>
    </div>
</template>

<script>
    import {WOW} from 'wowjs';
    import '../../assets/css/jd_css/introduceWe.scss';
    import '../../assets/css/jd_css/news.scss';
    import '../../assets/css/jd_css/home.scss';
    import '../../assets/css/jd_css/common.scss';
    import { mapGetters} from 'vuex';
    export default {
        name: "index",
        computed:{
            ...mapGetters({
               getNewsRow:'constant/getNewsRow',
            }),
        },
        mounted(){
            let wow = new WOW({live: true, scrollContainer: null});
            wow.init();
        }
    }
</script>

<style scoped>

</style>
