/* eslint react/no-string-refs:0 */
import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {Input, Button, Checkbox, Message} from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import IceIcon from '@icedesign/foundation-symbol';
import DataBinder from '@icedesign/data-binder';
import globalConf from "../../globalConfig";


@DataBinder({
  ajaxLogin: {
    url: globalConf.genUrl('user/login'),
    method: 'POST',
    data: {},
    success: (res, defaultCallBack, orgResponse) => {
      console.log("success res", res, "orgResponse", orgResponse);
    },
    error: (res, defaultCallBack, orgResponse) => {
      defaultCallBack();
    },
    ...globalConf.headerCOR,
  }
})
@withRouter
class UserLogin extends Component {
  static displayName = 'UserLogin';

  static propTypes = {};

  static defaultProps = {};

  flagReadOnly= true;
  constructor(props) {
    super(props);
    this.state = {

      value: {
        phone_number: '',
        password: '',
      },
    };
  }

  formChange = (value) => {
    this.setState({
      value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.refs.form.validateAll((errors, values) => {
      if (errors) {
        console.log('errors', errors);
        return;
      }
      console.log('values:', values);
      this.props.updateBindingData('ajaxLogin', {
        data: {
          phone_number: values.phone_number,
          password: values.password,
        }
      }, (rsp) => {
        console.log("login rsp", rsp);
        if (rsp && rsp.status === 1) {
          Message.success("登录成功");
          this.props.history.push('/');
        } else {
          Message.warning("登录失败，请重试");
        }

      });

    });
  };

  onFocus=()=>{
    console.log("onFocus----");
    this.flagReadOnly = false;
    this.setState({
     loading:false
    })
  }

  render() {

    console.log("flagReadOnly", this.flagReadOnly);
    return (
      <div style={styles.container}>
        <h4 style={styles.title}>登 录</h4>
        <IceFormBinderWrapper
          value={this.state.value}
          onChange={this.formChange}
          ref="form"
        >
          <div style={styles.formItems}>
            <div style={styles.formItem}>
              <IceIcon type="person" size="small" style={styles.inputIcon}/>
              <IceFormBinder name="phone_number" required message="必填">
                <Input
                  size="large"
                  maxLength={20}
                  placeholder="手机号码"
                  readOnly = {this.flagReadOnly}
                  onFocus={this.onFocus}
                  onBlur={this.onFocus}
                  style={styles.inputCol}
                />
              </IceFormBinder>
              <IceFormError name="phone_number"/>
            </div>

            <div style={styles.formItem}>
              <IceIcon type="lock" size="small" style={styles.inputIcon}/>
              <IceFormBinder name="password" required message="必填">
                <Input
                  size="large"
                  htmlType="password"
                  placeholder="密码"
                  readOnly = {this.flagReadOnly}
                  onFocus={this.onFocus}
                  onBlur={this.onFocus}
                  style={styles.inputCol}
                />
              </IceFormBinder>
              <IceFormError name="password"/>
            </div>

            <div style={styles.footer}>
              <Button
                type="primary"
                size="large"
                onClick={this.handleSubmit}
                style={styles.submitBtn}
              >
                登 录
              </Button>
              <Link to="/user/register" style={styles.tips}>
                立即注册
              </Link>
            </div>
          </div>
        </IceFormBinderWrapper>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '400px',
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
};

export default UserLogin;
