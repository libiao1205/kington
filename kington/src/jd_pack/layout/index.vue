<template>
    <div class="w100 fxc">
        <div class="top w100 wow fadeInUp" style="z-index:1000;">
            <el-menu  :default-active="activeIndex" class="el-menu-demo w100 posR" mode="horizontal" @select="this.handleSelect">
                <el-menu-item ></el-menu-item>
                <el-menu-item ><img src="../../assets/image/home/logo.png" style="width: 260px;height: 38px"></el-menu-item>
                <el-menu-item ></el-menu-item>
                <el-menu-item index="/home">首页</el-menu-item>
                <el-menu-item index="/introduceWe">关于我们</el-menu-item>
                <el-menu-item index="/product">产品展览</el-menu-item>
<!--                <el-menu-item index="/news">新闻资讯</el-menu-item>
                <el-menu-item index="/joinWe">加入我们</el-menu-item>-->
                <el-menu-item index="/contactWe" >联系我们</el-menu-item>
            </el-menu>
        </div>
        <div class="w100">
            <router-view class="w100 fxcc" style="margin-bottom: 50px;"></router-view>
        </div>
        <div class="fxcc-c w100 bg-w bot wow fadeInUp">
            <div style="text-align: center">
                深圳小驱智能机器人技术有限公司<br>
                粤ICP备2021151858号
            </div>
        </div>
        <el-backtop :bottom="80" exclude="product">
            <img src="../../assets/image/home/topback.png" style="width:54px; height:54px; border:0;">
        </el-backtop>
    </div>
</template>
<script>
    export default {
        name: "layout",
        data() {
            return {
                activeIndex: '/home',
            };
        },
        mounted() {
            this.activeIndex = this.$route.path
        },
        methods: {
            handleSelect(key, keyPath) {
                this.$router.push(key);
            }
        }
    }
</script>

<style lang="scss">
    .menuHeight{
        height:120px;
    }
    .top{
        position:fixed;
        top:0;
        height: 60px;
        padding: 0 54px;
        line-height: 60px;
        background:#fff;
        color:#333;
        filter:progid:DXImageTransform.Microsoft.Shadow(color=#909090,direction=120,strength=4);
        -moz-box-shadow: 2px 2px 10px #909090;
        -webkit-box-shadow: 2px 2px 10px #909090;
        box-shadow:2px 2px 10px #909090;
    }
    .bot{
        width: 100%;
        bottom: 0;
        height: 60px;
        background:#fff;
        color:#333;
        filter:progid:DXImageTransform.Microsoft.Shadow(color=#909090,direction=120,strength=4);
        -moz-box-shadow: 2px 2px 10px #909090;
        -webkit-box-shadow: 2px 2px 10px #909090;
        box-shadow:2px 2px 10px #909090;
    }
</style>
