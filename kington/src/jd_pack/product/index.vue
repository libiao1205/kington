<template>
    <div class="w100">
        <div class="inner_banner">
            <div class="pic bannerpic" reach="" effect="img"><img src="../../assets/image/joinWe/banner_prod.jpg" alt="" class="animated" style="visibility: visible;"></div>
            <div class="pic bannerpic-s" reach="" effect="img"><img src="../../assets/image/joinWe/banner_prod_s.jpg" alt="" class="animated" style="visibility: visible;"></div>
            <div class="txt" reach="fadeInUp" effect="h3,p" eachdelay="h3,p" delaytime="50">
                <div class="tb">
                    <div class="tb_c">
                        <h3 class="fadeInUp animated" style="animation-delay: 0s; visibility: visible;">产品展览</h3>
                        <p class="fadeInUp animated" style="animation-delay: 0.05s; visibility: visible;">PRODUCT DISPLAY</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="snprodbox">
                <div class="snprod fxjc">
                    <a href="javaScript:void(0)" v-for="(item,index) in productList" :class="isActive(index)" @click="anewLoad(item.code)" >{{item.chineseName}}</a>
                </div>
            </div>
            <div>
                <div class="container" >
                    <!-- 产品详情 -->
                    <div class="prodshow prodshow3 fadeInUp animated fxcc-c" style="animation-delay: 0s; visibility: visible;">
                        <div class="fxjc">
                            <h1>{{getProductRow(this.productIndex).chineseName}}</h1>
                        </div>
                        <p class="prodshow-txt">{{getProductRow(this.productIndex).content}}</p>
                        <div class="prodshow-img fxjc">
                            <div class="pd6-img01" v-for="item in getProductRow(this.productIndex).imgs"><img :src="item"></div>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <!-- END 产品详情 -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '../../assets/css/jd_css/introduceWe.scss';
    import '../../assets/css/jd_css/home.scss';
    import '../../assets/css/jd_css/joinWe.scss'
    import '../../assets/css/jd_css/common.scss';
    import {WOW} from 'wowjs';
    import {mapState} from 'vuex';
    import { mapGetters} from 'vuex';
    export default {
        name: "index",
        computed:{
            ...mapState({
                productList:state =>state.constant.productList,
            }),
            ...mapGetters({
                getProductRow:'constant/getProductRow',
            }),
        },
        mounted(){
            this.productIndex = this.$route.params.code === undefined ? 1: this.$route.params.code;
            let wow = new WOW({live: true, scrollContainer: null});
            wow.init();
        },
        data(){
            return {
                productIndex:1,
            }
        },
        methods:{
            anewLoad(code){
                this.productIndex = code;
            },
            isActive(index){
                return index == (this.productIndex - 1) ? 'active' : '';
            }
        }
    }
</script>

<style scoped>

</style>
