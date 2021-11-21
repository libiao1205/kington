function  getDisplayName(dataList, value, defaultValue) {
    let data = dataList.find(c => c.code === value);
    if (data)
        return data.value;
    else
        return defaultValue
}

function  getDisplayCode(dataList, value, defaultValue) {
    let data = dataList.find(c => c.code === value);
    if (data)
        return data;
    else
        return defaultValue
}

//banner
import img1 from "../../../assets/image/home/banner01.jpg"
import img2 from "../../../assets/image/home/banner02.jpg"
import img3 from "../../../assets/image/home/banner03.jpg"
import img4 from "../../../assets/image/home/banner04.jpg"
//product
import product01 from '../../../assets/image/home/product01.jpg'
import product02 from '../../../assets/image/home/product02.jpg'
import product03 from '../../../assets/image/home/product03.jpg'
import product04 from '../../../assets/image/home/product04.jpg'
import product05 from '../../../assets/image/home/product05.jpg'
import product06 from '../../../assets/image/home/product06.jpg'
import product07 from '../../../assets/image/home/product07.jpg'

import product_s01 from '../../../assets/image/home/product_s01.jpg'
import product_s02 from '../../../assets/image/home/product_s02.jpg'
import product_s04 from '../../../assets/image/home/product_s04.jpg'
import product_s05 from '../../../assets/image/home/product_s05.jpg'
import product_s06 from '../../../assets/image/home/product_s06.jpg'
import product_s07 from '../../../assets/image/home/product_s07.jpg'
import product_s08 from '../../../assets/image/home/product_s08.jpg'
import product_s09 from '../../../assets/image/home/product_s09.jpg'
import product_s10 from '../../../assets/image/home/product_s10.jpg'
import product_s11 from '../../../assets/image/home/product_s11.jpg'
import product_s12 from '../../../assets/image/home/product_s12.jpg'
import product_s13 from '../../../assets/image/home/product_s13.jpg'
//newsDetails
import news1 from '../../../assets/image/news/news1.jpg';
import news3 from '../../../assets/image/news/news3.jpg';
import news4 from '../../../assets/image/introduceWe/img3.jpg';
import news9 from '../../../assets/image/news/news9.jpeg';
import news10 from '../../../assets/image/news/news10.png';
import news11 from '../../../assets/image/news/news11.jpg';
import news12 from '../../../assets/image/news/news12.jpg';
import news13 from '../../../assets/image/news/news13.jpg';
import vedioimg1 from '../../../assets/image/home/indvideo1.jpg';
import vedioimg2 from '../../../assets/image/home/indvideo2.jpg';
//关于我们
import introduceWe1 from '../../../assets/image/introduceWe/abimg01.jpg';
const state = {
    //新闻资讯begin
    homeImageList:[
        img1,
        img2,
        img3,
        img4
    ],

    newsVedioList:[
        {vedioUrl:'http://player.youku.com/embed/XMzE3NTU0Mjc1Mg==',vedioImg:vedioimg1,color:'background-color:#908CD1;margin-right:25px'},
        {vedioUr1:'http://player.youku.com/embed/XMzE3NTU0Mjc1Mg==',vedioImg:vedioimg2,color:'background-color:#E2534D;margin-left:25px'},
    ],
    newsList:[
        {code:1,title:'市欧美同学会党组书记李霞来我司调研疫情防控和复工复产情况',coverImg:news1,brief:'3月17日上午，市委统战部二级巡视员、市欧美同学会党组书记李霞，市欧美同学会党组成员、专职副会长兼秘书长',companyName:'上海晶顿科技有限公司',
            content:[
                {img:news1,newsTitle:'李霞指出，目前上海疫情防控形势向好，但要严防输入引发反弹，持续巩固成果，有序推进复工复产复市。晶顿科技作为高科技企业，与海外业务往来密切，受疫情影响，遇到暂时困难，但发展前景很好，是朝阳产业，要树立信心、共克时艰。希望企业在发展规划上思考调整、精心谋划，瞄准国家新材料产业战略，争取在重点领域取得突破。',newsContent:''},
            ]
        },
        {code:2,title:'晶顿科技荣获2018“创业在上海”新材料行业优胜企业奖并入围国赛',coverImg:news3,brief:'10月30日，晶顿科技作为2018年“创业在上海”国际创新创业大赛（新材料领域）优胜企业代表',companyName:'上海晶顿科技有限公司',
            content:[
                {img:news3,newsTitle:'2018-11-10',newsContent:'10月30日，晶顿科技作为2018年“创业在上海”国际创新创业大赛（新材料领域）优胜企业代表，受邀参加2018浦江创新论坛之打造“双创”生态升级版及2018年“创业在上海”国际创新创业大赛现场颁奖仪式。此次活动由国家科技部火炬高技术产业开发中心、上海市科学技术委员会，上海市科技创业中心以及各区科委承办。'},
                {img:news4,newsTitle:'',newsContent:'上海晶顿科技有限公司荣获2018“创业在上海”国际创新创业大赛优胜企业奖。'},
                {img:news12,newsTitle:'',newsContent:'根据国赛参赛条件和市赛成绩，上海选拔赛在全市6520家报名企业中筛选出635家企业参加线下选拔赛，并根据企业成立时间和收入规模划分为132家初创企业组和503家成长企业组，最终将从中选出200余家企业成功代表上海，进击国赛。'},
                {img:news13,newsTitle:'',newsContent:'本届赛事全国共有31136家参赛企业在37个省级赛区展开激烈角逐，总决赛在宁波展开，全国新材料行业有180家企业挺进国赛。其中，晶顿科技通过上海赛区初赛、复赛的层层选拔成为优胜企业之一进入决赛，最终入围第七届中国创新创业大赛成长组行业总决赛。'},
            ]
        },
        {code:3,title:'科技环保行业专场路演举行',coverImg:news11,brief:'12月7日，由上海环保科技园、“创业连”和“在程创业”联合主办的“科技环保项目演对接会”在中国（上海）',companyName:'上海晶顿科技有限公司',
            content:[
                {img:news11,newsTitle:'2017年12月08日',newsContent:'12月7日，由上海环保科技园、“创业连”和“在程创业”联合主办的“科技环保项目演对接会”在中国（上海）创业者公共实训基地顺利举办。\n' +
                        '本次路演共有奥勇新材料科技（上海）有限公司、厦门市环康环保科技有限公司、上海晶顿科技有限公司、沃清环保科技（上海）有限公司等9家在环保行业内具备一定规模，有项目创新能力且成长迅速的企业参与展示。现场，公司代表分别就公司的业绩、产品、发展方向等作详细介绍。“超高比容钽粉、多孔球形钽颗粒生产”、“工业废氨循环回收工艺”、“新型活性炭纤维复合材料及环保应用”、“雨水废水调蓄回收系统”、“生态环境监管数据服务”、“柔性包装物流载具循环共享系统”、“水处理用平板陶瓷膜”、“土壤生态改造”等9个环保和新材料方面的项目先后亮相。\n' +
                        '本次路演活动中，九核基金、科翔投资、存渊投资、翌诚投资、惠畅资本、名兴资本的投资人悉数到场。每个项目结束后，专家都围绕着产品创新、市场定位、融资需求等方面与企业进行深入探讨。\n' +
                        '据悉，上海环保科技园作为国家级科技孵化器，一直致力于孵化环保项目，帮助企业对接资本，助力企业发展。“创业连”作为科技众创空间，主要提供孵化、技术对接、成果转化、市场投资等众多创业服务。本次路演，旨在为拥有优秀环保项目的科技环保领域创业者提供一个展示的平台，帮助他们与投资机构交流，促进企业与投资机构相互了解，助力项目的产业化。\n'},
            ]
        },

        {code:4,title:'杨浦区委组织部副部长夏康明走访海外人才企业',coverImg:news10,brief:'2月4日，区委组织副部长、区人社局党委书记夏康明在区高层次人才中心主任谭铭、副主任朱鸽飞等陪同下看望',companyName:'上海晶顿科技有限公司',
            content:[
                {img:news10,newsTitle:'2016年2月5日',newsContent:'2月4日，区委组织副部长、区人社局党委书记夏康明在区高层次人才中心主任谭铭、副主任朱鸽飞等陪同下看望了上海天瓷信息科技有限公司创始人史方博士和上海晶顿科技有限公司创始人周忠福博士，详细了解两位专家在杨浦的工作和生活情况，并致以新春的问候和祝福。\n' +
                        '在公司董事长周忠福博士的陪同下，实地了解公司材料检测实训基地的建设情况，体验公司自主研发的企业级空气净化和水处理设备的使用情况。夏康明同志表示，晶顿科技拥有9位博士和10多位硕士，在杨浦成立的短短三年间，已申请了24项专利，体现了公司团队强大的创新研发能力。他对公司在材料检测、新材料研发、空气净化、水处理，石墨烯材料应用等领域的巨大投入和取得的成绩表示充分肯定。他强调，我国在材料领域还大多依赖国外进口，希望有更多的类似晶顿科技的企业为推动我国新材料产业的发展做出贡献。下阶段，杨浦将针对企业的实际需求，进一步研究人才和产业政策双结合的模式，支持企业在杨浦茁壮成长。\n'},
            ]
        },
    ],
    //新闻资讯end
    //关于我们begin
    list1:[{title:'新闻列表'}],
    introduceWe:[
        {title:'企业介绍',img:introduceWe1,introduce:'深圳小驱智能机器人技术有限公司（ROBODRIVER）与2020年10月成立于深圳市，是一家以3D激光定位导航算法为核心的机器人公司。主营方向为智能巡逻、智能巡检、移动操作等相关机器人产品和技术方案。公司核心团队来自哈尔滨工业大学、东北大学、中科院上海微系统与信息技术研究所等多内知名高校和科研院所，具有多年智能移动机器人相关项目和研发经验。'}
    ],
    //关于我们end
    //产品展览begin
    productList:[
        {code:1,img:product01,color:'\#FCB040',chineseName:'室外巡逻机器人',englishName:'InGTon',content:'尺寸：70*50*50cm，最大速度：1.5m/s；两轮差速结构：效率高、运行平稳，最大爬坡10°、最高越障5cm，最大速度1.2m/s，3D激光定位导航算法，可适应室外动态复杂环境，室内外环境无缝连接，满足机器人长期稳定运行，搭载海康mini双视云台，彩色高清1920×1080分辨率，高精度红外相机，360°旋转，支持音/视频功能，8小时续航，自动充电桩，集成任务管理逻辑和用户操作界面，使用方便。',
            imgs:[product_s06,product_s01]},
        {code:2,img:product04,color:'\#908CD1',chineseName:'发电厂巡检机器人',englishName:'InGTon',content:'尺寸：96*60*80cm，最大速度1.2m/s；聚酰亚胺（PI）是指主链上有酰亚胺环（-CO-NH-CO-）的一类聚合物，是综合性能最佳的有机高分子材料之一，短时耐高温达400℃以上，长期使用温度范围-200℃～300℃，是目前已经工业化的高分子材料中使用温度最高的品种之一。同时聚酰亚胺又具有高强度、高绝缘性、耐辐射、耐化学等综合性能，其具有多种合成途径，以多种材料形式如薄膜、纤维、塑料、' +
                '涂料、胶粘剂、分离膜、光刻胶、液晶取向剂等在航天、航空、微电子、机电、化工、汽车等方面都具有突出的应用地位。\n',
            imgs:[product_s09,product_s02]},
        {code:3,img:product03,color:'\#8DC63E',chineseName:'移动操作机器人底盘',englishName:'InGTon',content:'尺寸：88*63*40 cm，最大速度：1.2m/s；3D 激光定位导航算法，高精度高稳定性，适合室内外多种场景，融合激光、轮式里程计和 IMU 信息，定位，数据稳定平滑，在线建图，支持同时录数据包，建图和定，位“一键切换” ，在线路径编辑功能（可视化），可方便路径增加、修改和删除，自由设置路径宽度、速度等多种信息，定位信息掉电保持功能，机器人内可保存多张地图，地图切换方便，丰富的 ' +
                'API 接口，支持速腾聚创、镭神智能、Velodyne 等 16线激光雷达，激光、超声波、防撞触边 3 重避障安全，自动充电，1900 兆网络， 丰富的外设接口：12V/5V 电源、USB、网 口、HDMI，双色状态指示灯',
            imgs:[product_s04,product_s05]},
        {code:4,img:product02,color:'\#f391a9',chineseName:'教育机器人套件（通用型）',englishName:'InGTon',content:'尺寸：52*40*43cm，最大速度：1.0 m/s；3D 激光定位导航算法，高精度高稳定性，适合室内外多种场景，融合激光、轮式里程计和 IMU 信息，定位数据稳定平滑，在线建图，支持同时录数据包，建图和定位“一键切换”，在线路径编辑功能（可视化），可方便路径增加、修改和删除，自由设置路径宽度、速度等多种信息，定位信息掉电保持功能，机器人内可保存多张地图，地图切换方便，丰富的 API 接口，' +
                '支持速腾聚创、镭神智能、Velodyne 等 16线激光雷达，支持 CSI、USB、网口等多种相机，1900 兆网络，丰富的外设接口：12V 电源、USB、网口、HDMI',
            imgs:[product_s07, product_s08]},
        {code:5,img:product05,color:'\#694d9f',chineseName:'教育机器人套件（mini型）',englishName:'InGTon',content:'尺寸：45x32 x33 cm，最大速度：0.7 m/s；3D 激光定位导航算法，高精度高稳定性，适合室内外多种场景，融合激光、轮式里程计和 IMU 信息，定位数据稳定平滑，在线建图，支持同时录数据包，建图和定位“一键切换”，在线路径编辑功能（可视化），可方便路径增加、修改和删除，自由设置路径宽度、速度定位信息掉电保持功能，机器人内可保存多张地图，地图切换方便，丰富的 API 接口，' +
                '支持速腾聚创、镭神智能、Velodyne 等 16线激光雷达，支持 CSI、USB、网口等多种相机，1900 兆网络，丰富的外设接口：12V 电源、USB、网口、HDMI',
            imgs:[product_s10, product_s11]},
        {code:6,img:product06,color:'\#00a6ac',chineseName:'高性能控制器',englishName:'InGTon',content:'I7-7700T，32G内存，SSD512G\n' +
                '最大建图面积：25万平\n' +
                '最大运行速度：1.5m/s\n' +
                '定位算法：3D激光\n' +
                '路径规划：基于路网\n' +
                '运动控制：支持\n' +
                '支持底盘形式：4轮差速、2轮差速、4转4驱\n' +
                '支持雷达：VLP16、速腾聚创16线、镭神16线\n' +
                '是否支持RTK：支持\n' +
                '网口：6路\n' +
                'COM口：2*RS232, 2*RS485/RS422/RS232（自由设定）\n' +
                'USB：6*USB3.0\n' +
                '尺寸：293*198*68mm（长宽高）',
            imgs:[product_s12]},
        {code:7,img:product07,color:'\#b76f40',chineseName:'中性能控制器',englishName:'InGTon',content:'I58265U，8G内存，SSD120G\n' +
                '最大建图面积：10万平\n' +
                '最大运行速度：1.0m/s\n' +
                '定位算法：3D激光\n' +
                '路径规划：基于路网\n' +
                '运动控制：支持\n' +
                '支持底盘形式：4轮差速、2轮差速、4转4驱\n' +
                '支持雷达：VLP16、速腾聚创16线、镭神16线\n' +
                '网口：2路\n' +
                'COM口：4*RS232, 2*RS232/RS485\n' +
                'USB：4*USB3.0，2*USB2.0,尺寸：174*148*57mm（长宽高）',
            imgs:[product_s13]}
    ],
    //产品展览end

    //招聘信息begin
    recruitmentList:[
        {positionName:'研发工程师',personNumber:1,responsibility:'依据公司的研发项目需求，独立制定实验方案，完成研发实验。能够独立查阅文献、专利等专业资料。',ask:'硕士及以上学历，高分子材料学、材料科学等相关专业。',email:'mignon.mao@gettec.cn'},
    ],
    //招聘信息end

    //联系我们begin
    contactWe:[
        {companyName:'深圳小驱智能机器人技术有限公司',address:'广东省深圳市宝安区共和工业路48号白鹿广场B栋218',phone:'13924590064'},
    ],
    //联系我们end
};

const getters = {
    getNewsRow:(state) => (value) =>{
        return getDisplayCode(state.newsList,value,'空')
    },
    getProductRow:(state) => (value) =>{
        return getDisplayCode(state.productList,value,'空')
    },
};
export default {
    namespaced: true,
    state,
    getters
}
