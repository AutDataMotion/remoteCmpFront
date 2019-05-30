import React, {Component} from 'react';
import BlackFooter from '../ThemeHome/components/BlackFooter';
import {Col, Row} from "@alifd/next/lib/grid";

require('../common/textHtml.css');


export default class AboutUs extends Component {
  static displayName = 'AboutUs';

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderText = () => {
    return (
      <div className="contentText">
        <h2>关于我们</h2>
        <p>
          {/* 空间信息网络以卫星、飞机等空间平台为载体实时获取、传输和处理空间信息，能有效服务于应急救援、导航定位、航天测控等重大行业领域。随着各国空间信息网络体系的不断发展，空间信息网络平台数据量急剧增加，传统的基于高维信号处理方法的遥感图像压缩难以满足大时空跨度空间网络体系结构和动态网络环境下丰富数据和应用平台之间的高速信息传输需求。因此，发展高性能的遥感图像稀疏表征与智能分析算法模型与评估方法对于空间信息网络平台的数据分析与综合应用具有十分关键的作用。 */}
          空间信息网络以卫星、飞机等空间平台为载体实时获取、传输和处理空间信息，能有效服务于应急救援、导航定位、航天测控等重大行业领域。随着各国空间信息网络体系的不断发展，空间信息网络平台数据量急剧增加，亟需解决大时空跨度空间网络体系结构和动态网络环境下丰富数据和应用平台之间的高速信息传输难题。因此，发展高性能的遥感图像稀疏表征与智能分析算法模型对于空间信息网络平台的数据分析与综合应用具有十分重要的意义。
        </p>
        <p>
          在国家自然科学基金委和空间信息网络基础理论与关键技术重大研究计划指导专家组的支持下，第一届“眼神杯”遥感影像图像稀疏表征与融合处理大赛于2017年在宁夏银川成功举办，第二届“眼神杯”遥感图像稀疏表征与融合处理大赛于2018年在吉林长春成功举办。本次赛事由国家自然科学基金委应急管理项目资助，将遵循“开放、公平、创新、引领”的原则，面向全国乃至全球相关领域研究团队，设置遥感图像场景分类、遥感图像目标检测、遥感图像语义分割、遥感图像变化检测和遥感卫星视频目标跟踪等五个竞赛单元，旨在探讨空间信息网络及相关领域最新研究进展和发展趋势，展示最新技术及学术研究成果，为国内外空间信息网络领域的研究人员与行业相关部门提供学术交流平台，促进相关领域发展。
        </p>
        <br/>
      </div>
    );
  };

  render() {
    return (
      <Row gutter="20" wrap>
        <Col l="24" xxs="24">
          <header id="rules-header" className="text-center">
            <div className="cn-header white">关  于 我 们</div>
            <div className="en-header white">About Us</div>
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
