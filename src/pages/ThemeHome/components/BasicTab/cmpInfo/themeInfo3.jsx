import React from "react";
import './InfomStyle.css'
import globalConf from "../../../../../globalConfig";



export default class ThemeInfo3 extends React.Component {
  static displayName = 'ThemeInfo3';

  render(){

    return (
      <div className={'info-paragraph'}>
        <h1>
          {globalConf.themeConf[2].bannerTitle+globalConf.themeConf[2].title}
        </h1>
        <h2>
          （1）&nbsp;&nbsp; 竞赛说明
        </h2>
        <p>
          遥感图像语义分割竞赛即利用遥感图像中各类地物光谱信息和空间信息进行分析，将图像中具有语义信息的各个像元分别赋予语义类别标签。本项竞赛以包含典型土地利用分类的光学遥感图像为处理对象，参赛队伍使用主办方提供的遥感图像进行土地利用类型语义分割处理，主办方依据评分标准对检测识别结果进行综合评价。
        </p>
        <h2>
          （2）&nbsp;&nbsp; 竞赛数据
        </h2>

        <p>
          竞赛中将提供包含典型土地利用类型（水田、水浇地、旱耕地、园地、乔木林地、灌木林地、天然草地、人工草地、工业用地、城市住宅、村镇住宅、交通运输、河流、湖泊、坑塘以及其他类别）的遥感图像语义分割数据集（TIF格式）。如图1所示，展示了本项竞赛遥感图像语义分割数据集部分样本及标注数据。
        </p>
        <div className={'info-paragraph-text-center'}>
          <img
            className="info-paragraph-img"
            src={require('./imgs/t3_1.png')}
            alt=""
          />
          <p >
            图1 {globalConf.themeConf[2].title}样本示例
          </p>
        </div>


        <h2>
          （3）	处理/提交结果
        </h2>
        <p>
          ◼ 参赛者需在测试集图像上每个像素位置分配一个土地利用语义类别标签
        </p>
        <p>
          ◼ 结果输出：TIF格式的分类图；最终结果以zip压缩文件格式提交。
        </p>
        <p>
          TIF格式分类图标记要求(提交范例：segmentation.zip)如下：
        </p>
        <table>
          <thead>
          <tr><th colSpan="2"></th></tr>
          <tr>
            <th style={styles.textCenter} width="100px"></th>
            <th style={styles.textCenter} width="200px"></th>
          </tr>
          </thead>
          <tbody>

          <tr> <td style={styles.textRight}>水    田     </td><td style={styles.textLeft}>（R:0, G:200, B:0）</td></tr>
          <tr> <td style={styles.textRight}>水 浇 地     </td><td style={styles.textLeft}>（R:150, G:250, B:0）</td></tr>
          <tr> <td style={styles.textRight}>旱 耕 地     </td><td style={styles.textLeft}>（R:150, G:200, B:150）</td></tr>
          <tr> <td style={styles.textRight}>园    地     </td><td style={styles.textLeft}>（R:200, G:0, B:200）</td></tr>
          <tr> <td style={styles.textRight}>乔木林地     </td><td style={styles.textLeft}>（R:150, G:0, B:250）</td></tr>
          <tr> <td style={styles.textRight}>灌木林地     </td><td style={styles.textLeft}>（R:150, G:250, B:250）</td></tr>
          <tr> <td style={styles.textRight}>天然草地     </td><td style={styles.textLeft}>（R:250, G:200, B:0）</td></tr>
          <tr> <td style={styles.textRight}>人工草地     </td><td style={styles.textLeft}>（R:200, G:200, B:0）</td></tr>
          <tr> <td style={styles.textRight}>工业用地     </td><td style={styles.textLeft}>（R:200, G:0, B:0）</td></tr>
          <tr> <td style={styles.textRight}>城市住宅     </td><td style={styles.textLeft}>（R:250, G:0, B:150）</td></tr>
          <tr> <td style={styles.textRight}>村镇住宅     </td><td style={styles.textLeft}>（R:200, G:150, B:150）</td></tr>
          <tr> <td style={styles.textRight}>交通运输     </td><td style={styles.textLeft}>（R:250, G:150, B:150）</td></tr>
          <tr> <td style={styles.textRight}>河    流     </td><td style={styles.textLeft}>（R:0, G:0, B:200）</td></tr>
          <tr> <td style={styles.textRight}>湖    泊     </td><td style={styles.textLeft}>（R:0, G:150, B:200）</td></tr>
          <tr> <td style={styles.textRight}>坑    塘     </td><td style={styles.textLeft}>（R:0, G:200, B:250）</td></tr>
          <tr> <td style={styles.textRight}>其他类别     </td><td style={styles.textLeft}>（R:0, G:0, B:0）</td></tr>

          </tbody>
        </table>

        <p>
          ◼ 提交方式：初赛和决赛阶段均需在竞赛官网在线提交竞赛对应测试数据集的语义分割输出结果（TIF格式图像）；决赛阶段需同时提交遥感图像语义分割算法模型、算法模型介绍、源代码及运行测试说明等相关文档。
        </p>

        <h2>
          （4） 评分规则
        </h2>
        <p>
          比赛初赛成绩主要采用Kappa系数指标。比赛最终成绩由大赛评委会专家根据Kappa系数作为得分进行排名，Kappa系数越高，遥感图像语义分割结果越准确，排名越靠前。比赛决赛成绩将基于算法模型精度、效率、规模等指标加权，对算法模型性能进行综合评估与排名。
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
  },
  textLeft: {
    textAlign: 'left',
    whiteSpace:'pre',
  },
}
