import React, { Component } from 'react';
import { Button, Step, Grid, Icon } from '@alifd/next';
import IceContainer from '@icedesign/container';
import globalConf from "../../../../globalConfig";
require('./textStyles.css');

import {Link} from "react-router-dom";

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

  renderText = () => {
    return (
      <div className="contentText">
        <h2>大赛背景</h2>
        <p>
          本届“华为杯”遥感图像稀疏表征与智能分析竞赛由国家自然科学基金委信息科学部、
          “空间信息网络基础理论与关键技术”重大研究计划指导专家组主办，
          针对重大研究计划中的“空间信息稀疏表征与融合处理”关键科学问题，
          设置遥感图像稀疏表征、快速信息提取与知识发现等竞赛任务，
          发现和汇聚优秀的遥感图像智能分析人才团队，
          遴选和沉淀出一批遥感图像稀疏表征与智能分析的实用模型和高效算法，
          为重大研究计划的在轨集成验证服务。
          同时，通过打造大规模遥感图像稀疏表征与智能分析的国际化竞赛平台，
          进一步深化人工智能理论与方法在遥感图像智能分析中的应用，
          引领全球遥感图像稀疏表征和智能分析研究与发展的潮流。
        </p>
        <br/>
      </div>
    );
  };

  render() {
    const data = globalConf.themeConf;

    const { isMobile } = this.state;
    return (
      <div>
        <div className="application-progress">
          <IceContainer>
            {this.renderText()}
          </IceContainer>
        </div>

        <div className="application-progress">
          <IceContainer>
            <div className="contentText">
              <h2>竞赛阶段</h2>
              <div style={styles.stepMargin}>
                <Step current={0} shape={isMobile ? 'dot' : 'circle'}>
                  <Step.Item title="报名注册号" />
                  <Step.Item title="发布数据" />
                  <Step.Item title="初赛" />
                  <Step.Item title="决赛" />
                </Step>
              </div>

            </div>
          </IceContainer>
        </div>

        <div className="application-progress">
          <IceContainer>
            <div className="contentText">
              <h2>竞赛主题</h2>
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
                          <Link to={item.url}>
                            {item.operation}
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </div>
                );
              })}
            </div>
          </IceContainer>
        </div>
      </div>


    );
  }
}

const styles = {
  stepMargin:{
    marginTop: '60px',
  },
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
