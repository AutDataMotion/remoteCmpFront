/* eslint  react/no-string-refs: 0 */
import React, {Component} from 'react';
import IceContainer from '@icedesign/container';
import {Input, Button, Radio, Switch, Upload, Grid, Select} from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import globalConf from "../../../../globalConfig";
import DataBinder from "@icedesign/data-binder";

const {Row, Col} = Grid;
const {Group: RadioGroup} = Radio;

function beforeUpload(info) {
  console.log('beforeUpload callback : ', info);
}

function onChange(info) {
  console.log('onChane callback : ', info);
}

function onSuccess(res, file) {
  console.log('onSuccess callback : ', res, file);
}

function onError(file) {
  console.log('onError callback : ', file);
}

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
    org1Label: '学校名称：',
    org2Label: '院系名称：',
    org3Label: '专业名称：',
  },
  {
    value: 2,
    label: '科研院所',
    org1Label: '单位名称：',
    org2Label: '科室名称：',
    org3Label: '研究方向：',
  },
  {
    value: 3,
    label: '企业',
    org1Label: '公司名称：',
    org2Label: '部门名称：',
    org3Label: '研究方向：',
  },
  {
    value: 4,
    label: '其他',
    org1Label: '单位名称：',
    org2Label: '部门名称：',
    org3Label: '研究方向：',
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
@DataBinder({
  ajaxUserInfo: {
    url: globalConf.genUrl('user/info'),
    method: 'get',
    param: {},
    defaultBindingData: {
      user_info: globalConf.userInfo
    },
    responseFormatter: (rspHandler, res, orgRsp) => {
      res = globalConf.formatResponseComm(res);
      rspHandler(res, orgRsp);
    },
    success: (res, defaultCallBack, orgResponse) => {
      console.log("ajaxUserInfo success res", res, "orgResponse", orgResponse);
    },
    error: (res, defaultCallBack, orgResponse) => {
      defaultCallBack();
    },
    ...globalConf.headerCOR,
  },
})
export default class BaseSetting extends Component {
  static displayName = 'BaseSetting';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        ...globalConf.userInfo
      },
    };
  }
  componentDidMount() {
    this.props.updateBindingData('ajaxUserInfo');
  }

  onDragOver = () => {
    console.log('dragover callback');
  };

  onDrop = (fileList) => {
    console.log('drop callback : ', fileList);
  };

  validateAllFormField = () => {
    this.refs.form.validateAll((errors, values) => {
      console.log('errors', errors, 'values', values);
    });
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


  render() {
    const {ajaxUserInfo} = this.props.bindingData;
    console.log("ajaxUserInfo", ajaxUserInfo.user_info);
    let themeSelectPop = {readOnly: true};
    let organization = orgEnum[0];
    return (
      <IceContainer>
        <IceFormBinderWrapper value={ajaxUserInfo.user_info} ref="form">
          <div style={styles.formContent}>
            <h2 style={styles.formTitle}>个人信息</h2>

            <Row style={styles.formItem}>
              <Col xxs="6" s="3" l="3" style={styles.label}>
                姓名：
              </Col>
              <Col s="12" l="10">
                <IceFormBinder name="name" required max={10} message="必填">
                  <Input
                    readOnly
                    style={styles.inputItem}
                  />
                </IceFormBinder>
                <IceFormError name="name"/>
              </Col>
            </Row>

            <Row style={styles.formItem}>
              <Col xxs="6" s="3" l="3" style={styles.label}>
                身份证：
              </Col>
              <Col s="12" l="10">

                <IceFormBinder name="ID_card"
                               required
                               message="请输入正确的身份证号码"
                               min={18}
                               max={18}
                               validator={this.checkIDNumber}
                >
                  <Input
                    size="large"
                    readOnly
                    placeholder="身份证号码"
                    trim={true}
                    maxLength={18}
                    style={styles.inputItem}
                  />
                </IceFormBinder>
                <IceFormError name="ID_card"/>

              </Col>
            </Row>

            <Row style={styles.formItem}>
              <Col xxs="6" s="3" l="3" style={styles.label}>
                手机号：
              </Col>
              <Col s="12" l="10">
                  <IceFormBinder name="phone_number"
                                 required
                                 message="请输入正确的手机号"
                                 max={11}
                                 validator={this.checkPhone}
                  >
                    <Input
                      size="large"
                      readOnly
                      placeholder="手机号"
                      maxLength={11}
                      trim={true}
                      style={styles.inputItem}
                    />
                  </IceFormBinder>
                  <IceFormError name="phone_number"/>
              </Col>
            </Row>

            <Row style={styles.formItem}>
              <Col xxs="6" s="3" l="3" style={styles.label}>
                邮箱：
              </Col>
              <Col s="12" l="10">
                <IceFormBinder type="email" name="email" required message="请输入正确的邮箱">
                  <Input
                    size="large"
                    readOnly
                    maxLength={64}
                    placeholder="邮箱"
                    trim={true}
                    style={styles.inputItem}
                  />
                </IceFormBinder>
                <IceFormError name="email"/>
              </Col>
            </Row>

            <Row style={styles.formItem}>
              <Col xxs="6" s="3" l="3" style={styles.label}>
                队伍名称 ：
              </Col>
              <Col s="12" l="10">
                <IceFormBinder name="team_name"
                               max={32}
                               required message="队伍名称">
                  <Input
                    size="large"
                    readOnly
                    placeholder="队伍名称(中英文或数字)"
                    trim={true}
                    maxLength={32}
                    style={styles.inputItem}
                  />
                </IceFormBinder>
                <IceFormError name="team_name"/>
              </Col>
            </Row>

            <Row style={styles.formItem}>
              <Col xxs="6" s="3" l="3" style={styles.label}>
                赛题：
              </Col>
              <Col s="12" l="10">
                <IceFormBinder name="competition_id" required message="赛题">
                  <Select
                    readOnly
                    dataSource={themeEnum} placeholder="选择赛题"
                          style={{width: '100%', height: 40}} {...themeSelectPop}/>
                </IceFormBinder>
                <IceFormError name="competition_id"/>
              </Col>
            </Row>

            <Row style={styles.formItem}>
              <Col xxs="6" s="3" l="3" style={styles.label}>
                国家：
              </Col>
              <Col s="12" l="10">
                <IceFormBinder name="country" required message="国家">
                  <Input
                    size="large"
                    readOnly
                    trim={true}
                    maxLength={32}
                    style={styles.inputItem}
                  />
                </IceFormBinder>
                <IceFormError name="country"/>
              </Col>
            </Row>

            <Row style={styles.formItem}>
              <Col xxs="6" s="3" l="3" style={styles.label}>
                单位类型：
              </Col>
              <Col s="12" l="10">
                <IceFormBinder name="work_id" required message="单位类型">
                  <Select
                    readOnly
                    dataSource={orgEnum} onChange={this.onSelectOrg} placeholder="单位类型"
                          style={styles.selectStatus} style={{width: '100%'}}/>
                </IceFormBinder>
                <IceFormError name="work_id"/>
              </Col>
            </Row>

            <Row style={styles.formItem}>
              <Col xxs="6" s="3" l="3" style={styles.label}>
                {organization.org1Label}
              </Col>
              <Col s="12" l="10">
                <IceFormBinder name="work_place_top" required>
                  <Input
                    readOnly
                    size="large"
                    trim={true}
                    style={styles.inputItem}
                  />
                </IceFormBinder>
                <IceFormError name="work_place_top"/>
              </Col>
            </Row>

            <Row style={styles.formItem}>
              <Col xxs="6" s="3" l="3" style={styles.label}>
                {organization.org2Label}
              </Col>
              <Col s="12" l="10">
                <IceFormBinder name="work_place_second" required>
                  <Input
                    readOnly
                    size="large"
                    trim={true}
                    style={styles.inputItem}
                  />
                </IceFormBinder>
                <IceFormError name="work_place_second"/>
              </Col>
            </Row>

            <Row style={styles.formItem}>
              <Col xxs="6" s="3" l="3" style={styles.label}>
                {organization.org3Label}
              </Col>
              <Col s="12" l="10">
                <IceFormBinder name="work_place_third" required>
                  <Input
                    readOnly
                    size="large"
                    trim={true}
                    style={styles.inputItem}
                  />
                </IceFormBinder>
                <IceFormError name="work_place_third"/>
              </Col>
            </Row>
          </div>
        </IceFormBinderWrapper>

        <Row style={{marginTop: 20}}>
          <Col offset="3">
            {/*<Button*/}
            {/*type="primary"*/}
            {/*style={{ width: 100 }}*/}
            {/*onClick={this.validateAllFormField}*/}
            {/*>*/}
            {/*更新设置*/}
            {/*</Button>*/}
          </Col>
        </Row>
      </IceContainer>
    );
  }
}

const styles = {
  label: {
    textAlign: 'right',
  },
  formContent: {
    width: '100%',
    position: 'relative',
  },
  formItem: {
    alignItems: 'center',
    marginBottom: 25,
  },
  formTitle: {
    margin: '0 0 20px',
    paddingBottom: '10px',
    borderBottom: '1px solid #eee',
    color: '#333',
  },
  inputItem: {
    width: '100%',
  },
};
