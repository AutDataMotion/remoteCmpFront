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
    name: '比赛细则',
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
    path: 'history/group',
    children: [
      {
        name:'2017-“眼神杯”遥感影像大赛',
        path: 'http://www.cww.net.cn/article?id=412929',
        external:true,
        newWindow:true,
      },
      {
        name:'2018-“眼神杯”遥感影像大赛',
        path: 'http://www.prnews.cn/press_release/369017.htm',
        external:true,
        newWindow:true,
      },
    ]
  },
  {
    name: '关于我们',
    path: '/about',
  },
];

const headerMenuConfig = asideMenuConfig;

export default headerMenuConfig;
