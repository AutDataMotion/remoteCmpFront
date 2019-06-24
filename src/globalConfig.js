// 赛题配置
import React from 'react';

const globalConf={

  defaultUserInfo: {
      login:false,
      name: "未登录",
    "country": "",
    // "province": "",
    // "city": "",
    "work_id": 1,
    "work_place_top": "",
    "work_place_second": "",
    "work_place_third": "",
    "phone_number": "",
    "ID_card": "",
    "email": "",
    "is_captain": false,
    // "teamId": 0,
    "competition_id": 1,
    team_name: '', // 队伍名称
    invite_code: '', // 邀请码
  },
  userInfo: {
    login:false,
    name: "未登录",
    "country": "",
    // "province": "",
    // "city": "",
    "work_id": 1,
    "work_place_top": "",
    "work_place_second": "",
    "work_place_third": "",
    "phone_number": "",
    "ID_card": "",
    "email": "",
    "is_captain": false,
    // "teamId": 0,
    "competition_id": 1,
    team_name: '', // 队伍名称
    invite_code: '', // 邀请码
  },
  login:(ajaxUserInfo, callback=()=>{})=>{
    if(ajaxUserInfo.hasOwnProperty('user_info') && ajaxUserInfo.user_info.hasOwnProperty('name') && ajaxUserInfo.user_info.name != globalConf.defaultUserInfo.name){
      console.log('global login ');
      globalConf.userInfo.login = true;
      globalConf.userInfo.name = ajaxUserInfo.user_info.name;
      globalConf.userInfo.team_name = ajaxUserInfo.user_info.team_name;
      globalConf.userInfo.is_captain = ajaxUserInfo.user_info.is_captain;
      globalConf.userInfo.invite_code = ajaxUserInfo.user_info.invite_code;
      globalConf.userInfo.competition_id = ajaxUserInfo.user_info.competition_id;

      globalConf.userInfo.work_id = ajaxUserInfo.user_info.work_id;
      globalConf.userInfo.work_place_top = ajaxUserInfo.user_info.work_place_top;
      globalConf.userInfo.work_place_second = ajaxUserInfo.user_info.work_place_second;
      globalConf.userInfo.work_place_third = ajaxUserInfo.user_info.work_place_third;
      globalConf.userInfo.phone_number = ajaxUserInfo.user_info.phone_number;
      globalConf.userInfo.ID_card = ajaxUserInfo.user_info.ID_card;
      globalConf.userInfo.email = ajaxUserInfo.user_info.email;
      globalConf.userInfo.country = ajaxUserInfo.user_info.country;

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
  mockUrl:'https://www.easy-mock.com/mock/5cf3950fab668e50becaa078/example/',
  baseUrl:'http://rscup.bjxintong.com.cn:8000/',
  // baseUrl:'http://114.115.182.9:8000/',
  // baseUrl:'http://119.3.202.35:8000/',
  baseUrlFront:'http://rscup.bjxintong.com.cn/',
  uploadTips:'今天还可提交结果次数:',//'提示：每日限制上传【5】次，取最高分作为最终成绩',
  dashboardTips:'公告：排行榜每日上午8:00更新一次',

  getRegistTips:(isLeader)=>{
    if(isLeader){
      return '提示：队长注册成功后，邀请码会发到您的邮箱(请谨慎选择比赛题目，一经确定无法更改！)';
    } else {
      return '提示：请先由队长通过注册获取邀请码，队员通过队长邀请码验证注册！';
    }
  },

  genUrl: (path)=>{
    return globalConf.baseUrl + path;
  },
  genUrlFront: (path)=>{
    return globalConf.baseUrlFront + path;
  },
  genMockUrl: (path)=>{
    return globalConf.mockUrl + path;
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
        resStatus:res.status,
        resMessage:res.message,
        ...res.data
      }
    };
  },
  themeConf : [
    {
      themeId:1,
      condition: '主题一',
      validate: true,
      title: '遥感图像场景分类',
      bannerId: 0,
      bannerTitle: '主题一：',
      bannerTitleSecond: '介绍文字',
      operation: '查看详情',
      url:'/theme/1',
      zipUrl: ()=>{ return  globalConf.genUrlFront('classification.zip')},
      description:
        '遥感图像场景分类旨在对空间信息网络中的遥感图像进行场景级内容解译，对遥感图像中的感兴趣场景及非感兴趣场景进行自动化识别和区分。现有遥感图像场景解译方法往往局限于有限的场景类别和单一数据源，难以满足实际应用需求。通过本项竞赛遴选高效的遥感图像场景解译算法模行，对空间信息网络中遥感图像复杂场景信息进行高效挖掘，提高空间信息网络建设中遥感图像快速信息提取能力。',
      descriptionRule:'遥感图像场景分类旨在对空间信息网络中的遥感图像进行场景级内容解译，对遥感图像中的感兴趣场景及非感兴趣场景进行自动化的识别和区分。现有遥感图像场景解译方法往往局限于有限的场景类别和单一数据源，难以满足实际应用需求。通过本项竞赛遴选高效的遥感图像场景解译算法模行，对空间信息网络中遥感图像复杂场景信息进行高效挖掘，提高空间信息网络建设中遥感图像快速信息提取能力。',
    },
    {
      themeId:2,
      condition: '主题二',
      validate: true,
      title: '遥感图像目标检测',

      bannerId: 1,
      bannerTitle: '主题二：',
      bannerTitleSecond: '介绍文字',

      operation: '查看详情',
      url:'/theme/2',
      zipUrl:  ()=>{ return  globalConf.genUrlFront('detection.zip')},
      description:
        '通过遥感图像目标检测，可以快速获取大范围区域内的目标分布信息，对于资源勘探、环境监测、信息侦察等都具有重要的意义。针对空间信息网络多维、多尺度空间信息链路传输与处理瓶颈，通过本项竞赛遴选优秀的遥感图像目标自动检测识别算法模型，提取遥感图像中感兴趣的目标对象信息，并将目标检测识别结果经链路传回，提高空间信息网络链路传输效率与实时分析应用能力。',
      descriptionRule:'通过遥感图像目标检测，可以快速获取大范围区域内的目标分布信息，对于资源勘探、环境监测、信息侦察等都具有重要的意义。针对空间信息网络多维、多尺度空间信息链路传输与处理瓶颈，通过本项竞赛遴选优秀的遥感图像目标自动检测识别算法模型，提取遥感图像中感兴趣的目标对象信息，并将目标检测识别结果经链路传回，提高空间信息网络链路传输效率与实时分析应用能力。',
    },
    {
      themeId:3,
      condition: '主题三',
      validate: false,
      title: '遥感图像语义分割',

      bannerId: 2,
      bannerTitle: '主题三：',
      bannerTitleSecond: '介绍文字',

      operation: '查看详情',
      url:'/theme/3',
      zipUrl: ()=>{ return  globalConf.genUrlFront('segmentation.zip')},
      description:
        '通过对遥感图像的语义分割，可方便快捷地获取土地利用/覆' +
        '盖信息，并作为精准农业、城市规划、环境保护、土地资源管理等应用' +
        '的数据支撑。目前针对遥感图像像素级分类的前沿算法已能达到很高的' +
        '精度，而现有研究工作都局限于较小的地面区域和较为单一的遥感数' +
        '据，造成这些算法的适应能力极为有限。通过本项' +
        '竞赛遴选出利用遥感数据向地学知识进行高效转化的算法模型，获取泛' +
        '化能力强大的遥感图像语义分割算法，进而对多源数据、广域区域进行快速' +
        '准确的土地利用/覆盖信息提取，提升空间信息网络建设中遥感图像' +
        '解译的自动化程度和实际应用能力。',

      descriptionRule:'通过对遥感图像的语义分割，可方便快捷地获取土地利用/覆盖信息，并作为精准农业、城市规划、环境保护、土地资源管理等应用的数据支撑。目前针对遥感图像像素级分类的前沿算法已能达到很高的精度，而现有研究工作都局限于较小的地面区域和较为单一的遥感数据，造成这些算法的适应能力极为有限。通过本项竞赛遴选出利用遥感数据向地学知识进行高效转化的算法模型，获取泛化能力强大的遥感图像语义分割算法，进而对多源数据、广域区域进行快速准确的土地利用/覆盖信息提取，提升空间信息网络建设中遥感图像解译的自动化程度和实际应用能力。',
    },
    {
      themeId:4,
      condition: '主题四',
      validate: false,
      title: '遥感图像变化检测',

      bannerId: 3,
      bannerTitle: '主题四：',
      bannerTitleSecond: '介绍文字',

      operation: '查看详情',
      url:'/theme/4',
      zipUrl: ()=>{ return  globalConf.genUrlFront('change.zip')},
      description:
        '遥感图像变化检测可以对同一地点的不同时相数据进行变化检测处理，在资源和环境监测、地理国情监测、自然灾害评估等领域具有高度的实用价值。目前遥感图像变化检测的前沿算法在数据层面以及算法设计层面均具有一定局限性。针对遥感图像变化检测在实际应用中的不足，通过本项竞赛遴选出泛化性能强大的高效变化检测算法，可以提高空间信息网络建设中的遥感图像自动化解译能力。',
      descriptionRule:'遥感图像变化检测可以对同一地点的不同时相数据进行变化检测处理，在资源和环境监测、地理国情监测、自然灾害评估等领域具有高度的实用价值。目前遥感图像变化检测的前沿算法在数据层面以及算法设计层面均具有一定局限性。针对遥感图像变化检测在实际应用中的不足，通过本项竞赛遴选出泛化性能强大的高效变化检测算法，可以提高空间信息网络建设中的遥感图像自动化解译能力。',
    },
    {
      themeId:5,
      condition: '主题五',
      validate: false,
      title: '遥感视频目标跟踪',
      bannerId: 4,
      bannerTitle: '主题五：',
      bannerTitleSecond: '介绍文字',

      operation: '查看详情',
      url:'/theme/5',
      zipUrl: ()=>{ return  globalConf.genUrlFront('tracking.zip')},
      description:
        '利用光学遥感卫星视频可以实现指定目标监控，' +
        '在机场、商场、道路流量监测等方面具有重要的应用价值，' +
        '但卫星视频数据存在目标尺寸相对较小、背景抖动、目标大范围旋转等问题，' +
        '卫星视频目标的自动化跟踪是现实应用的难点。针对空间信息网络多维、' +
        '多尺度空间信息链路传输与处理瓶颈，' +
        '通过本项竞赛遴选优秀的光学遥感卫星视频目标自动跟踪算法模型，' +
        '实现空间信息网络对地物目标的在线实时跟踪，' +
        '同时将跟踪结果经链路直接传回，提高空间信息网络在轨实时处理能力和链路传输效率。',
      descriptionRule:'利用光学遥感卫星视频可以实现指定目标监控，在机场、商场、道路流量监测等方面具有重要的应用价值，但卫星视频数据存在目标尺寸相对较小、背景抖动、目标大范围旋转等问题，卫星视频目标的自动化跟踪是现实应用的难点。针对空间信息网络多维、多尺度空间信息链路传输与处理瓶颈，通过本项竞赛遴选优秀的光学遥感卫星视频目标自动跟踪算法模型，实现空间信息网络对地物目标的在线实时跟踪，同时将跟踪结果经链路直接传回，提高空间信息网络在轨实时处理能力和链路传输效率。',
    },
  ],
};

export default globalConf;
