import React from "react";
import './InfomStyle.css'
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import globalConf from "../../../../../globalConfig";

export default class ThemeInfo2 extends React.Component {
  static displayName = 'ThemeInfo2';

  render() {

    return (
      <div className='info-paragraph'>
        <h1>
          {globalConf.themeConf[1].bannerTitle+globalConf.themeConf[1].title}
        </h1>
        <h2>
          （1）竞赛说明
        </h2>
        <p>
          遥感图像目标检测识别竞赛即利用算法模型对遥感图像中的一个或多个目标的类别和位置进行自动化判定与识别。本项竞赛以包含典型地物目标的遥感图像为处理对象，参赛队伍使用主办方提供的图像进行带方向的目标检测与识别处理，主办方依据评分标准对检测识别结果进行综合评价。
        </p>
        <h2>
          （2）竞赛数据
        </h2>
        <p>
          竞赛中将提供包含多类目标的大规模遥感图像样本数据集，目标样本采用四边形边界框的形式进行标注。如图1所示，展示了本项竞赛数据集样本实例 (大型车辆、游泳池、直升机、桥梁、飞机、船舶、足球场、篮球场、机场、集装箱起重机、田径场、小汽车、码头、棒球场、网球场、转盘、储存罐、直升机场)。
        </p>
        <div className={'info-paragraph-text-center'}>
          <img
            className="info-paragraph-img"
            src={require('./imgs/t2_1.png')}
            alt=""
          />
          <p id='figure-name'>
            图1 {globalConf.themeConf[1].title}样本示例
          </p>
        </div>

        <h2>
          （3）	处理/提交结果
        </h2>
        <p>
          ◼&nbsp; 参赛者需对测试集中每一幅遥感图像中目标进行检测，给出所识别目标的四边形边界框四个顶点坐标，并判定其类别。
        </p>
        <p>
          ◼&nbsp; 结果输出：txt格式，每个类别目标的检测结果均需建立一个文本文件。文件每一行代表判定属于该类检测目标的遥感图像名称、属于该类别的置信度以及检测到的目标四边形顶点坐标；最终结果以zip压缩文件格式提交。
        </p>
        <p>
          图像名称、目标类别置信度和目标范围四个顶点坐标以空格隔开，格式示例 (提交范例：detection.zip<a href={globalConf.themeConf[1].zipUrl()}>【点击下载】</a>) 如下：
        </p>
        <table>
          <thead>
          <tr><th colSpan="3"></th></tr>
          <tr>
            <th style={styles.textCenter} width="400px"></th>
          </tr>
          </thead>
          <tbody>
          <tr> <td style={styles.textCenter}>P0125     0.99     x<sub>1</sub>  y<sub>1</sub>  x<sub>2</sub>  y<sub>2</sub>  x<sub>3</sub>  y<sub>3</sub>  x<sub>4</sub>  y<sub>4</sub></td>  </tr>
          <tr> <td style={styles.textCenter}>P2563     0.95     x<sub>1</sub>  y<sub>1</sub>  x<sub>2</sub>  y<sub>2</sub>  x<sub>3</sub>  y<sub>3</sub>  x<sub>4</sub>  y<sub>4</sub></td>  </tr>
          <tr> <td style={styles.textCenter}>  ...  </td></tr>
          <tr> <td style={styles.textCenter}>P1608     0.90     x<sub>1</sub>  y<sub>1</sub>  x<sub>2</sub>  y<sub>2</sub>  x<sub>3</sub>  y<sub>3</sub>  x<sub>4</sub>  y<sub>4</sub></td>  </tr>
          </tbody>
        </table>

        <p>
          ◼&nbsp; 提交方式：初赛和决赛阶段均需在竞赛官网在线提交竞赛对应测试数据集的目标检测输出结果；决赛阶段需同时提交遥感图像目标检测算法模型、算法模型介绍、源代码及运行测试说明等相关文档。
        </p>

        <h2>
          （4） 评分规则
        </h2>
        <p>
          {/*
          比赛初赛成绩主要采用平均精度均值（<InlineMath math={'mAP'}/>）指标。
          首先计算预测目标窗口和真实标记窗口的交并比<InlineMath math={'IoU(Intersection-over-Union)'}/> ，
          若交并比大于0.5则预测正确。然后计算不同类别目标检测的平均精度（<InlineMath math={'AP'}/>），
          最后对所有目标类别的平均精度进行均值计算，即为平均精度均值。
          <InlineMath math={'mAP'}/>值越高，模型对各类别目标检测的性能越好，排名越靠前。
          比赛决赛成绩将基于算法模型精度、效率、规模等指标加权，对算法模型性能进行综合评估与排名。
          */}

          比赛初赛算法评价主要采用平均精度均值 (mAP) 指标。
          首先计算预测目标窗口和真实标记窗口的交并比IoU (Intersection-over-Union)，
          若交并比大于0.5则预测正确。然后计算不同类别目标检测的平均精度 (AP)，
          最后对所有目标类别的平均精度进行均值计算，即为平均精度均值。mAP值越高，模型对各类别目标检测的性能越好，排名越靠前。
          比赛决赛成绩将基于算法模型精度、效率、规模等指标加权，对算法模型性能进行综合评估与排名。
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
    fontSize: '14px',
    fontFamily: 'Times New Roman',
  },
  textRight: {
    textAlign: 'right',
    whiteSpace:'pre',
  },
}
