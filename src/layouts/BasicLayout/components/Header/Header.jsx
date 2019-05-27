import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Balloon, Button, Icon, Nav } from '@alifd/next';
import FoundationSymbol from '@icedesign/foundation-symbol';
import IceImg from '@icedesign/img';
import DataBinder from '@icedesign/data-binder';
import PropTypes from 'prop-types';
import headerMenuConfig from '../../../../menuConfig';
import Logo from '../Logo';
import './Header.scss';
import globalConf from "../../../../globalConfig";

const { SubNav: SubMenu, Item: MenuItem } = Nav;

@DataBinder({
  ajaxUserInfo: {
    url: globalConf.genUrl('user/info'),
    method:'get',
    param:{},
    defaultBindingData:{
      user_info: globalConf.userInfo
    },
    responseFormatter:(rspHandler, res, orgRsp)=>{
      res = globalConf.formatResponseComm(res);
      rspHandler(res, orgRsp);
    },
    success:(res, defaultCallBack, orgResponse)=>{
      console.log("ajaxUserInfo success res", res, "orgResponse", orgResponse);
    },
    error:(res, defaultCallBack, orgResponse)=>{
      defaultCallBack();
    },
    ...globalConf.headerCOR,
  },
  ajaxLogout: {
    url: globalConf.genUrl('user/logout'),
    method:'post',
    success:(res, defaultCallBack, orgResponse)=>{
      console.log("ajaxLogout success res", res, "orgResponse", orgResponse);
    },
    error:(res, defaultCallBack, orgResponse)=>{
      defaultCallBack();
    },
    ...globalConf.headerCOR,
  }
})
@withRouter
export default class Header extends Component {
  static propTypes = {
    match:PropTypes.object.isRequired,
    location:PropTypes.object.isRequired,
    history:PropTypes.object.isRequired,
  };

  static defaultProps = {};
  state = {
    userInfo:globalConf.userInfo
  };

  componentDidMount() {
    this.fetchData();
  }


  fetchData = () => {

    this.props.updateBindingData('ajaxUserInfo',{
      params:{}
    },()=>{
    });

    this.setState({
      userInfo:globalConf.userInfo
    });
  };

  onLogOut =()=> {

    this.props.updateBindingData('ajaxLogout',{
      data:{}
    },()=>{
      this.fetchData();
    });

    // 退出系统 设置全局
    globalConf.logout();

  };

  onLogin=()=>{
    const{history} = this.props;
    history.push('/user/login');
  };

  onRegist=()=>{
    const{history} = this.props;
    history.push('/user/register');
  };

  renderLogout= ()=>{
    return (
      <Balloon
      trigger={
        <div
          className="ice-design-header-userpannel"
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 12,
          }}
        >
          <div className="user-profile">
                  <span className="user-name" style={{ fontSize: '13px' }}>
                    {globalConf.userInfo.name}
                  </span>
            <br />
            <span className="user-department">{globalConf.userInfo.team_name}</span>
          </div>
          <Icon
            type="arrow-down-filling"
            size="xxs"
            className="icon-down"
          />
        </div>
      }
      closable={false}
      className="user-profile-menu"
    >
      <ul>
        {/*<li className="user-profile-menu-item">*/}
        {/*<Link to="/setting">*/}
        {/*<FoundationSymbol type="repair" size="small" />*/}
        {/*个人信息*/}
        {/*</Link>*/}
        {/*</li>*/}
        <li className="user-profile-menu-item">
          <Button
            onClick={this.onLogOut}
          >
            <FoundationSymbol type="compass" size="small" />
            退出
          </Button>
        </li>
      </ul>
    </Balloon>
    )
  };

  renderLogin= ()=>{
    return (<div>
      <Button onClick={this.onLogin} type="secondary">登录</Button>
      <Button onClick={this.onRegist} type="secondary">注册</Button>
    </div>)
  };


  render() {
    const { location = {} } = this.props;
    const { pathname } = location;
    const {isLogin} = this.state;

    const {ajaxUserInfo} = this.props.bindingData;
    console.log('user info ajax ', ajaxUserInfo);

    // 获取用户信息 赋值到全局
    globalConf.login(ajaxUserInfo);

    console.log('global userInfo', globalConf.userInfo);

    return (
      <div className="header-container">
        <div className="header-content">
          <div className="header-navbar">
            <Logo isDark />
            <Nav
              className="header-navbar-menu"
              selectedKeys={[pathname]}
              defaultSelectedKeys={[pathname]}
              type="secondary"
              direction="hoz"
            >
              {headerMenuConfig &&
                headerMenuConfig.length > 0 &&
                headerMenuConfig.map((nav, index) => {
                  if (nav.children && nav.children.length > 0) {
                    return (
                      <SubMenu
						className="header-navbar-lyf"
                        triggerType="hover"
                        key={index}
                        label={nav.name}
                        selectable
                      >
                        {nav.children.map((item) => {
                          const linkProps = {};
                          if (item.external) {
                            if (item.newWindow) {
                              linkProps.target = '_blank';
                            }

                            linkProps.href = item.path;
                            return (
                              <MenuItem key={item.path}>
                                <a {...linkProps}>
                                  <span>{item.name}</span>
                                </a>
                              </MenuItem>
                            );
                          }
                          linkProps.to = item.path;
                          return (
                            <MenuItem key={item.path}>
                              <Link {...linkProps}>
                                <span>{item.name}</span>
                              </Link>
                            </MenuItem>
                          );
                        })}
                      </SubMenu>
                    );
                  }
                  const linkProps = {};
                  if (nav.external) {
                    if (nav.newWindow) {
                      linkProps.target = '_blank';
                    }
                    linkProps.href = nav.path;
                    return (
                      <MenuItem 
					  className="header-navbar-lyf"
					  key={nav.path}>
                        <a {...linkProps}>
                          <span>
                            {nav.icon ? (
                              <FoundationSymbol size="small" type={nav.icon} />
                            ) : null}
                            <span>{nav.name}</span>
                          </span>
                        </a>
                      </MenuItem>
                    );
                  }
                  linkProps.to = nav.path;
                  return (
                    <MenuItem 
					className="header-navbar-lyf"
					key={nav.path}>
                      <Link {...linkProps}>
                        <span>
                          {nav.icon ? (
                            <FoundationSymbol size="small" type={nav.icon} />
                          ) : null}
                          <span>{nav.name}</span>
                        </span>
                      </Link>
                    </MenuItem>
                  );
                })}
            </Nav>
          </div>
          {globalConf.userInfo.login==true?this.renderLogout():this.renderLogin()}
        </div>
      </div>
    );
  }

}
