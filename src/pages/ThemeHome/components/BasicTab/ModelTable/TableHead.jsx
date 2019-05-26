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
import PropTypes from "prop-types";

const { Row, Col } = Grid;

export default class TableHead extends Component {

  propTypes = {
    superCallback:PropTypes.func.isRequired,
  };
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

    const {superCallback} = this.props;

    console.log('onSuccess : ', info, 'callback ', superCallback);

    if(superCallback != undefined){
      superCallback();
    } else {
      console.log('no callback')
    }

  };

  render() {
    const {superCallback} = this.props;
    return (
      <IceFormBinderWrapper
        value={this.state.value}
        onChange={this.formChange}
        ref="form"
      >
        <Row wrap gutter="24" style={styles.formRow}>
          <Col l="20">
            <div style={styles.formItem}>
              <Upload
                action={globalConf.genUrl('results/upload')}
                beforeUpload={this.beforeUpload}
                onChange={this.onChange}
                onSuccess={this.onSuccess}
                defaultValue={[]}
              >
                <Button type="primary">上传文件（ZIP格式）</Button>
              </Upload>

            </div>
          </Col>
          <Col >
            <div style={styles.formItemFresh}>
             <Button type="primary" onClick={superCallback}>刷新列表</Button>
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
  formItemFresh: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
    float:'right'
  },
  formLabel: {
    minWidth: '70px',
  },
};
