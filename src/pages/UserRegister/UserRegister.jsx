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

const {Row, Col} = Grid;

const formItemLayout = {
  labelCol: {fixedSpan: 4},
};

const userTypeEnum = [{key: 'member', value: '队员'}, {key: 'leader', value: '队长'}];

const countryEnum = [
  {
    value: 0,
    label: '中国',
  },
  {
    value: 1,
    label: '其他国家',
  },
];

const orgEnum = [
  {
    value: 0,
    label: '高校',
    org1Label:'学校名称',
    org2Label:'专业',
  },
  {
    value: 1,
    label: '科研院所',
    org1Label:'单位名称',
    org2Label:'研究方向',
  },
  {
    value: 2,
    label: '企业',
    org1Label:'公司名称',
    org2Label:'研究方向',
  },
  {
    value: 3,
    label: '其他',
    org1Label:'单位名称',
    org2Label:'研究方向',
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
      value: {
        "name": "xx",
        "password": "123",
        "country": "",
        "province": "",
        "city": "",
        "workId": 0,
        "workPlaceTop": "",
        "workPlaceSecond": "",
        "workPlaceThird": "",
        "phoneNumber": "",
        "IDCard": "",
        "email": "",
        "isCaptain": true,
        "teamId": 77,
        "competitionId": 1,

        inviteCode: '', // 邀请码
        theme: '', // 赛题
        teamName: '', // 队伍名称

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
    } else if (values && values !== stateValues.passwd) {
      callback('两次输入密码不一致');
    } else {
      callback();
    }
  };

  formChange = (value) => {
    this.setState({
      value : value,
    });
  };

  handleSubmit = () => {
    this.refs.form.validateAll((errors, values) => {
      if (errors) {
        console.log('errors', errors);
        return;
      }
      console.log(values);
      Message.success('注册成功');
      this.props.history.push('/user/login');
    });
  };

  onInviteCode = () => {

  };

  onTeamName = () => {

  };

  handleUserTypeChange(index) {
    let isLead = false;
    if (index === 1) {
      isLead = true;
    }
    this.setState({
      isLeader: isLead,
      value: {isCaptain: isLead}
    });
    const {value} = this.state;
    console.log("handleUserTypeChange value", value);
  }


  onCountryChange(value) {
    console.log('onCountryChange', value);
    UserRegister.isChina = value;
    this.setState({
      selectCountry: value,
      value:{
        country:countryEnum[value].label,
      }
    })
  }

  onProvinceChange(value) {
    console.log('onProvinceChange', value);
    // 根据省份 设置 城市
    this.setState({
      value: {
        province: value[0],
        city:value[1],
      }
    });
  }

  onSelectOrg(value) {
    console.log('onSelectOrg', value);
    UserRegister.defaultOrgSelect = orgEnum[value];
    this.setState({
      value: {
        country:UserRegister.defaultOrgSelect.label
      }
    });
  }

  renderOtherCountry = ()=>{
    return (
      <Col>
        <div style={styles.formItem}>
          <IceFormBinder name="countryName" required message="国家名称">
            <Input
              size="large"
              placeholder="请输入国家名称"
              style={styles.inputCol}
            />
          </IceFormBinder>
          <IceFormError name="teamName"/>
        </div>
      </Col>
    );
  };
  renderProvince= ()=>{
    return(
      <Col>
        <div style={styles.formItem}>
          <IceFormBinder name="selectProvince" required message="省份">
            <AreaSelect type={'text'} onChange={this.onProvinceChange} data={pca} defaultValue='北京' placeholder="省份"/>
          </IceFormBinder>
          <IceFormError name="selectProvince"/>
        </div>
      </Col>
    );
  };

  renderTagList(props) {
    const {value} = this.state;

    return userTypeEnum.map((userItem, i) => (
      <SelectableTag key={userItem.key}
                     checked={i === value.userTypeId}
                     size={'medium'}
                     onChange={this.handleUserTypeChange.bind(this, i)}
                     {...props}>{userItem.value}</SelectableTag>
    ));
  }

  renderTeamLeader = () => {
    const {selectCountry} = this.state;
    console.log('render selectCountry', selectCountry);
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
          </Row>

          <Row gutter="24">
            <Col l={12}>
              <div style={styles.formItem}>
                <IceFormBinder name="realName" required message="请输入正确的姓名">
                  <Input
                    size="large"
                    placeholder="姓名"
                    style={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="realName"/>
              </div>
            </Col>

            <Col l={12}>
              <div style={styles.formItem}>
                <IceFormBinder name="idNum" required message="请输入正确的身份证号码">
                  <Input
                    size="large"
                    placeholder="身份证号码"
                    style={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="idNum"/>
              </div>
            </Col>
          </Row>

          <Row gutter="24">
            <Col>
              <div style={styles.formItem}>
                <IceIcon type="lock" size="small" style={styles.inputIcon}/>
                <IceFormBinder
                  name="passwd"
                  required
                  validator={this.checkPasswd}
                >
                  <Input
                    htmlType="password"
                    size="large"
                    placeholder="至少8位密码"
                    style={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="passwd"/>
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
                <IceFormBinder name="phone" required message="请输入正确的手机号">
                  <Input
                    size="large"
                    placeholder="手机号"
                    style={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="phone"/>
              </div>
            </Col>
            <Col>
              <div style={styles.formItem}>
                <IceFormBinder
                  type="email"
                  name="email"
                  required
                  message="请输入正确的邮箱"
                >
                  <Input
                    size="large"
                    maxLength={20}
                    placeholder="邮箱"
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
                <IceFormBinder name="teamName" required message="队伍名称">
                  <Input
                    size="large"
                    placeholder="队伍名称"
                    style={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="teamName"/>
              </div>
            </Col>

            <Col>
              <div style={styles.formItem}>
                <IceFormBinder name="theme" required message="赛题">
                  <Select dataSource={themeEnum} placeholder="选择赛题" style={{width: '100%', height: 40}}/>
                </IceFormBinder>
                <IceFormError name="theme"/>
              </div>
            </Col>
          </Row>

          <Row gutter="24">
            <Col l={'8'}>
              <div style={styles.formItem}>
                <IceFormBinder name="selectCountry" required message="国家">
                  <Select dataSource={countryEnum} onChange={this.onCountryChange}
                          placeholder="我来自" style={styles.selectStatus} style={{width:'100%'}}/>
                </IceFormBinder>
                <IceFormError name="selectCountry"/>
              </div>
            </Col>
            {divCountry}
          </Row>
          <Row gutter="24">
            <Col>
              <div style={styles.formItem}>
                <IceFormBinder name="identity" required message="单位类型">
                  <Select dataSource={orgEnum} onChange={this.onSelectOrg} placeholder="单位类型" style={styles.selectStatus} style={{width:'100%'}}/>
                </IceFormBinder>
                <IceFormError name="identity"/>
              </div>
            </Col>
            <Col>
              <div style={styles.formItem}>
                <IceFormBinder name="organ1" required message={UserRegister.defaultOrgSelect.org1Label}>
                  <Input
                    size="large"
                    placeholder={UserRegister.defaultOrgSelect.org1Label}
                    style={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="organ1"/>
              </div>
            </Col>
            <Col>
              <div style={styles.formItem}>
                <IceFormBinder name="organ2" required message={UserRegister.defaultOrgSelect.org2Label}>
                  <Input
                    size="large"
                    placeholder={UserRegister.defaultOrgSelect.org2Label}
                    style={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="organ2"/>
              </div>
            </Col>
          </Row>

          <Row gutter="24">
            <div className="footer">
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
            </div>
          </Row>
        </IceFormBinderWrapper>
      </div>
    );
  };

  renderTeamMember = () => {

    return (
      <div style={styles.container}>
        <h4 style={styles.title}>注 册</h4>
        <IceFormBinderWrapper
          value={this.state.value}
          onChange={this.formChange}
          ref="form"
        >

          <Row gutter="3">

            <Col>
              <div className="tag-list">
                <label style={styles.userTypeLabel}>我是:</label>
                <TagGroup style={styles.userTypeSel}>{this.renderTagList({type: 'normal'})}</TagGroup>
              </div>
            </Col>
            <Col>
              <div style={styles.formItem}>
                <IceFormBinder name="inviteCode" required message="请输入正确的邀请码">
                  <Input
                    size="large"
                    placeholder="邀请码"
                    style={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="inviteCode"/>
              </div>
            </Col>
            <Col>
              <Button
                type="primary"
                onClick={this.onInviteCode}
                style={styles.submitBtn}
                size="large"
              >
                验证邀请码
              </Button>
            </Col>
          </Row>

          <Row gutter="3">

            <Col>
              <div style={styles.formItem}>
                <IceFormBinder name="realName" required message="请输入正确的姓名">
                  <Input
                    size="large"
                    placeholder="姓名"
                    style={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="realName"/>
              </div>
            </Col>

            <Col>
              <div style={styles.formItem}>

                <IceFormBinder name="idNum" required message="请输入正确的身份证号码">
                  <Input
                    size="large"
                    placeholder="身份证号码"
                    style={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="idNum"/>
              </div>
            </Col>

            <Col>
            </Col>
          </Row>

          <Row>
            <Col>

              <div style={styles.formItem}>
                <IceIcon type="lock" size="small" style={styles.inputIcon}/>
                <IceFormBinder
                  name="passwd"
                  required
                  validator={this.checkPasswd}
                >
                  <Input
                    htmlType="password"
                    size="large"
                    placeholder="至少8位密码"
                    style={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="passwd"/>
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
            <Col>
              <div style={styles.formItem}>
                <IceFormBinder name="phone" required message="请输入正确的手机号">
                  <Input
                    size="large"
                    placeholder="手机号"
                    style={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="phone"/>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div style={styles.formItem}>
                <IceFormBinder
                  type="email"
                  name="email"
                  required
                  message="请输入正确的邮箱"
                >
                  <Input
                    size="large"
                    maxLength={20}
                    placeholder="邮箱"
                    style={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="email"/>
              </div>


            </Col>

            <Col>
              <div style={styles.formItem}>
                <IceFormBinder name="theme" required message="赛题">
                  <Select dataSource={themeEnum} placeholder="选择赛题" style={{width: 236, height: 40}}/>
                </IceFormBinder>
                <IceFormError name="theme"/>
              </div>
            </Col>

            <Col>
              <div style={styles.formItem}>
                <IceFormBinder name="teamName" required message="队伍名称">
                  <Input
                    size="large"
                    placeholder="队伍名称"
                    style={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="teamName"/>
              </div>
            </Col>

          </Row>

          <Row>
            <Col>
              <div style={styles.formItem}>
                <IceFormBinder name="identity" required message="单位类型">
                  <Select dataSource={orgEnum} placeholder="单位类型" style={styles.selectStatus}/>
                </IceFormBinder>
                <IceFormError name="identity"/>
              </div>
            </Col>
          </Row>
          <Row gutter="3">
            <Col>
              <div style={styles.formItem}>
                <IceFormBinder name="organ1" required message="学校">
                  <Input
                    size="large"
                    placeholder="学校"
                    style={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="organ1"/>
              </div>
            </Col>
            <Col>
              <div style={styles.formItem}>
                <IceFormBinder name="organ2" required message="学院">
                  <Input
                    size="large"
                    placeholder="学院"
                    style={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="organ2"/>
              </div>
            </Col>

            <Col>
              <div style={styles.formItem}>
                <IceFormBinder name="organ3" required message="专业(系)">
                  <Input
                    size="large"
                    placeholder="专业/系"
                    style={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="organ3"/>
              </div>
            </Col>

          </Row>

          <Row gutter="3">
            <Col>
              <div style={styles.formItem}>
                <IceFormBinder name="address1" required message="国家">
                  <Input
                    size="large"
                    placeholder="国家"
                    style={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="address1"/>
              </div>
            </Col>
            <Col>
              <div style={styles.formItem}>
                <IceFormBinder name="address2" required message="省">
                  <Input
                    size="large"
                    placeholder="院系"
                    style={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="address2"/>
              </div>
            </Col>
            <Col>
              <div style={styles.formItem}>
                <IceFormBinder name="address3" required message="市">
                  <Input
                    size="large"
                    placeholder="市"
                    style={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="address3"/>
              </div>
            </Col>
          </Row>

          <Row>
            <div className="footer">
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
            </div>
          </Row>
        </IceFormBinderWrapper>
      </div>
    );
  }

  render() {
    const {isLeader, selectCountry} = this.state;
    console.log('render boot isLeander', isLeader, 'selectCountry',selectCountry,"isChina", UserRegister.isChina);
    if (isLeader) {
      return this.renderTeamLeader();
    } else {
      return this.renderTeamMember()
    }
  };


}

const styles = {
  selectStatus: {
    width: '30%',
    height: '40',
  },
  container: {
    width: '800px',
    padding: '40px',
    background: '#fff',
    borderRadius: '6px',
  },
  title: {
    margin: '0 0 40px',
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
