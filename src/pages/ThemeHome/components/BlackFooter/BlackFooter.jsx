import React from 'react';
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

export default () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <Row wrap>
          <Col l="10">
            <p style={styles.subtit}>竞赛论坛：http://sin.xintongconference.com</p>
          </Col>
          <Col l="10">
            <p style={styles.subtit}>大赛交流QQ群：660-926-708</p>
          </Col>
        </Row>
        <Row wrap>
          <Col l="10">
            <p style={styles.subtit}>通讯邮箱：rscup2019@hotmail.com</p>
          </Col>
          <Col l="10">
            <p style={styles.subtit}>联系人：龙  洋 （189-0862-7409） 董志鹏 （189-6396-5044）</p>
          </Col>
        </Row>
        <Row wrap>
          <div style={styles.copyright}>版权所有 © 中国科学院空间应用工程与技术中心 <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  备案号：京ICP备09082226号-7</span></div>
        </Row>
      </div>
    </div>
  );
};

const styles = {
  copyright: {
    fontSize: '13px',
    color: '#fff',
    lineHeight: 1.5,
    textAlign: 'center',
    margin:'25px auto 5px'
  },
  container: {
    background: '#0e0e0e',
    padding: '20px 50px 30px',
  },
  content: {
    maxWidth: '1200px',
    margin: ' 0 auto',
  },
  title: {
    fontSize: '18px',
    lineHeight: '26px',
    color: '#fff',
  },
  desc: {
    fontSize: '12px',
    lineHeight: '20px',
    color: '#fff',
    textAlign: 'justify',
    marginTop: '14px',
    maxWidth: '830px',
  },
  link: {
    color: '#00b7d3',
  },
  rightContent: {
    position: 'relative',
  },
  textBox: {
    paddingLeft: '100px',
  },
  qrcode: {
    width: '82px',
    height: '82px',
    position: 'absolute',
    top: '0',
    left: '0',
  },
  subtit: {
    fontWeight: '400',
    fontSize: '16px',
    color: '#fff',
    lineHeight: '22px',
    whiteSpace:'pre'
  },
  text: {
    fontSize: '12px',
    color: '#666',
    lineHeight: '18px',
    marginTop: '6px',
  },
};
