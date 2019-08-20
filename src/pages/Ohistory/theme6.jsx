import React from "react";
import './historyStyle.css'
import globalConf from "../../globalConfig";
import { InlineMath, BlockMath } from 'react-katex';



export default class Theme6 extends React.Component {
  static displayName = 'Theme6';

  render() {

    return (
      <div className={'info-paragraph-history'}>
        <h1>
          决赛加分赛：基于华为昇腾AI处理器的遥感图像解译
        </h1>
        <h2>
          （1）竞赛说明
        </h2>
        <p>
          进入“遥感图像稀疏表征与智能分析竞赛”决赛的团队参加本项加分赛。本项加分赛由大赛主办方提供华为Atlas 200 DK AI开发者套件和遥感图像测试数据集，要求参赛队伍将参与决赛的算法模型移植于华为Atlas 200 DK AI开发者套件，并在对应遥感图像测试数据集上实现算法模型的推理计算。
        </p>

        <h2>
          （2）竞赛资源
        </h2>
        <p>
          竞赛数据：加分赛采用的测试数据与各赛题决赛阶段测试数据相同。竞赛中将根据参赛队伍参加的赛题 (遥感图像场景分类、遥感图像目标检测、遥感图像语义分割、遥感图像变化检测、遥感卫星视频目标跟踪)，提供对应的决赛测试数据。
        </p>
        <p>
          竞赛设备：竞赛主办方将为参加决赛加分赛的团队提供华为Atlas 200 DK AI开发者套件和详细技术文档 (<a href={globalConf.genUrlFront('2019_att1.docx')}>【点击下载】</a>)，由各参赛队伍携带笔记本电脑进行环境搭建、模型移植和图像解译模型推理计算。为方便参赛队伍参与决赛加分赛，华为技术有限公司提供了Atlas 200 DK线上培训课程(<a href="http://www.bizconfstreaming.cn/webcast/huawei190628.html" target="_blank">【点击观看】</a>)，同时构建了Atlas 200 DK AI开发者讨论区(<a href="https://www.huawei.com/minisite/ascend/cn/index.html" target="_blank">【点击进入】</a>)，提供Atlas 200 DK AI开发者套件的详细介绍、安装配置、开发指导、体验指引、Q&A等资源，参赛队员可在社区自由下载开发资源及提问交流。决赛加分赛实施期间，竞赛主办方也将组织专家提供技术指导。
        </p>
        <p>
          Atlas 200 DK AI开发者套件介绍：华为Atlas 200 DK AI开发者套件是以华为Ascend 310芯片为核心的一个开发者板形态产品，主要功能是将Ascend 310芯片的核心功能通过该板上的外围接口开放出来，方便用户快速简捷的接入并使用Ascend 310芯片强大的处理能力。得益于昇腾芯片的全栈全场景能力，基于Atlas 200 DK AI开发者套件开发的程序只需一次开发，即可实现端、边、云全场景部署。可以运用于平安城市、无人机、机器人、视频服务器、闸机等众多领域的开发。
        </p>
        <div className={'info-paragraph-text-center'}>
          <br />
          <a href="https://www.vmall.com/product/10086085080100.html?cid=78120" target="_blank">
          <img
            // className="info-paragraph-img"
            height="195px" width="360px" hspace="10px"
            src={require('./imgs/atlas200dk0.png')}
            alt=""
          />
          {/* <p id="figure-name">
            图1 {globalConf.themeConf[themeId].title}Atlas 200 DK
          </p> */}
          </a>
          <a href="https://www.vmall.com/product/10086085080100.html?cid=78120" target="_blank">
          <img
            // className="info-paragraph-img"
            height="195px" width="506px" hspace="10px"
            src={require('./imgs/atlas200dk2.png')}
            alt=""
          />
          {/* <p id="figure-name">
            图1 {globalConf.themeConf[themeId].title}Atlas 200 DK
          </p> */}
          </a>
        </div>

        <h2>
          （3）处理/提交结果
        </h2>
        <p>
          参赛队伍需基于华为Atlas 200 DK AI开发者套件实现算法模型移植，并在对应测试数据集上实现算法模型的推理计算，考核算法模型的精度指标和效率指标。
          推理计算结果输出、提交方式分别与各参赛队伍所参加赛题的初赛对应要求一致。
        </p>

        <h2>
          （4）评分规则
        </h2>
        <p>
          决赛加分赛将同时考察算法模型的精度指标和效率指标，模型精度和模型效率均按照归一化分数进行统计并作为决赛成绩排名依据，决赛加分赛精度指标成绩和效率指标成绩各占决赛总成绩的5%。
          加分赛各赛题模型精度指标采用与初赛相同的评价机制(详情参考竞赛官网各竞赛主题页面“评分规则”)。模型效率指标即参赛队伍在加分赛阶段，基于赛题给定的测试数据集进行算法模型测试所花费的总时间，并归一化至百分制得分。模型效率指标从模型运行时开始计时，至模型运行结束时停止计时，假设所花费的总时间为<InlineMath math={'t'}/>，以6小时为基础归一化为百分制，<InlineMath math={'t=0'}/>时得分为100分，<InlineMath math={'t>=6'}/>时得分为0分，<InlineMath math={'0<t<6'}/>时，得分为<InlineMath math={'s=-50t/3+100'}/>。
        </p>

        <p>
          <br/>
        </p>
      </div>
    );
  };
}

const styles = {
  sOverview: {
    marginTop: '20px',
  },
  textCenter: {
    textAlign: 'center',
    whiteSpace:'pre',
  },
  textRight: {
    textAlign: 'right',
    whiteSpace:'pre',
    fontSize: '16px',
  },
  textLeft: {
    textAlign: 'left',
    whiteSpace:'pre',
    fontSize: '16px',
  },
}
