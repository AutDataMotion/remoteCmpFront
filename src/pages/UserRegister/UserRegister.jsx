/* eslint react/no-string-refs:0 */
import './selectCustom.css'
import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {Select, Tag, Form, Switch, Grid, Icon, Balloon, Input, Button, Message} from '@alifd/next';

const {Group: TagGroup, Selectable: SelectableTag} = Tag;
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import IceIcon from '@icedesign/foundation-symbol';
import {pca} from 'area-data'; // v3 or higher
import 'react-area-linkage/dist/index.css'; // v2 or higher
import { AreaSelect, AreaCascader } from 'react-area-linkage';

import globalConf from "../../globalConfig";
import DataBinder from "@icedesign/data-binder";

const {Row, Col} = Grid;

const formItemLayout = {
  labelCol: {fixedSpan: 4},
};

const userTypeEnum = [{key: 'member', value: '队员'}, {key: 'leader', value: '队长'}];

const countryEnum = [
  {
    value: '中国',
    label: '中国',
  },
  {
    value: '其他国家',
    label: '其他国家',
  },
];

const orgEnum = [
  {
    value: 1,
    label: '高校',
    org1Label:'学校名称',
    org2Label:'院系名称',
    org3Label:'专业名称',
  },
  {
    value: 2,
    label: '科研院所',
    org1Label:'单位名称',
    org2Label:'科室名称',
    org3Label:'研究方向',
  },
  {
    value: 3,
    label: '企业',
    org1Label:'公司名称',
    org2Label:'部门名称',
    org3Label:'研究方向',
  },
  {
    value: 4,
    label: '其他',
    org1Label:'单位名称',
    org2Label:'部门名称',
    org3Label:'研究方向',
  },
];
const themeEnum = [
  {
    value: 1,
    label: globalConf.themeConf[0].title,
  },
  {
    value: 2,
    label: globalConf.themeConf[1].title,
  },
  {
    value: 3,
    label: globalConf.themeConf[2].title,
  },
  {
    value: 4,
    label: globalConf.themeConf[3].title,
  },
  {
    value: 5,
    label: globalConf.themeConf[4].title,
  },
];

const defInviteCodeRes={
  result:false,
  competition_id: 1,
  team_id:0,
  team_name:'队伍名称自动获得',
};

@DataBinder({
  ajaxRegist: {
    url: globalConf.genUrl('user/register'),
    method: 'POST',
    data: {},
    success: (res, defaultCallBack, orgResponse) => {
      console.log("success res", res, "orgResponse", orgResponse);
    },
    error: (res, defaultCallBack, orgResponse) => {
      defaultCallBack();
    },
    ...globalConf.headerCOR,
  },
  ajaxInviteCode: {
    url: globalConf.genUrl('invitecode'),
    method: 'get',
    param: {invite_code: ''},
    defaultBindingData: {
      ...defInviteCodeRes
    },
    responseFormatter: (rspHandler, res, orgRsp) => {
      res = globalConf.formatResponseComm(res);
      rspHandler(res, orgRsp);
    },

    success: (res, defaultCallBack, orgResponse) => {
      console.log("success res", res, "orgResponse", orgResponse);
    },
    error: (res, defaultCallBack, orgResponse) => {
      defaultCallBack();
    },
  }
})

@withRouter
class UserRegister extends Component {
  static displayName = 'UserRegister';

  static propTypes = {};

  static defaultProps = {};

  static isChina = countryEnum[0].value;
  static defaultOrgSelect = orgEnum[0];

  constructor(props) {
    super(props);
    this.state = {
      isLeader: false,
      userTypeId: 0,
      theme: '', // 赛题
      inviteCode : '',
      value: {
        "name": "",
        "password": "",
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
        "is_captain": 0,
        // "teamId": 0,
        "competition_id": 1,
        team_name: '', // 队伍名称
        invite_code: '', // 邀请码
      }
    };
  }

  checkPasswd = (rule, values, callback) => {
    if (!values) {
      callback('请输入正确的密码');
    } else if (values.length < 8) {
      callback('密码必须大于8位');
    } else if (values.length > 16) {
      callback('密码必须小于16位');
    } else {
      callback();
    }
  };

  checkPasswd2 = (rule, values, callback, stateValues) => {
    if (!values) {
      callback('请输入正确的密码');
    } else if (values && values !== stateValues.password) {
      callback('两次输入密码不一致');
    } else {
      callback();
    }
  };
  static regPhone = /^[1][3,4,5,7,8][0-9]{9}$/;
  static regIDNumber = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X|x)$/;
  checkIDNumber = (rule, values, callback) => {
    if (!values || !UserRegister.regIDNumber.test(values)) {
      callback('请输入正确的身份证号码');
    } else {
      callback();
    }
  };

  checkPhone = (rule, values, callback) => {
    if (!values || !UserRegister.regPhone.test(values)) {
      callback('请输入正确的手机号码');
    } else {
      callback();
    }
  };

  formChange = (value) => {
    this.setState({
      value
    });
  };

  handleSubmit = () => {
    this.refs.form.validateAll((errors, values) => {
      if (errors) {
        console.log('errors', errors);
        return;
      }
      const {value, userTypeId} = this.state;
      console.log('submit value',values, "state value", value, "userTypeId", userTypeId);
      value.is_captain = userTypeId;

      if (value.provinceCity instanceof Array){
        switch (value.provinceCity[0]) {
          case '北京市':
          case '天津市':
          case '上海市':
          case '重庆市':
          case '台湾省':
          case '香港特别行政区':
          case '澳门特别行政区':
            value.provinceCity[1] = value.provinceCity[0];
        }
      }
      this.props.updateBindingData('ajaxRegist', {
        data: {
          ...value
        }
      },(rsp)=>{
        console.log("login rsp", rsp);
        if (rsp && rsp.status === 1) {
          Message.success('注册成功');
          this.props.history.push('/user/login');
        } else {
          Message.warning(rsp.message);
        }
      });

    });
  };

  onInviteCode = () => {
    // 发送邀请码
    const{value}=this.state;
    let inviteCode = value.invite_code;
    if (!inviteCode || inviteCode.length != 4) {
      Message.warning('邀请码不正确');
      return ;
    }
    this.props.updateBindingData('ajaxInviteCode',{
      params:{invite_code:inviteCode}
    },(rsp)=>{
      console.log("inviteCode rsp", rsp);
      if (rsp && rsp.data && rsp.data.result ==='true') {
        Message.success("验证成功");
      } else {
        Message.warning("邀请码不正确");
      }
    });
    this.setState({
      isLoading:false,
    });
  };

  handleUserTypeChange=(index)=> {
    let isLead = false;
    const {value} = this.state;

    if (index === 1) {
      isLead = true;
      value.team_name = "";
      value.competition_id = 1;
    }

    this.setState({
      isLeader: isLead,
      userTypeId: index,
    });
    console.log("userTypeId", index);
  }


  onCountryChange=(selValue)=> {
    console.log('onCountryChange', selValue);
    UserRegister.isChina = selValue;
    this.setState({
      country:selValue,
    })
  }

  onProvinceChange=(selValue)=> {
    console.log('onProvinceChange', selValue);
    // 根据省份 设置 城市

  }

  onSelectOrg(selValue) {
    console.log('onSelectOrg', selValue);
    UserRegister.defaultOrgSelect = orgEnum[selValue-1];

  }

  renderOtherCountry = ()=>{
    return (
      <Col>
        <div style={styles.formItem}>
          <IceFormBinder name="provinceCity" required message="国家名称">
            <Input
              size="large"
              placeholder="请输入国家名称"
              style={styles.inputCol}
            />
          </IceFormBinder>
          <IceFormError name="provinceCity"/>
        </div>
      </Col>
    );
  };
  renderProvince= ()=>{
    return(
      <Col>
        <div style={styles.formItem}>
          <IceFormBinder name="provinceCity" required message="省份">
            <AreaSelect type={'text'} onChange={this.onProvinceChange} data={pca} defaultValue='北京' placeholder="省份"/>
          </IceFormBinder>
          <IceFormError name="provinceCity"/>
        </div>
      </Col>
    );
  };

  renderTagList(props) {
    const {userTypeId} = this.state;

    return userTypeEnum.map((userItem, i) => (
      <SelectableTag key={userItem.key}
                     checked={i === userTypeId}
                     size={'medium'}
                     onChange={this.handleUserTypeChange.bind(this, i)}
                     {...props}>{userItem.value}</SelectableTag>
    ));
  }

  render() {
    const {isLeader,value} = this.state;
    // competition_id, team_name
    const {ajaxInviteCode}  = this.props.bindingData;
    console.log('render value', value, "ajaxInviteCode", ajaxInviteCode);

    let divInviteCode = isLeader? null : (
      <Col l={12}>
        <div style={styles.formItem}>
          <IceFormBinder name="invite_code" max={4}  message="请输入正确的邀请码">
            <Input
              size="large"
              placeholder="邀请码"
              maxLength={4}
              style={styles.inputCol}
              style={{width:'40%'}}
            />
          </IceFormBinder>
          <Button
            type="primary"
            size="large"
            onClick={this.onInviteCode}
            style={styles.inviteBtn}
          >
            验证邀请码
          </Button>
          <IceFormError name="invite_code"/>
        </div>

      </Col>
    );

    let teamNameInputPop = {};
    let themeSelectPop = {};
    if (isLeader){
      teamNameInputPop = {readOnly:false};
      themeSelectPop = {readOnly:false};
    } else {
      value.team_name = ajaxInviteCode.team_name;
      value.competition_id = ajaxInviteCode.competition_id;
      teamNameInputPop = {readOnly:true};
      themeSelectPop = {readOnly:true};
    };
    let divCountry = UserRegister.isChina === countryEnum[0].value ? this.renderProvince() : this.renderOtherCountry();
    return (
      <div style={styles.container}>
        <h4 style={styles.title}>注 册</h4>
        <IceFormBinderWrapper
          value={this.state.value}
          onChange={this.formChange}
          ref="form"
        >
          <Row gutter="24">
            <Col l={12}>
              <div className="tag-list">
                <label style={styles.userTypeLabel}>我是:</label>
                <TagGroup style={styles.userTypeSel}>{this.renderTagList({type: 'normal'})}</TagGroup>
              </div>
            </Col>
            {divInviteCode}
          </Row>

          <Row gutter="24">
            <Col l={12}>
              <div style={styles.formItem}>
                <IceFormBinder name="name" required max={10} message="请输入正确的姓名">
                  <Input
                    size="large"
                    placeholder="姓名"
                    trim = {true }
                    maxLength={10}
                    style={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="name"/>
              </div>
            </Col>

            <Col l={12}>
              <div style={styles.formItem}>
                <IceFormBinder name="ID_card"
                               required
                               message="请输入正确的身份证号码"
                               min={18}
                               max={18}
                               validator={this.checkIDNumber}
                >
                  <Input
                    size="large"
                    placeholder="身份证号码"
                    trim = {true }
                    maxLength={18}
                    style={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="ID_card"/>
              </div>
            </Col>
          </Row>

          <Row gutter="24">
            <Col>
              <div style={styles.formItem}>
                <IceIcon type="lock" size="small" style={styles.inputIcon}/>
                <IceFormBinder
                  name="password"
                  required
                  min={8}
                  max={16}
                  validator={this.checkPasswd}
                >
                  <Input
                    htmlType="password"
                    size="large"
                    placeholder="至少8位密码"
                    maxLength={16}
                    style={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="password"/>
              </div>
            </Col>
            <Col>
              <div style={styles.formItem}>
                <IceIcon type="lock" size="small" style={styles.inputIcon}/>
                <IceFormBinder
                  name="rePasswd"
                  required
                  validator={(rule, values, callback) =>
                    this.checkPasswd2(rule, values, callback, this.state.value)
                  }
                >
                  <Input
                    htmlType="password"
                    size="large"
                    placeholder="确认密码"
                    style={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="rePasswd"/>
              </div>
            </Col>

          </Row>

          <Row gutter="24">
            <Col>
              <div style={styles.formItem}>
                <IceFormBinder name="phone_number"
                               required
                               message="请输入正确的手机号"
                               max={11}
                               validator={this.checkPhone}
                >
                  <Input
                    size="large"
                    placeholder="手机号"
                    maxLength={11}
                    trim = {true }
                    style={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="phone_number"/>
              </div>
            </Col>
            <Col>
              <div style={styles.formItem}>
                <IceFormBinder type="email" name="email" required message="请输入正确的邮箱">
                  <Input
                    size="large"
                    maxLength={64}
                    placeholder="邮箱"
                    trim = {true }
                    style={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="email"/>
              </div>
            </Col>
          </Row>

          <Row gutter="24">
            <Col>
              <div style={styles.formItem}>
                <IceFormBinder name="team_name"
                               max={32}
                               required message="队伍名称">
                  <Input
                    size="large"
                    placeholder="队伍名称(中英文或数字)"
                    trim = {true }
                    maxLength={32}
                    style={styles.inputCol}
                    {...teamNameInputPop}
                  />
                </IceFormBinder>
                <IceFormError name="team_name"/>
              </div>
            </Col>

            <Col>
              <div style={styles.formItem}>
                <IceFormBinder name="competition_id" required message="赛题">
                  <Select dataSource={themeEnum} placeholder="选择赛题" style={{width: '100%', height: 40}} {...themeSelectPop}/>
                </IceFormBinder>
                <IceFormError name="competition_id"/>
              </div>
            </Col>
          </Row>

          <Row gutter="24">
            <Col l={'8'}>
              <div style={styles.formItem}>
                <IceFormBinder name="country" required message="国家">
                  <Select dataSource={countryEnum} onChange={this.onCountryChange} defaultValue={{...countryEnum[0]}}
                          placeholder="我来自" style={styles.selectStatus} style={{width:'100%'}}/>
                </IceFormBinder>
                <IceFormError name="country"/>
              </div>
            </Col>
            {divCountry}
          </Row>
          <Row gutter="24">
            <Col>
              <div style={styles.formItem}>
                <IceFormBinder name="work_id" required message="单位类型">
                  <Select dataSource={orgEnum} onChange={this.onSelectOrg} placeholder="单位类型" style={styles.selectStatus} style={{width:'100%'}}/>
                </IceFormBinder>
                <IceFormError name="work_id"/>
              </div>
            </Col>
            <Col>
              <div style={styles.formItem}>
                <IceFormBinder name="work_place_top" required message={UserRegister.defaultOrgSelect.org1Label}>
                  <Input
                    size="large"
                    trim = {true }
                    placeholder={UserRegister.defaultOrgSelect.org1Label}
                    style={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="work_place_top"/>
              </div>
            </Col>
            <Col>
              <div style={styles.formItem}>
                <IceFormBinder name="work_place_second" required message={UserRegister.defaultOrgSelect.org2Label}>
                  <Input
                    size="large"
                    trim = {true }
                    placeholder={UserRegister.defaultOrgSelect.org2Label}
                    style={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="work_place_second"/>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div style={styles.formItem}>
                <IceFormBinder name="work_place_third" required message={UserRegister.defaultOrgSelect.org3Label}>
                  <Input
                    size="large"
                    trim = {true }
                    placeholder={UserRegister.defaultOrgSelect.org3Label}
                    style={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="work_place_third"/>
              </div>
            </Col>
          </Row>

          <Row gutter="24">
            <Col l={6}>
              <Button
                type="primary"
                onClick={this.handleSubmit}
                style={styles.submitBtn}
                size="large"
              >
                注 册
              </Button>
              <Link to="/user/login" style={styles.tips}>
                使用已有账户登录
              </Link>
            </Col>
            <Col>
              <p style={{color:'red'}}>
                {globalConf.getRegistTips(isLeader)}
              </p>
            </Col>
          </Row>
        </IceFormBinderWrapper>
      </div>
    );
  };


}

const styles = {
  selectStatus: {
    width: '30%',
    height: '40',
  },
  container: {
    width: '800px',
    padding: '30px',
    background: '#fff',
    borderRadius: '6px',
  },
  title: {
    margin: '0 0 20px',
    color: 'rgba(0, 0, 0, 0.8)',
    fontSize: '28px',
    fontWeight: '500',
    textAlign: 'center',
  },
  formItem: {
    position: 'relative',
    marginBottom: '20px',
  },
  inputIcon: {
    position: 'absolute',
    left: '12px',
    top: '12px',
    color: '#666',
  },
  inputCol: {
    width: '100%',
    paddingLeft: '20px',
  },
  submitBtn: {
    width: '100%',
  },

  inviteBtn: {
    width: '45%',
    marginLeft:'24px'
  },

  tips: {
    marginTop: '20px',
    display: 'block',
    textAlign: 'center',
  },

  userTypeSel: {
    float: 'left',
  },

  userTypeLabel: {
    float: 'left',
    height: '30px',
    marginRight: '10px',
    fontSize: '19px',
    padding: '3px 0 0 0',
  },
};

export default UserRegister;
