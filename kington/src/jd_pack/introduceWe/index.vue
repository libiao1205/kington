<template>
    <div class="w100">
        <div class="inner_banner">
            <div class="pic bannerpic" reach="" effect="img"><img src="../../assets/image/introduceWe/banner_ab.jpg" alt="" class="animated" style="visibility: visible;"></div>
            <div class="pic bannerpic-s" reach="" effect="img"><img src="../../assets/image/introduceWe/banner_ab_s.jpg" alt="" class="animated" style="visibility: visible;"></div>
            <div class="txt" reach="fadeInUp" effect="h3,p" eachdelay="h3,p" delaytime="50">
                <div class="tb">
                    <div class="tb_c">
                        <h3 class="fadeInUp animated" style="animation-delay: 0s; visibility: visible;">关于我们</h3>
                        <p class="fadeInUp animated" style="animation-delay: 0.05s; visibility: visible;">About Us</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="main">
                <div id="#gysds" class="abbox" >
                        <div class="abtit wow fadeInUp animated animated" style="padding-top:5%;animation-delay: 0.1s; visibility: visible;" >
                            <h1>{{introduceWe[0].title}}</h1>
                        </div>
                        <div class="abtxt wow fadeInUp animated animated fxb" data-wow-delay="0.15s" style="visibility: visible; animation-delay: 0.2s;">
                            <P>
                                深圳小驱智能机器人技术有限公司（ROBODRIVER）与2020年10月成立于深圳市，是一家以3D激光定位导航算法为核心的机器人公司。主营方向为智能巡逻、智能巡检、移动操作等相关机器人产品和技术方案。公司核心团队来自哈尔滨工业大学、东北大学、中科院上海微系统与信息技术研究所等多内知名高校和科研院所，具有多年智能移动机器人相关项目和研发经验。
                            </P>
                            <img :src="this.abImg" >
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {WOW} from 'wowjs'
    import img from '../../assets/image/introduceWe/abimg01.jpg';
    import '../../assets/css/jd_css/introduceWe.scss'
    import '../../assets/css/jd_css/common.scss';
    import {mapState} from 'vuex';
    export default {
        name: "index",
        computed:{
            ...mapState({
                introduceWe:state =>state.constant.introduceWe,
                list1:state =>state.constant.list1,
            }),
        },
        data(){
            return{
                abImg:img,
            }
        },
        mounted(){
            let wow = new WOW({live: true, scrollContainer: null});
            wow.init();
        },

    }
</script>

<style scoped>
    hr{
        width:10%;
        margin-top: 2%;
    }
</style>
