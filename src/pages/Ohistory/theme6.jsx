import React from "react";
import './historyStyle.css'
import globalConf from "../../globalConfig";


export default class Theme6 extends React.Component {
  static displayName = 'Theme6';

  render() {

    return (
      <div className={'info-paragraph-history'}>
        <h1>
          决赛加分赛：基于华为昇腾人工智能处理器的遥感图像解译
        </h1>
        <h2>
          （1）竞赛说明
        </h2>
        <p>
          进入“遥感图像稀疏表征与智能分析竞赛”决赛的团队须参加本项加分赛。本项加分赛由大赛主办方提供华为Atlas 200 DK AI开发者套件和遥感图像测试数据集，要求参赛队伍将参与决赛的算法模型移植于华为Atlas 200 DK AI开发者套件，并在对应遥感图像测试数据集上实现算法模型的推理计算。
        </p>

        <h2>
          （2）竞赛资源
        </h2>
        <p>
          竞赛数据：加分赛采用的测试数据与各赛题决赛阶段测试数据相同。竞赛中将根据参赛队伍参加的赛题 (遥感图像场景分类、遥感图像目标检测、遥感图像语义分割、遥感图像变化检测、遥感卫星视频目标跟踪)，提供对应的决赛测试数据。
        </p>
        <p>
          竞赛设备：竞赛主办方将为参加决赛加分赛的团队提供华为Atlas 200 DK AI开发者套件和详细技术文档 (请参考附件一<a href={globalConf.genUrlFront('2019_att1.docx')}>【点击下载】</a>)，由各参赛队伍携带笔记本电脑进行环境搭建、模型移植和图像解译模型推理计算。决赛加分赛实施期间，竞赛主办方也将组织专家提供技术指导。
        </p>
        <h2>
          （3）处理/提交结果
        </h2>
        <p>
          参赛队伍需基于华为Atlas 200 DK AI开发者套件实现算法模型移植，并在对应测试数据集上实现算法模型的推理计算。其结果输出、提交方式分别与各参赛队伍所参加赛题的对应要求一致。
        </p>

        <h2>
          （4）评分规则
        </h2>
        <p>
          决赛加分赛中，遥感图像解译结果的评价方式与各参赛队伍所参加赛题的评价方式一致。大赛评委会专家将根据参赛队伍现场算法模型测试成绩和加分赛成绩进行加权综合评价，并作为决赛阶段最终成绩，具体加权方案将在决赛阶段公布。
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
