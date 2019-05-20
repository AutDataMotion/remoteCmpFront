// 赛题配置
import React from 'react';

const globalConf={
  defaultUserInfo: {
      login:false,
      name: "未登录",
      team_name: "",
      competition_id: 0,
  },
  userInfo: {
    login:false,
    name: "未登录",
    team_name: "",
    competition_id: 0,
  },
  login:(ajaxUserInfo, callback=()=>{})=>{
    if(ajaxUserInfo.hasOwnProperty('user_info') && ajaxUserInfo.user_info.hasOwnProperty('name') && ajaxUserInfo.user_info.name != globalConf.defaultUserInfo.name){
      console.log('global login ');
      globalConf.userInfo.login = true;
      globalConf.userInfo.name = ajaxUserInfo.user_info.name;
      globalConf.userInfo.team_name = ajaxUserInfo.user_info.team_name;
      globalConf.userInfo.competition_id = ajaxUserInfo.user_info.competition_id;
    } else {
      globalConf.userInfo = {
        ...globalConf.defaultUserInfo,
      };
    }

    callback();
  },
  logout: (callback=()=>{})=>{
    globalConf.userInfo = {
      ...globalConf.defaultUserInfo
    };
    callback();
  },
  // baseUrl:'https://www.easy-mock.com/mock/5cdadc3dfb3e4604b7673bae/rsc/',
  baseUrl:'http://119.3.202.35/',
  uploadTips:'提示：每日限制上传【5】次，取最高分作为最终成绩',
  dashboardTips:'公告：排行榜每日上午8:00更新一次',

  genUrl: (path)=>{
    return globalConf.baseUrl + path;
  },
  headerCOR:{
    header:{
      'Content-Type':'application/json',
      'X-Requested-With':'XMLHttpRequest',
      'Cache-Control':'no-cache,no-store',
    },
    withCredentials: true,
  },
  defaultPageMdl:{
    pageId:1,
    pageSize:30,
  },
  genDefaultTableList: ()=>{
    return {
      total:0,
      list:[],
      ...globalConf.defaultPageMdl,
    };
  },

  genPageModel:(m)=>{
    return {
      ...m,
      ...globalConf.defaultPageMdl
    }
  },

  formatResponseComm:(res, funCvtData=(data)=>{})=>{

    funCvtData(res.data);
    console.log("before format response", res.data);
    return {
      success: res.status ===1 ? true:false,
      message: res.message,
      data:{
        ...res.data
      }
    };
  },
  themeConf : [
    {
      condition: '主题一',
      validate: true,
      title: '遥感图像场景分类',
      bannerId: 1,
      bannerTitle: '主题一: ',
      bannerTitleSecond: '介绍文字',
      operation: '查看详情',
      url:'/theme/1',
      regist: '报名注册',
      description:
        '遥感图像场景分类竞赛任务旨在对空间信息网络中场景级的遥感图像进行内容解译，' +
        '高效地对遥感图像中的感兴趣及非感兴趣场景进行自动化的识别和区分，' +
        '进而针对场景类别有选择性的压缩遥感图像，减少待传输图像数据的容量，有效缓解数据链路传输压力。',
    },
    {
      condition: '主题二',
      validate: true,
      title: '遥感图像目标检测 ',

      bannerId: 2,
      bannerTitle: '主题二: ',
      bannerTitleSecond: '介绍文字',

      operation: '查看详情',
      url:'/theme/2',
      regist: '报名注册',
      description:
        '针对空间信息网络多维、多尺度空间信息链路传输与处理瓶颈，' +
        '通过本项竞赛遴选优秀的遥感图像目标自动检测识别算法模型，' +
        '对遥感图像中感兴趣的目标对象进行检测识别，' +
        '并依据检测结果对遥感图像进行基于目标内容的智能压缩，' +
        '实现对目标区域无损压缩，对非目标区域进行大幅压缩，' +
        '从而保留数据中感兴趣区域的信息，同时去除背景等冗余信息，' +
        '提高空间信息网络链路传输的效率。',
    },
    {
      condition: '主题三',
      validate: false,
      title: '遥感图像语义分割 ',

      bannerId: 3,
      bannerTitle: '主题三: ',
      bannerTitleSecond: '介绍文字',

      operation: '查看详情',
      url:'/theme/3',
      regist: '报名注册',
      description:
        '通过对遥感图像的语义分割，可方便快捷地获取土地利用/覆' +
        '盖信息，并作为精准农业、城市规划、环境保护、土地资源管理等应用' +
        '的数据支撑。目前针对遥感图像像素级分类的前沿算法已能达到很高的' +
        '精度，然而现有研究工作都局限于较小的地面区域和较为单一的遥感数' +
        '据，造成这些算法对于多源图像的适应能力极为有限。因此，通过本项' +
        '竞赛遴选出利用遥感数据向地学知识进行高效转化的算法模型，获取泛' +
        '化能力强大的遥感语义分割算法，进而对多源数据、广域区域进行快速' +
        '准确的土地利用/覆盖信息提取，从而提升空间信息网络建设中遥感图像' +
        '解译的自动化程度和实际应用能力。',
    },
    {
      condition: '主题四',
      validate: false,
      title: '遥感图像变化检测 ',

      bannerId: 4,
      bannerTitle: '主题四: ',
      bannerTitleSecond: '介绍文字',

      operation: '查看详情',
      url:'/theme/4',
      regist: '报名注册',
      description:
        '遥感图像变化检测可以对同一地点的不同时相数据进行变化检测处理，在资源和环境监测、地理国情监测、自然灾害评估等领域具有高度的实用价值。目前遥感图像变化检测的前沿算法在数据层面以及算法设计层面均具有一定局限性。针对遥感图像变化检测在实际应用中的不足，通过本项竞赛遴选出泛化性能强大的高效变化检测算法，可以提高空间信息网络建设中的遥感图像自动化解译能力。',
    },
    {
      condition: '主题五',
      validate: false,
      title: '遥感卫星视频目标跟踪 ',
      bannerId: 5,
      bannerTitle: '主题五: ',
      bannerTitleSecond: '介绍文字',

      operation: '查看详情',
      url:'/theme/5',
      regist: '报名注册',
      description:
        '利用光学遥感卫星视频可以实现指定目标监控，' +
        '在机场、商场、道路流量监测等方面具有重要的应用价值，' +
        '但卫星视频数据存在目标尺寸相对较小、背景抖动、目标大范围旋转等问题，' +
        '自动化跟踪是实现应用的一个难点。针对空间信息网络多维、' +
        '多尺度空间信息链路传输与处理瓶颈，' +
        '通过本项竞赛遴选优秀的光学遥感卫星视频目标自动跟踪算法模型，' +
        '实现空间信息网络对地物目标的在线实时跟踪，' +
        '同时将跟踪结果经链路直接传回，提高空间信息网络在轨实时处理能力和链路传输效率。',
    },
  ]
};

export default globalConf;
