/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Grid, Input, Select, Button } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';

const { Row, Col } = Grid;

export default class TableHead extends Component {
  state = {
    value: {},
  };

  formChange = (value) => {
    this.props.onChange(value);
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
              <span style={styles.formLabel}>结果文件</span>
              <IceFormBinder name="resultFile" triggerType="onBlur">
                <Input placeholder="请选择上传结果文件" />
              </IceFormBinder>
              <div style={styles.formError}>
                <IceFormError name="resultFile" />
              </div>
            </div>
          </Col>

          <Col l="6">
            <div style={styles.formItem}>
            <Button type="primary" style={{width:'80px'}}>上传</Button>
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
