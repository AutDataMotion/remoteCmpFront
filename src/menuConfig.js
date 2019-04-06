// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const asideMenuConfig = [
  {
    name: '首页',
    path: '/home',
    icon: 'home2',
  },
  {
    name: '赛题一',
    path: '/theme/1',
    icon: 'cascades',
  },
  {
    name: '模型管理',
    path: '/management',
    icon: 'cascades',
  },
  {
    name: '模型市场',
    path: '/market',
    icon: 'cascades',
  },
  {
    name: '性能监控',
    path: '/performance',
    icon: 'repair',
  },
  // {
  //   name: '示例',
  //   path: '/demo',
  //   icon: 'home2',
  // },
  {
    name: '反馈',
    path: '',
    icon: 'question2',
    external: true,
    newWindow: true,
  },
];

const headerMenuConfig = asideMenuConfig;

export default headerMenuConfig;
