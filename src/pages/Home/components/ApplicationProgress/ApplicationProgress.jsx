import React, { Component } from 'react';
import { Button, Step, Grid, Icon } from '@alifd/next';
import IceContainer from '@icedesign/container';
import globalConf from "../../../../globalConfig";
require('./textStyles.css');

import {Link} from "react-router-dom";

const { Row, Col } = Grid;

const imgIcons = [
  require('./images/theme1.png'),
  require('./images/theme2.jpg'),
  require('./images/theme3.png'),
  require('./images/theme4.png'),
  require('./images/t5.gif'),
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
        <p className="contentTextP">
          本届“华为杯”遥感图像稀疏表征与智能分析竞赛由国家自然科学基金委信息科学部、“空间信息网络基础理论与关键技术”重大研究计划指导专家组主办，旨在推动“空间信息网络基础理论与关键技术”重大研究计划科学问题之一“空间信息稀疏表征与融合处理”的相关理论与技术的发展，解决空间信息稀疏表征、多维时空数据的融合处理、空间信息的快速提取与知识发现等技术问题，牵引该技术领域的创新发展，为实现空间信息处理与应用能力的大幅提升提供支撑。
        </p>
        <br/>
      </div>
    );
  };

  renderOrg = ()=>{
    return <div className="contentText">
      <h2>组织机构</h2>
      <table style={{width:'100%'}}>
        <thead>
        <tr>
          <th style={styleTable.textCenter} width="33%"></th>
          <th style={styleTable.textCenter} width="37%"></th>
          <th style={styleTable.textCenter} width="30%"></th>

        </tr>
        </thead>
        <tbody>
        <tr>
          <td style={styleTable.textLeft}>
            主办单位：<br/>
            <img style={styleTable.logoImgSmall} src={require('./images/NSFC1.png')}/>国家自然科学基金委信息科学部 <br/>
            空间信息网络重大研究计划指导专家组
          </td>

          <td style={styleTable.textLeft}>
            承办单位：<br/>
            <img style={styleTable.logoImgSmall} src={require('./images/LIESMARS.png')}/>武汉大学测绘遥感信息工程国家重点实验室<br/>
            <img style={styleTable.logoImg} src={require('./images/csu.png')}/>中国科学院空间应用工程与技术中心
          </td>

          <td valign="top" style={styleTable.textLeft}>
            赞助单位：<br/>
            <img style={styleTable.logoImg} src={require('./images/huawei.png')}/>华为技术有限公司<br/>
            <img style={styleTable.logoImgMin} src={require('./images/eyecool.png')}/>北京眼神科技有限公司
          </td>
        </tr>
        </tbody>
      </table>
      <br/>
    </div>
  }

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
                        </div>
                      </Col>
                      <Col
                        xxs="24"
                        s="20"
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
                          {item.bannerTitle + item.title}
                        </span>
                        <Link to={item.url} style={{float:'right'}}>
                            {item.operation}
                          </Link>
                      </span>
                        <div
                          style={{
                            ...styles.itemDescription,
                            ...(isMobile && styles.removeContentWidth),
                          }}
                        >
                          {/* {item.descriptionRule} */}
                          <p id="theme-background">{item.descriptionRule}</p>
                        </div>
                      </Col>

                    </Row>
                  </div>
                );
              })}
            </div>
          </IceContainer>
        </div>

        <div className="application-progress">
          <IceContainer>
            {this.renderOrg()}
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
    marginTop:'15px',
  },
  image: {
    borderRadius: '50',
    marginBottom: '12px',
    maxWidth: '150px',
  },
  itemBody: {
    padding: '10px 50px 0',
  },
  itemDescription: {
    color: '#000',
    marginTop: '20px',
	  fontSize: '15px',
  },
  operationWrap: {
    marginTop: '65px',
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
    fontSize: '16px',
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
  organizationBannerTextStyles: {
    position: 'absolute',
    top: '150px',
    zIndex: '15',
    width: '100%',
    boxSizing: 'border-box',
    textAlign:'center',
    color: '#fff',
    pointerEvents: 'none',
  },
};
const styleTable = {
  sOverview: {
    marginTop: '20px',
  },
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
  textLeft: {
    textAlign: 'left',

  },
  textJustify: {
    textAlign: 'justify',
    textJustify: 'distribute-all-lines',
    textAlignLast: 'justify',
  },
  logoImg:{
    width:'45px',
    display: 'inline',
    verticalAlign:'middle',
    marginRight:'18px'
  },
  logoImgSmall:{
    width:'60px',
    display: 'inline',
    verticalAlign:'middle',
    marginRight:'5px'
  },
  logoImgMin:{
    width:'122px',
    display: 'inline',
    verticalAlign:'middle',
    marginRight:'18px'
  }
}
