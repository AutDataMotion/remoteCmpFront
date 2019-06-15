// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

import globalConf from "./globalConfig";

const asideMenuConfig = [
  {
    name: '网站首页',
    path: '/home',

  },
  {
    name: '机构设置',
    path: '/org',

  },
  {
    name: '竞赛细则',
    path: '/rule',

  },

  {
    name: '竞赛主题',
    path: '/theme/group',
    icon: 'home2',
    children: [
      {
      name:globalConf.themeConf[0].bannerTitle+globalConf.themeConf[0].title,
      path: '/theme/1',
      icon: 'cascades',
      },
      {
        name:globalConf.themeConf[1].bannerTitle+globalConf.themeConf[1].title,
        path: '/theme/2',
        icon: 'cascades',
      },
      {
        name:globalConf.themeConf[2].bannerTitle+globalConf.themeConf[2].title,
        path: '/theme/3',
        icon: 'cascades',
      },
      {
        name:globalConf.themeConf[3].bannerTitle+globalConf.themeConf[3].title,
        path: '/theme/4',
        icon: 'cascades',
      },
      {
        name:globalConf.themeConf[4].bannerTitle+globalConf.themeConf[4].title,
        path: '/theme/5',
        icon: 'cascades',
      },
      {
        name:'决赛加分赛：基于华为昇腾AI处理器的遥感图像解译',
        path: '/theme/6',
        icon: 'cascades',
      },
    ],
  },

  // {
  //   name: '模型管理',
  //   path: '/management',
  //   icon: 'cascades',
  // },
  // {
  //   name: '模型市场',
  //   path: '/market',
  //   icon: 'cascades',
  // },
  // {
  //   name: '性能监控',
  //   path: '/performance',
  //   icon: 'repair',
  // },
  // {
  //   name: '示例',
  //   path: '/demo',
  //   icon: 'home2',
  // },
  {
    name: '团队分布',
    path: '/dashboard',
    // icon: 'cascades',
    newWindow: true,
  },
  {
    name: '竞赛论坛',
    path: 'http://sin.xintongconference.com',
    external:true,
    newWindow:true,
  },
  {
    name: '往届风采',
    children: [
      {
        name:'第一届“眼神杯”竞赛',
        path: '/history/1',

      },
      {
        name:'第二届“眼神杯”竞赛',
        path: '/history/2',

      },
    ]
  },
  {
    name: '竞赛通知',
    path: '/notify',
  },
  {
    name: '关于我们',
    path: '/about',
  },
];

const headerMenuConfig = asideMenuConfig;

export default headerMenuConfig;
