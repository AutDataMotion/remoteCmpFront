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
        <p>本次竞赛将遵循"开放、公平、创新、引领"的原则，面向全国乃至全球相关领域研究团队，
          以推动空间信息技术领域进步、培养锻炼专业人才和研究团队为目标，
          并为重大研究计划在轨集成验证征集优秀算法。</p>
        <p>
          本届大赛拟设置遥感图像场景分类、遥感图像目标检测、
          遥感图像语义分割、遥感图像变化检测和遥感卫星视频目标跟踪五个竞赛单元。
          组织方将提供面向各竞赛单元的大规模遥感图像精确标注数据集与标准规范的多平台多载荷调试测试数据，
          制定可量化的算法评测标准，构建遥感图像与卫星视频智能分析计算云平台并提供专业的测试评估环境，
          通过初赛、决赛和复审答辩等多个阶段的评比，最终遴选出优秀算法，
          决胜出优胜团队。本次大赛设置四类奖项（特等奖、一等奖、二等奖及三等奖），
          获奖队伍将受邀参加国家自然科学基金“空间信息网络”重大研究计划指导专家组于
          2019年9月19日在浙江乌镇举办的第四届“空间信息网络”论坛颁奖仪式和学术交流活动。
        </p>

        <br/>
        <h2>主题设置</h2>
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
            <td>邀请国内外未进行线上报名的相关高校、企业、研究团体等参与竞赛，并发布竞赛邀请。</td>
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
            <td>根据初赛成绩遴选优秀队伍参加现场决赛，开展算法演示验证与答辩工作，专家评委对参赛团队进行综合评定、打分和排名。</td>
          </tr>
          <tr>
            <td style={styles.textCenter}>颁奖活动</td>
            <td style={styles.textCenter}>9月16日至9月19日</td>
            <td>组委会公布获奖队伍名单和成绩，邀请获奖参加第四届“空间信息网络”学术论坛颁奖典礼。</td>
          </tr>
          </tbody>
        </table>

        <br/>
        <h2>竞赛机制</h2>

        <p><strong>1.	竞赛初赛</strong></p>
        <p>
          竞赛初赛由参赛队伍线下设计模型，对竞赛组织方发布的相应测试数据进行解译，并通过竞赛官网进行在线提交代码与解译结果。开放评测后，每支参赛团每天最多可提交5次程序文件，平台经计算后，成绩将以邮件方式发送至参赛团队邮箱，也可在竞赛官网查看个人成绩及评分排行榜。
        </p>

        <p><strong>1.	竞赛决赛</strong></p>
        <p>
          初赛阶段，各赛题成绩排名前20支团队，经审核后，进入决赛。竞赛决赛要求各参赛队伍基于竞赛组织方提供的云服务器和相应测试数据进行算法现场测试，并进行方案路演展示，由赛组织方将对模型现场解译和处理结果进行审查，并依据评分标准对解译结果进行综合评价。
        </p>

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

        <h2>报名须知</h2>

        <ol>
          <li>
            <strong>报名方式</strong>
            <ul>
              <li>
                <p>大赛采用在线注册的方式进行报名参赛。参赛队伍可登陆“遥感图像稀疏表征与智能分析竞赛”官方网站（http://RSCup.eyecool.cn）进行注册与报名，提交报名信息后2个工作日内收到主办方回复邮件即为报名成功。</p>
              </li>
            </ul>
          </li>

          <li>
            <strong>联系方式</strong>
            <ul>
              <li>
                <p>网&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;址：http://sin.xintongconference.com &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; http://RSCup.eyecool.cn
                </p>
              </li>
              <li>
                <p>通讯邮箱：ygyxds2019@163.com &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;rscup@eyecool.cn
                </p>
              </li>
              <li>
                <p>联&nbsp;系&nbsp;人&nbsp;：龙&nbsp; &nbsp;洋 &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;189-0862-7409
                </p>
              </li>
            </ul>
          </li>

        </ol>

        <br/>
        <h2>注意事项</h2>

        <p><strong>报名与组队要求</strong></p>
        <ol>
          <li>
            每个参赛团队组成人数不得超过4人；
          </li>
          <li>
            团队名称不得包含不文明字词，不可侵犯任何第三方的知识产权、隐私权、宣传权，或其他适用的法律法规；
          </li>
          <li>
            每个参赛团队需有一名队长，负责与竞赛主办方沟通；
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
            算法软件不得违反国家相关法律法规，不得侵犯他人知识产权。软件若违反上述规定引起知识产权异议和纠纷，其责任由参赛者承担;
          </li>
          <li>
            各参赛团队参加本次竞赛所提交的所有软件及相关成果，组委会有权用于后期大赛相关宣传工作;
          </li>
          <li>
            各参赛团队从竞赛组委会获取的样本数据仅限于在本团队内部使用，不得出售或租赁、不得泄露或外传，不使用到与本次竞赛无关项目中。
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
