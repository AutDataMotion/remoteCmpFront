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

export default class Rule extends Component {
  static displayName = 'Rule';

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderText = () => {
    return (
      <div className="contentEditorHtmlOutput" data-spm-anchor-id="5176.12281976.0.i1.34164c2ajQFYls">
        <h2>赛事简介</h2>
        <p>本赛事遵循"开放、公平、创新、引领"的原则，面向全国乃至全球相关领域研究团队，
          以推动空间信息技术领域进步、培养锻炼专业人才和研究团队为目标，并为重大研究计划在轨集成验证征集优秀算法。</p>
        <p>
          本届大赛拟设置遥感图像场景分类、光学遥感图像目标自动检测识别、高光谱遥感图像目标检测、
          遥感卫星视频目标自动跟踪和遥感图像变化检测等六个竞赛单元。
          组织方将提供面向各竞赛单元的大规模遥感图像精确标注数据集与标准规范的多平台多载荷调试测试数据，
          制定可量化的算法评测标准，构建遥感图像与卫星视频智能分析计算云平台并提供专业的测试评估环境，
          通过初赛、决赛和复审答辩等多个阶段的评比，最终遴选出优秀算法，决胜出优胜团队。
          本次大赛设置四类奖项（特等奖、一等奖、二等奖及三等奖），
          获奖队伍将受邀参加国家自然科学基金委空间信息网络重大研究计划指导专家组
          2019年9月15日在浙江乌镇举办的颁奖仪式和学术交流活动。
        </p>

        <br/>
        <h2>竞赛主题</h2>
        <ol>
          <li>
            <p><strong><Link
              to={globalConf.themeConf[0].url}>{globalConf.themeConf[0].bannerTitle}{globalConf.themeConf[0].title}  &nbsp; &nbsp; &nbsp;&nbsp;  (查看详情)</Link></strong>
            </p>
            <p>
              {globalConf.themeConf[0].description}
            </p>
          </li>

          <li>
            <p><strong><Link
              to={globalConf.themeConf[1].url}>{globalConf.themeConf[1].bannerTitle}{globalConf.themeConf[1].title}  &nbsp; &nbsp; &nbsp;&nbsp;  (查看详情)</Link></strong>
            </p>
            <p>
              {globalConf.themeConf[1].description}
            </p>
          </li>
          <li>
            <p><strong><Link to={globalConf.themeConf[2].url}>{globalConf.themeConf[2].bannerTitle}
              {globalConf.themeConf[2].title}  &nbsp; &nbsp; &nbsp;&nbsp;  (查看详情)</Link></strong></p>
            <p>
              {globalConf.themeConf[2].description}
            </p>
          </li>
          <li>
            <p><strong><Link to={globalConf.themeConf[3].url}>{globalConf.themeConf[3].bannerTitle}
              {globalConf.themeConf[3].title}  &nbsp; &nbsp; &nbsp;&nbsp;  (查看详情)</Link></strong></p>
            <p>
              {globalConf.themeConf[3].description}
            </p>
          </li>
          <li>
            <p><strong><Link to={globalConf.themeConf[4].url}>{globalConf.themeConf[4].bannerTitle}
              {globalConf.themeConf[4].title}  &nbsp; &nbsp; &nbsp;&nbsp;  (查看详情)</Link></strong></p>
            <p>
              {globalConf.themeConf[4].description}
            </p>
          </li>
        </ol>

        <br/>
        <h2>时间安排</h2>

        <table>
          <thead>
          <tr>
            <th style={styles.textCenter} width="20%">环节</th>
            <th style={styles.textCenter} width="30%">时间</th>
            <th style={styles.textCenter} width="50%">规则</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td style={styles.textCenter}>线上报名</td>
            <td style={styles.textCenter}>6月15日至6月30日</td>
            <td>大赛组委会在第四届“空间信息网络”论坛官网和遥感图像稀疏表征与智能分析竞赛官网公布竞赛通知，各参赛团队自愿报名参赛。
              鼓励小微企业、创业团队、高校研究所等组队参赛，按自愿报名的原则，在线填报参赛回执及报名表。
            </td>
          </tr>
          <tr>
            <td style={styles.textCenter}>发布邀请</td>
            <td style={styles.textCenter}>6月15日至6月30日</td>
            <td>邀请国内外未进行线上报名的相关高校、企业、研究团体等发布竞赛邀请。</td>
          </tr>
          <tr>
            <td style={styles.textCenter}>发布数据</td>
            <td style={styles.textCenter}>7月1日至7月5日</td>
            <td>公布竞赛数据，向参赛队伍提供数据集样例。</td>
          </tr>
          <tr>
            <td style={styles.textCenter}>初赛阶段</td>
            <td style={styles.textCenter}>7月1日至8月31日</td>
            <td>根据报名情况组织竞赛初赛，对参赛队伍提交算法模型进行测试、评估、审查、遴选工作。</td>
          </tr>
          <tr>
            <td style={styles.textCenter}>决赛阶段</td>
            <td style={styles.textCenter}>9月1日至9月15日</td>
            <td>组织竞赛现场答辩，演示验证工作，专家评委对参赛团队进行综合评定、打分和排名。</td>
          </tr>
          <tr>
            <td style={styles.textCenter}>成绩公布</td>
            <td style={styles.textCenter}>9月20日</td>
            <td>组委会公布获奖队伍名单和成绩，邀请获奖参加第四届“空间信息网络”学术论坛颁奖典礼。</td>
          </tr>
          </tbody>
        </table>

        <br/>
        <h2>竞赛开发与测试平台</h2>

        <p><strong>1.	初赛评测平台</strong></p>
        <ul>
          <li>初赛由参赛者线下设计模型，在线提交参赛模型及对应运行结果。</li>
        </ul>

        <p><strong>1.	决赛评测平台</strong></p>
        <ul>
          <li>测试平台：华为弹性云高性能GPU服务器<br/></li>
          <li>CPU：8核,<br/></li>
          <li>内存：64G<br/></li>
          <li>硬盘：1T机械硬盘<br/></li>
          <li>显卡：NVIDIA Tesla P100<br/></li>
          <li>显存：16GB<br/></li>
          <li>操作系统：Ubuntu 16.06 64bit/CentOS 7.3 64bit<br/></li>
        </ul>

        <br/>

        <h2> 奖项设置 </h2>
        <p>竞赛将根据测试得分情况，对参赛队伍进行排名，
          拟设立特等奖、一等奖、二等奖和三等奖（根据竞赛情况，部分奖项可能空缺），奖励金额如下：</p>
        <p>
          <strong>&nbsp; &nbsp; &nbsp;&nbsp;特等奖  &nbsp; &nbsp; &nbsp;&nbsp; 奖金100000元人民币<br/></strong>
          <strong>&nbsp; &nbsp; &nbsp;&nbsp;一等奖   &nbsp; &nbsp; &nbsp;&nbsp;奖金30000元人民币<br/></strong>
          <strong>&nbsp; &nbsp; &nbsp;&nbsp;二等奖   &nbsp; &nbsp; &nbsp;&nbsp;奖金20000元人民币<br/></strong>
          <strong>&nbsp; &nbsp; &nbsp;&nbsp;三等奖   &nbsp; &nbsp; &nbsp;&nbsp;奖金10000元人民币<br/></strong>
        </p>
        <br/>

        <h2>参赛方式</h2>

        <ol>
          <li>
            <strong>报名方式：大赛采用在线及邮件双通道报名方式</strong>
            <ul>
              <li>
                <p>在线报名：参赛队伍可登陆遥感图像稀疏表征与智能分析竞赛官网
                （http://RSCup.eyecool.cn）在线报名，提交信息后显示“收到报名申请”即为报名成功。</p>
              </li>
              <li>
                <p>邮件报名：参赛队伍也可在竞赛官网及第四届“空间信息网络”论坛官网（http://sin.xintongconference.com）下载报名表，
                于2019年6月20日前将报名表发送到指定报名邮箱（rscup@eyecool.cn），
                邮件主题“单位+团队名称”。报名后2个工作日内收到主办方回复邮件即为报名成功。</p>
              </li>
            </ul>
          </li>

          <li>
            <strong>联系方式</strong>
            <ul>
              <li>
                <p>网&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;址：http://RSCup.eyecool.cn &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; http://sin.xintongconference.com
                </p>
              </li>
              <li>
                <p>通讯邮箱：ygyxds2019@163.com &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;rscup@eyecool.cn
                </p>
              </li>
              <li>
                <p>联&nbsp;系&nbsp;人：龙&nbsp; &nbsp;洋 &nbsp; &nbsp; &nbsp;189-0862-7409
                  &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; 丁&nbsp; &nbsp;健&nbsp; &nbsp; &nbsp;134-0712-7109
                  &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; 易&nbsp; &nbsp;环&nbsp; &nbsp; &nbsp;131-6467-6010
                </p>
              </li>
              <li>
                <p>邮件报名：参赛队伍也可在竞赛官网及第四届“空间信息网络”论坛官网（http://sin.xintongconference.com）下载报名表，
                  于2019年6月20日前将报名表发送到指定报名邮箱（rscup@eyecool.cn），
                  邮件主题“单位+团队名称”。报名后2个工作日内收到主办方回复邮件即为报名成功。</p>
              </li>
            </ul>
          </li>

        </ol>

        <br/>
        <h2>注意事项</h2>

        <p><strong>报名与组队要求</strong></p>
        <ol>
          <li>
            每个团队组成人数不超过4人；
          </li>
          <li>
            团队名称不得包含不文明字词，不可侵犯任何第三方的知识产权、隐私权、宣传权，或其他适用的法律法规；
          </li>
          <li>
            每只参赛团队需有一名队长，负责与竞赛主办方沟通；
          </li>
          <li>
            一个竞赛主题仅限同一单位、同一课题组一支队伍报名参赛；
          </li>
          <li>
            网上报名采用实名审核，审核通过的实名信息将无法修改，如真实参赛人员与报名信息不符，组委会有权取消相关团队和人员的参赛资格。
          </li>
        </ol>
        <p><strong>竞赛结果提交要求</strong></p>
        <ol>
          <li>
            测试团队将提交算法软件代码及可执行程序，代码需要在竞赛主办方提供的竞赛服务器上编译执行，竞赛主办方将严格保护参赛者的知识产权；
          </li>
          <li>
            算法软件不得违反国家相关法律法规，不得侵犯他人知识产权。软件若违反上述规定引起知识产权异议和纠纷，其责任由参赛者承担。
          </li>
        </ol>
      </div>
    );
  };

  render() {
    return (
      <Row gutter="20" wrap>
        <Col l="24" xxs="24">
          <header id="rules-header" className="text-center">
            <div className="cn-header white">比 赛 细 则</div>
            <div className="en-header white">Competition Rules</div>
          </header>
        </Col>
        <Col l="24" xxs="24">
          <div className='whiteText'>
            {this.renderText()}
          </div>
        </Col>
        <Col l="24" xxs="24">
          <BlackFooter/>
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
}
