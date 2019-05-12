/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Grid, Input, Select, Button, Upload, Message } from '@alifd/next';
import DataBinder from '@icedesign/data-binder';

import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import globalConf from "../../../../../globalConfig";

const { Row, Col } = Grid;

@DataBinder({
  account: {
    url: globalConf.baseUrl,
    // ajax 参数参见：https://github.com/axios/axios
    defaultBindingData: {
      pagination: {
        page: 1,
        total: 0,
        pageSize: 10
      },
      table: []
    }
  }
})
export default class TableHead extends Component {
  state = {
    value: {},
  };

  formChange = (value) => {
    this.props.onChange(value);
  };

  beforeUpload = (info) => {
    console.log('beforeUpload : ', info);
  };

  onChange = (info) =>{
    console.log('onChange : ', info);
  };

  onSuccess= (info) => {
    Message.success('上传成功');
    console.log('onSuccess : ', info);
  };

  render() {
    return (
      <IceFormBinderWrapper
        value={this.state.value}
        onChange={this.formChange}
        ref="form"
      >
        <Row wrap gutter="24" style={styles.formRow}>
          <Col l="6">
            <div style={styles.formItem}>
              <Upload
                action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
                beforeUpload={this.beforeUpload}
                onChange={this.onChange}
                onSuccess={this.onSuccess}
                defaultValue={[]}
              >
                <Button type="primary">上传文件（ZIP格式）</Button>
              </Upload>

            </div>
          </Col>
        </Row>
      </IceFormBinderWrapper>
    );
  }
}

const styles = {
  container: {
    margin: '20px',
    padding: '0',
  },
  title: {
    margin: '0',
    padding: '20px',
    fonSize: '16px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    color: 'rgba(0,0,0,.85)',
    fontWeight: '500',
    borderBottom: '1px solid #eee',
  },
  formRow: {
    padding: '10px 20px',
  },
  formItem: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
  },
  formLabel: {
    minWidth: '70px',
  },
};
