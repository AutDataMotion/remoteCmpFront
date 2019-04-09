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

const {Row, Col} = Grid;

const formItemLayout = {
  labelCol: {fixedSpan: 4},
};

const userTypeEnum = [{key: 'member', value: '队员'}, {key: 'leader', value: '队长'}];

const statusEnum = [
  {
    value: 1,
    label: '学生',
  },
  {
    value: 2,
    label: '工程师',
  },
  {
    value: 3,
    label: '个人',
  },
  ];
const themeEnum = [
    {
      value: 1,
      label: '遥感图像场景分类',
    },
  {
    value: 2,
    label: '高分辨率 SAR 遥感图像建筑物提取',
  },
  {
    value: 3,
    label: '光学遥感图像目标自动检测识别',
  },
  {
    value: 4,
    label: '遥感图像语义分割',
  },
  {
    value: 5,
    label: '任务驱动的遥感图像智能压缩',
  },
  {
    value: 6,
    label: '遥感卫星视频目标自动跟踪',
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

  handleUserTypeChange(index) {
    this.setState({value: {userTypeId: index}});
    const {value} = this.state;

    console.log("handleUserTypeChange value", value);
  }

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

  render() {
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
              <div style={styles.formItem}>
                <IceFormBinder name="userName" required message="请输入正确的昵称">
                  <Input
                    size="large"
                    placeholder="昵称"
                    style={styles.inputCol}
                  />
                </IceFormBinder>
                <IceFormError name="userName"/>
              </div>

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
                  <Select dataSource={themeEnum}  placeholder="选择赛题" style={{width: 236, height: 40}}/>
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
                <IceFormBinder name="identity" required message="身份">
                  <Select dataSource={statusEnum}  placeholder="选择身份" style={styles.selectStatus} />
                </IceFormBinder>
                <IceFormError name="identity"/>
              </div>
            </Col>
          </Row>
          <Row  gutter="3">
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

          <Row  gutter="3">
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
}

const styles = {
  selectStatus:{
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
