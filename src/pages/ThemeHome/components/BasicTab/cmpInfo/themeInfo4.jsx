import React from "react";
import './InfomStyle.css';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

import globalConf from "../../../../../globalConfig";



export default class ThemeInfo4 extends React.Component {
  static displayName = 'ThemeInfo4';

  render(){

    return (
      <div className={'info-paragraph'}>
        <h1>
          {globalConf.themeConf[3].bannerTitle+globalConf.themeConf[3].title}
        </h1>
        <h2>
          （1）&nbsp;&nbsp; 竞赛说明
        </h2>

        <p>
          遥感图像变化检测即利用多时相的遥感数据分析并确定地表覆盖变化的特征与过程，将多时相图像中随时间变化的像元赋予变化语义类别标签。本项竞赛以光学遥感图像为处理对象，参赛队伍使用主办方提供的遥感图像进行建筑物变化检测，主办方根据评分标准对变化检测结果进行综合评价。
        </p>
        <h2>
          （2）&nbsp;&nbsp; 竞赛数据
        </h2>

        <p>
          竞赛中将提供两个不同时间获取的大尺度高分辨率遥感图像（包含蓝、绿、红和近红外四个波段），以及图像中变化区域的二值化标注数据集。如图1所示，展示了本项竞赛数据集部分遥感图像变化检测数据样本。
        </p>
        <div className={'info-paragraph-text-center'}>
          <img
            className="info-paragraph-img"
            src={require('./imgs/t4_1.png')}
            alt=""
          />
          <p id='figure-name'>
            图1 {globalConf.themeConf[3].title}样本示例
          </p>
        </div>


        <h2>
          （3）	处理/提交结果
        </h2>
        <p>
          ◼&nbsp; 参赛者需要在测试集图像上每个像素位置分配一个变化检测类别标签。
        </p>
        <p>
          ◼&nbsp; 结果输出：TIF格式二值化分类图像；最终结果以zip压缩文件格式提交，TIF格式二值化分类图存放于zip压缩包根目录下。
        </p>
        <p>
          二值化分类图标记要求 (提交范例：change.zip<a href={globalConf.themeConf[3].zipUrl()}>【点击下载】</a>) 如下：
        </p>
        <table>
          <thead>
          <tr><th colSpan="3"></th></tr>
          <tr>
            <th style={styles.textCenter} width="200px"></th>
          </tr>
          </thead>
          <tbody>
          <tr> <td style={styles.textCenter}>无变化区域像素值： </td><td style={styles.textLeft}>0</td>  </tr>
          <tr> <td style={styles.textCenter}>变化区域像素值： </td><td style={styles.textLeft}>255</td>  </tr>
          </tbody>
        </table>

        <p>
          ◼&nbsp; 提交方式：初赛和决赛阶段均需在竞赛官网在线提交竞赛对应测试数据集的变化检测输出结果 (TIF格式二值化图像)；决赛阶段需同时提交遥感图像变化检测算法模型、算法模型介绍、源代码及运行测试说明等相关文档。
        </p>

        <h2>
          （4） 评分规则
        </h2>
        <p>
          变化检测算法评价采用指标主要包括检测率 (Precision)，召回率 (Recall) 和 F<sub>1</sub>得分。其中：
        </p>
        <p>
          Precision = 检出的正确变化地物面积 / 检出的变化地物面积
        </p>
        <p>
          Recall = 检出的正确变化地物面积 / 影像中实际变化地物面积
        </p>
        <p>
          <BlockMath math={'F_1=2 \\times \\frac{precision \\times recall}{precision+recall}'}/>
        </p>
        <p>
          比赛初赛成绩由大赛评委会专家根据 F<sub>1</sub>得分进行排名， F<sub>1</sub>值越高，遥感图像语变化检测结果越准确，排名越靠前。比赛决赛成绩将基于算法模型精度、效率、规模等指标加权，对算法模型性能进行综合评估与排名。
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
    fontSize: '13px',
  },
  textRight: {
    textAlign: 'right',
    whiteSpace:'pre',
  },
  textLeft: {
  textAlign: 'left',
  whiteSpace: 'pre',
  fontSize: '13px',
  fontFamily: 'Times New Roman',
  }
}
