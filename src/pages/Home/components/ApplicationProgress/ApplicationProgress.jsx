import React, { Component } from 'react';
import { Button, Step, Grid, Icon } from '@alifd/next';
import IceContainer from '@icedesign/container';
import globalConf from "../../../../globalConfig";

const { Row, Col } = Grid;

const imgIcons = [
  require('./images/theme1.png'),
  require('./images/theme2.png'),
  require('./images/theme3.png'),
  require('./images/theme4.png'),
  require('./images/theme5.png'),
  require('./images/theme6.png'),
];

export default class ApplicationProgress extends Component {
  static displayName = 'ApplicationProgress';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
    };
  }

  componentDidMount() {
  }

  render() {
    const data = globalConf.themeConf;

    const { isMobile } = this.state;
    return (
      <div className="application-progress">
        <IceContainer>
          <Step current={0} shape={isMobile ? 'dot' : 'circle'}>
            <Step.Item title="报名注册号" />
            <Step.Item title="发布数据" />
            <Step.Item title="初赛" />
            <Step.Item title="决赛" />
          </Step>
          <div>
            {data.map((item, index) => {
              return (
                <div style={styles.row} key={index}>
                  <Row wrap>
                    <Col xxs="24" s="4">
                      <div style={styles.imageWrap}>
                        <img
                          style={styles.image}
                          src={imgIcons[index]}
                          alt="condition"
                        />
                        <br />
                        <span>{item.condition}</span>
                      </div>
                    </Col>
                    <Col
                      xxs="24"
                      s="16"
                      style={{
                        ...styles.itemBody,
                        ...(isMobile && styles.mobileContentCenter),
                      }}
                    >
                      <span
                        style={
                          styles.itemStatusSuccess
                        }
                      >
                        <Icon type="success" />
                        <span style={styles.itemStatusText}>
                          {item.title}
                        </span>
                      </span>
                      <div
                        style={{
                          ...styles.itemDescription,
                          ...(isMobile && styles.removeContentWidth),
                        }}
                      >
                        {item.description}
                      </div>
                    </Col>
                    <Col xxs="24" s="4">
                      <div style={styles.operationWrap}>
                        <a href={item.url} target="_blank">
                          {item.operation}
                        </a>
                        <a style={styles.operBtn} href={item.url} target="_blank">
                          {item.regist}
                        </a>
                      </div>
                    </Col>
                  </Row>
                </div>
              );
            })}
          </div>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  row: {
    backgroundColor: '#f9f9f9',
    marginTop: '32px',
    padding: '20px 40px',
  },
  imageWrap: {
    textAlign: 'center',
  },
  image: {
    width: '64px',
    height: '64px',
    borderRadius: '50',
    marginBottom: '12px',
  },
  itemBody: {
    padding: '10px 50px 0',
  },
  itemDescription: {
    color: '#666',
    marginTop: '20px',
  },
  operationWrap: {
    marginTop: '40px',
    textAlign: 'center',
  },
  itemFooter: {
    textAlign: 'center',
    color: '#666',
    marginTop: '40px',
  },
  nextBtn: {
    marginTop: '40px',
  },
  itemStatusSuccess: {
    color: '#1be25c',
  },
  itemStatusFail: {
    color: '#f33',
    fontSize: '16px',
  },
  itemStatusText: {
    marginLeft: '10px',
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: 'bold',
    color: 'rgb(51, 51, 51)',
  },
  mobileContentCenter: {
    textAlign: 'center',
    padding: '20px 0 0 0',
  },
  removeContentWidth: {
    maxWidth: 'none',
  },
  operBtn: {
    marginLeft: '10px',
  },
};
