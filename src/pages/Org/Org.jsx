import React, {Component} from 'react';
import IntroBanner from '../ThemeHome/components/IntroBanner';
import BlackFooter from '../ThemeHome/components/BlackFooter';
import BasicTab from "../ThemeHome/components/BasicTab";
import Overview from "../ThemeHome/components/Overview";
import {Col, Row} from "@alifd/next/lib/grid";
import globalConf from "../../globalConfig";
import {Link} from "react-router-dom";

require('../common/textHtml.css');

const introBannerProp = {
  themeId: 2,
  cmpInfoConf: {},
  dataDownloadConf: {
    dataUrl: 'http://pan.baidu.com',
    fetchCode: '888-666',
  },
  commitResConf: {},
  hotRankConf: {},
};

export default class Org extends Component {
  static displayName = 'Org';

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderText = () => {
    return (
      <div className="contentEditorHtmlOutput">
        <h2>大赛组织机构</h2>
        <table className="org">
          <thead>
          <tr>
            <th style={styles.textCenter} width="130px"></th>
            <th style={styles.textCenter} width="400px"></th>
            <th style={styles.textCenter} width="100px"></th>
            <th style={styles.textCenter} width="120px"></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td valign="top" style={styles.textRight}>主办单位：
            </td>
            <td style={styles.textLeft}>
              国家自然科学基金委员会<br/>
              空间信息网络重大研究计划指导专家组
            </td>
          </tr>
          <tr>
            <td valign="top" style={styles.textRight}>承办单位：</td>
            <td style={styles.textLeft}>
              武汉大学测绘遥感信息工程国家重点实验室<br/>
              中国科学院空间应用工程与技术中心
            </td>
          </tr>
          <tr>
            <td valign="top" style={styles.textRight}> 赞助单位：<br/></td>
            <td style={styles.textLeft}>
              华为技术有限公司<br/>
              北京眼神科技有限公司<br/>
              北京航天宏图信息技术股份有限公司
            </td>
          </tr>
          </tbody>
        </table>

        <br/>
        <h2>大赛指导委员会</h2>
        <table className="org">
          <thead>
          <tr>
            <th style={styles.textCenter} width="130px"></th>
            <th style={styles.textCenter} width="450px"></th>
            <th style={styles.textCenter} width="100px"></th>
            <th style={styles.textCenter} width="120px"></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td valign="top" style={styles.textRight}>主 席：</td>
            <td style={styles.textLeft}> 鹏城实验室（深圳网络空间科学与技术广东省实验室）</td>
            <td style={styles.textJustify}> 于 全</td>
            <td style={styles.textJustify}> 院 士</td>
          </tr>
          <tr>
            <td valign="top" style={styles.textRight}>委 员：</td>
            <td style={styles.textLeft}> 武汉大学</td>
            <td style={styles.textJustify}> 龚健雅</td>
            <td style={styles.textJustify}> 院 士</td>
          </tr>
          <tr>
            <td valign="top" style={styles.textRight}></td>
            <td style={styles.textLeft}> 清华大学</td>
            <td style={styles.textJustify}> 陆建华</td>
            <td style={styles.textJustify}> 院 士</td>
          </tr>
          <tr>
            <td valign="top" style={styles.textRight}></td>
            <td style={styles.textLeft}> 北京理工大学</td>
            <td style={styles.textJustify}> 张 军</td>
            <td style={styles.textJustify}> 院 士</td>
          </tr>
          <tr>
            <td valign="top" style={styles.textRight}></td>
            <td style={styles.textLeft}> 航天工程大学</td>
            <td style={styles.textJustify}> 周志鑫</td>
            <td style={styles.textJustify}> 院 士</td>
          </tr>
          <tr>
            <td valign="top" style={styles.textRight}></td>
            <td style={styles.textLeft}> 中国科技大学</td>
            <td style={styles.textJustify}> 王东进</td>
            <td style={styles.textJustify}> 教 授</td>
          </tr>
          <tr>
            <td valign="top" style={styles.textRight}></td>
            <td style={styles.textLeft}> 中国科学院光电研究院</td>
            <td style={styles.textJustify}> 吴海涛</td>
            <td style={styles.textJustify}> 研究员</td>
          </tr>

          <tr>
            <td valign="top" style={styles.textRight}></td>
            <td style={styles.textLeft}> 自然科学基金委信息科学部</td>
            <td style={styles.textJustify}> 张兆田</td>
            <td style={styles.textJustify}> 研究员</td>
          </tr>
          <tr>
            <td valign="top" style={styles.textRight}></td>
            <td style={styles.textLeft}> 自然科学基金委地球科学部</td>
            <td style={styles.textJustify}> 王岐东</td>
            <td style={styles.textJustify}> 研究员</td>
          </tr>
          <tr>
            <td valign="top" style={styles.textRight}></td>
            <td style={styles.textLeft}> 自然科学基金委信息科研诚信建设办</td>
            <td style={styles.textJustify}> 何 杰</td>
            <td style={styles.textJustify}> 研究员</td>
          </tr>
          <tr>
            <td valign="top" style={styles.textRight}></td>
            <td style={styles.textLeft}> 自然科学基金委信息科学部</td>
            <td style={styles.textJustify}> 宋朝晖</td>
            <td style={styles.textJustify}> 教 授</td>
          </tr>
          <tr>
            <td valign="top" style={styles.textRight}></td>
            <td style={styles.textLeft}> 自然科学基金委信息科学部</td>
            <td style={styles.textJustify}> 熊小芸</td>
            <td style={styles.textJustify}> 研究员</td>
          </tr>
          <tr>
            <td valign="top" style={styles.textRight}></td>
            <td style={styles.textLeft}> 中国科学院空间应用工程与技术中心</td>
            <td style={styles.textJustify}> 高 铭</td>
            <td style={styles.textJustify}> 研究员</td>
          </tr>
          <tr>
            <td valign="top" style={styles.textRight}></td>
            <td style={styles.textLeft}> 北京市遥感信息研究所</td>
            <td style={styles.textJustify}> 江碧涛</td>
            <td style={styles.textJustify}> 研究员</td>
          </tr>
          <tr>
            <td valign="top" style={styles.textRight}></td>
            <td style={styles.textLeft}> 华为中国智能计算业务部</td>
            <td style={styles.textJustify}> 张英梗</td>
            <td style={styles.textJustify}> 副总裁</td>
          </tr>
          </tbody>
        </table>

        <br/>
        <h2>大赛组织委员会</h2>
        <table className="org">
          <thead>
          <tr>
            <th style={styles.textCenter} width="130px"></th>
            <th style={styles.textCenter} width="450px"></th>
            <th style={styles.textCenter} width="100px"></th>
            <th style={styles.textCenter} width="120px"></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td valign="top" style={styles.textRight}></td>
            <td style={styles.textLeft}> 武汉大学</td>
            <td style={styles.textJustify}> 王 密</td>
            <td style={styles.textJustify}> 教 授</td>
          </tr>
          <tr>
            <td valign="top" style={styles.textRight}></td>
            <td style={styles.textLeft}> 武汉大学</td>
            <td style={styles.textJustify}> 夏桂松</td>
            <td style={styles.textJustify}> 教 授</td>
          </tr>
          <tr>
            <td valign="top" style={styles.textRight}></td>
            <td style={styles.textLeft}> 武汉大学</td>
            <td style={styles.textJustify}> 陈震中</td>
            <td style={styles.textJustify}> 教 授</td>
          </tr>
          <tr>
            <td valign="top" style={styles.textRight}></td>
            <td style={styles.textLeft}> 武汉大学</td>
            <td style={styles.textJustify}> 杨 文</td>
            <td style={styles.textJustify}> 教 授</td>
          </tr>
          <tr>
            <td valign="top" style={styles.textRight}></td>
            <td style={styles.textLeft}> 清华大学</td>
            <td style={styles.textJustify}> 葛 宁</td>
            <td style={styles.textJustify}> 教 授</td>
          </tr>
          <tr>
            <td valign="top" style={styles.textRight}></td>
            <td style={styles.textLeft}> 北京市遥感信息研究所</td>
            <td style={styles.textJustify}> 蔡 琳</td>
            <td style={styles.textJustify}> 高 工</td>
          </tr>
          <tr>
            <td valign="top" style={styles.textRight}></td>
            <td style={styles.textLeft}>鹏城实验室（深圳网络空间科学与技术广东省实验室）</td>
            <td style={styles.textJustify}> 王敬超</td>
            <td style={styles.textJustify}> 高 工</td>
          </tr>
          <tr>
            <td valign="top" style={styles.textRight}></td>
            <td style={styles.textLeft}> 北京航空航天大学</td>
            <td style={styles.textJustify}> 刘 锋</td>
            <td style={styles.textJustify}>教 授</td>
          </tr>
          <tr>
            <td valign="top" style={styles.textRight}></td>
            <td style={styles.textLeft}> 中国科学院空间应用工程与技术中心</td>
            <td style={styles.textJustify}> 李盛阳</td>
            <td style={styles.textJustify}> 研究员</td> 
          </tr>
          <tr>
            <td valign="top" style={styles.textRight}></td>
            <td style={styles.textLeft}> 哈尔滨工业大学</td>
            <td style={styles.textJustify}> 谷延锋</td>
            <td style={styles.textJustify}> 教授</td>
          </tr>
          <tr>
            <td valign="top" style={styles.textRight}></td>
            <td style={styles.textLeft}> 长光卫星技术有限公司</td>
            <td style={styles.textJustify}> 钟 兴</td>
            <td style={styles.textJustify}> 研究员</td>
          </tr>

          </tbody>
        </table>
        <br/>
      </div>
    );
  };

  render() {
    return (
      <Row gutter="20" wrap>
        <Col l="24" xxs="24">
          <header id="rules-header" className="text-center">
            <div className="cn-header white">机 构 设 置</div>
            <div className="en-header white">Organization</div>
          </header>
        </Col>
        <Col l="24" xxs="24">
          <div className='whiteText'>
            {this.renderText()}
          </div>
        </Col>
      </Row>

    );
  }
}

const styles = {
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
}
