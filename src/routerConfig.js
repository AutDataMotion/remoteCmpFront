// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import ModelManagement from './pages/ModelManagement';
import ModelMarket from './pages/ModelMarket';
import ModelPerformance from './pages/ModelPerformance';
import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import Setting from './pages/Setting';
import DemoShow from './pages/DemoShow';
import Home from './pages/Home';
import ThemeHome from "./pages/ThemeHome";
import Theme2 from "./pages/Theme2";
import Theme3 from "./pages/Theme3";
import Theme4 from "./pages/Theme4";
import Theme5 from "./pages/Theme5";
import Theme6 from "./pages/Theme6";
import Dashboard from "./pages/Dashboard";
import Rule from "./pages/Rule";
import Org from "./pages/Org";
import AboutUs from "./pages/AboutUs";

const routerConfig = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/rule',
    component: Rule,
  },
  {
    path: '/org',
    component: Org,
  },
  {
    path: '/about',
    component: AboutUs,
  },

  {
    path: '/theme/1',
    component: ThemeHome,
  },
  {
    path: '/theme/2',
    component: Theme2,
  },
  {
    path: '/theme/3',
    component: Theme3,
  },
  {
    path: '/theme/4',
    component: Theme4,
  },
  {
    path: '/theme/5',
    component: Theme5,
  },
  {
    path: '/theme/6',
    component: Theme6,
  },
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/market',
    component: ModelMarket,
  },
  {
    path: '/performance',
    component: ModelPerformance,
  },
  {
    path: '/demo',
    component: DemoShow,
  },
  {
    path: '/user/login',
    component: UserLogin,
  },
  {
    path: '/user/register',
    component: UserRegister,
  },
  {
    path: '/setting',
    component: Setting,
  },
];

export default routerConfig;
