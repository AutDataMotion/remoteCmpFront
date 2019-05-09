// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const asideMenuConfig = [
  {
    name: '网站首页',
    path: '/home',

  },
  {
    name: '比赛细则',
    path: '/rule',

  },
  {
    name: '组织机构',
    path: '/org',

  },
  {
    name: '竞赛主题',
    path: '/theme/group',
    icon: 'home2',
    children: [
      {
      name: '主题一：遥感图像场景分类',
      path: '/theme/1',
      icon: 'cascades',
      },
      {
        name: '主题二：光学遥感图像目标检测',
        path: '/theme/2',
        icon: 'cascades',
      },
      {
        name: '主题三：遥感图像语义分割',
        path: '/theme/3',
        icon: 'cascades',
      },
      {
        name: '主题四：遥感图像变化检测',
        path: '/theme/4',
        icon: 'cascades',
      },
      {
        name: '主题五：遥感卫星视频目标自动跟踪',
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
    name: '比赛论坛',
    path: 'http://sin.xintongconference.com',
    external:true,
    newWindow:true,
  },
  {
    name: '往届风采',
    path: 'http://sin.xintongconference.com',
    external:true,
    newWindow:true,
  },
  {
    name: '关于我们',
    path: '/about',
  },
];

const headerMenuConfig = asideMenuConfig;

export default headerMenuConfig;
