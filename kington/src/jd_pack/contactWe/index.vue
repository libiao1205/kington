<template>
    <div class="w100>">
        <div class="inner_banner">
            <div class="pic bannerpic" reach="" effect="img"><img src="../../assets/image/home/banner_ctc.jpg" alt="" class="animated" style="visibility: visible;"></div>
            <div class="pic bannerpic-s" reach="" effect="img"><img src="../../assets/image/home/banner_ctc_s.jpg" alt="" class="animated" style="visibility: visible;"></div>
            <div class="txt" reach="fadeInUp" effect="h3,p" eachdelay="h3,p" delaytime="50">
                <div class="tb">
                    <div class="tb_c">
                        <h3 class="fadeInUp animated" style="animation-delay: 0s; visibility: visible;">联系我们</h3>
                        <p class="fadeInUp animated" style="animation-delay: 0.05s; visibility: visible;">Contact Us</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="main">
                <div class="container">
                    <!-- 联系方式 -->
                    <div class="ctcbox">
                        <div class="ctcinfo">
                            <h1 class="wow fadeInRight" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInRight;">{{contactWe[0].companyName}}</h1>
                            <div class="ctcinfo-l wow fadeInRight" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInRight;">
                                <p><i class="icon-add"></i>地址：{{contactWe[0].address}}</p>
                            </div>
                            <div class="ctcinfo-r wow fadeInRight" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInRight;">
                                <p><i class="icon-tel"></i>电话：<label>{{contactWe[0].phone}}</label></p>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <!-- END 联系方式 -->
                    <!-- 百度地图 -->
                    <baidu-map :center="center" :zoom="zoom" @ready="handler" style="height:380px" :scroll-wheel-zoom='true'>
                    </baidu-map>
                    <!-- END 地图 -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '../../assets/css/jd_css/introduceWe.scss';
    import '../../assets/css/jd_css/home.scss';
    import '../../assets/css/jd_css/common.scss';
    import {WOW} from 'wowjs';
    import {mapState} from 'vuex'
    export default {
        name: "index",
        computed:{
            ...mapState({
                contactWe:state =>state.constant.contactWe,
            }),
        },
        mounted(){
            let wow = new WOW({live: true, scrollContainer: null});
            wow.init();
        },
        data(){
            return {
                center: {lng: 113.870858, lat: 22.591432},
                zoom: 13
            }
        },
        methods:{
            handler ({BMap, map}) {
                let point = new BMap.Point(113.870858,22.591432);
                map.centerAndZoom(point, 13);
                let marker = new BMap.Marker(point); // 创建标注
                map.addOverlay(marker);// 将标注添加到地图中
                let circle = new BMap.Circle(point, 6, { strokeColor: 'Red', strokeWeight: 6, strokeOpacity: 1, Color: 'Red', fillColor: '#f03' });
                map.addOverlay(circle);
            },
        }
    }
</script>
<style scoped>
</style>
