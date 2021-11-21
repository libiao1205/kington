<template>
    <div class="w100">
        <div class="inner_banner">
            <div class="pic bannerpic" reach="" effect="img"><img src="../../assets/image/joinWe/banner_join.jpg" alt="" class="animated" style="visibility: visible;"></div>
            <div class="pic bannerpic-s" reach="" effect="img"><img src="../../assets/image/joinWe/banner_join_s.jpg" alt="" class="animated" style="visibility: visible;"></div>
            <div class="txt" reach="fadeInUp" effect="h3,p" eachdelay="h3,p" delaytime="50">
                <div class="tb">
                    <div class="tb_c">
                        <h3 class="fadeInUp animated" style="animation-delay: 0s; visibility: visible;">加入我们</h3>
                        <span class="fadeInUp animated" style="animation-delay: 0.05s; visibility: visible;font-size: 20px">{{recruitmentList[0].email}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="main">
            <!-- END 人才理念 -->
            <!-- 人才招聘 -->
            <div class="jobdetailbox wow " fadeInUp data-wow-delay="0.3s" >
                <div class="container" >
                    <div class="jobdetail fl"  v-for="item in recruitmentList" >
                        <div class="jobdetail-name cf"><h3>{{item.positionName}}（<label class="en">{{item.personNumber}}</label>人）</h3></div>
                        <div class="jobzz">
                            <h4>岗位职责：</h4>
                            <div class="jobzzcont">
                                {{item.responsibility}}
                            </div>
                        </div>
                        <div class="jobyq">
                            <h4>任职要求：</h4>
                            <div class="jobyqcont">
                                {{item.ask}}
                            </div>
                        </div>
                    </div>
                    <hr>
                </div>
            </div>
            <!-- END 人才招聘 -->
        </div>
    </div>
</template>

<script>
    import '../../assets/css/jd_css/introduceWe.scss';
    import '../../assets/css/jd_css/home.scss';
    import '../../assets/css/jd_css/joinWe.scss'
    import {WOW} from 'wowjs';
    import {mapState} from 'vuex';
    export default {
        name: "index",
        computed:{
            ...mapState({
                recruitmentList:state =>state.constant.recruitmentList,
            }),
        },
        mounted(){
            let wow = new WOW({live: true, scrollContainer: null});
            wow.init();
        },
        methods:{
            transpond(str){
                this.$router.push(str);
            }
        }
    }
</script>

<style scoped>

</style>
