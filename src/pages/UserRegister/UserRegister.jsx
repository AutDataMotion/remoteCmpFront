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
import globalConf from "../../globalConfig";

const {Row, Col} = Grid;

const formItemLayout = {
  labelCol: {fixedSpan: 4},
};

const userTypeEnum = [{key: 'member', value: '队员'}, {key: 'leader', value: '队长'}];

const countryEnum = [
  {
    value: 1,
    label: '中国',
  },
  {
    value: 2,
    label: '其他国家',
  },
];

const statusEnum = [
  {
    value: 1,
    label: '高校',
  },
  {
    value: 2,
    label: '科研院所',
  },
  {
    value: 3,
    label: '企业',
  },
  {
    value: 4,
    label: '其他',
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

  constructor(props) {
    super(props);
    this.state = {
      isLeader: false,
      isChina: true,
      value: {
        userTypeId: 0,  // 用户类别
        realName: '', // 姓名
        idNum: '', // 身份证
        userName: '', // 昵称
        passwd: '', // 密码
        rePasswd: '', // 确认密码
        phone: '', // 手机号
        email: '', // 邮箱

        inviteCode: '', // 邀请码
        theme: '', // 赛题
        teamName: '', // 队伍名称

        identity: '', // 身份
        organ1: '', // 单位1
        organ2: '', // 单位2
        organ3: '', // 单位3

        address1: '', // 国家
        address2: '', // 省
        address3: '', // 市

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
      value,
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
      value: {userTypeId: index}
    });
    const {value} = this.state;

    console.log("handleUserTypeChange value", value);
  }


  onCountryChange(value) {
    let isChina = true;
    console.log('onCountryChange', value);
    if (value === 2) {
      isChina = false;
      console.log("onCountryChange china false")
    }
    this.setState({
      isChina: isChina,
    })
  }

  onProvinceChange(value) {
    console.log('onProvinceChange', value);
    // 根据省份 设置 城市
  }

  renderOtherCountry = ()=>{
    const {isChina} = this.state;
    console.log('renderOtherCountry', isChina);
    if (isChina===false){
      return null;
    }
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
    const {isChina} = this.state;
    console.log('renderProvince', isChina);
    if (isChina === false){
      console.log("not china province");
      return null;
    }
    return(
      <Col>
        <div style={styles.formItem}>
          <IceFormBinder name="selectProvince" required message="省份">
            <Select dataSource={countryEnum} onChange={this.onProvinceChange} defaultValue='北京' placeholder="省份"
                    style={styles.selectStatus} showSearch hasClear  style={{width: '100%', height: 40}}/>
          </IceFormBinder>
          <IceFormError name="selectProvince"/>
        </div>
      </Col>
    );
  };
  renderCity= ()=>{
    const {isChina} = this.state;
    console.log('renderCity', isChina);
    if (isChina === false){
      console.log("not china city");
      return null;
    }
    return(
      <Col>
        <div style={styles.formItem}>
          <IceFormBinder name="selectCity" required message="城市">
            <Select dataSource={countryEnum} placeholder="城市" style={styles.selectStatus} showSearch hasClear  style={{width: '100%', height: 40}}/>
          </IceFormBinder>
          <IceFormError name="selectCity"/>
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
            <Col>
              <div style={styles.formItem}>
                <IceFormBinder name="identity" required message="单位类型">
                  <Select dataSource={statusEnum} placeholder="单位类型" style={styles.selectStatus}/>
                </IceFormBinder>
                <IceFormError name="identity"/>
              </div>
            </Col>
          </Row>
          <Row gutter="24">
            <Col>
              <div style={styles.formItem}>
                <IceFormBinder name="selectCountry" required message="国家">
                  <Select dataSource={countryEnum} onChange={this.onCountryChange} defaultValue={countryEnum[0]}
                          placeholder="我来自" style={styles.selectStatus} showSearch hasClear/>
                </IceFormBinder>
                <IceFormError name="selectCountry"/>
              </div>
            </Col>
            {this.renderOtherCountry()}
            {this.renderProvince()}
            {this.renderCity()}
          </Row>
          <Row gutter="24">
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

          <Row gutter="24">
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
                <IceFormBinder name="address2" required message="省份">
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
                  <Select dataSource={statusEnum} placeholder="单位类型" style={styles.selectStatus}/>
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
    const {isLeader} = this.state;
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
