import React from "react";
import './InfomStyle.css'
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import globalConf from "../../../../../globalConfig";


const themeId=0;
export default class ThemeInfo1 extends React.Component {
  static displayName = 'ThemeInfo1';

  render() {

    return (
      <div className={'info-paragraph'}>
        <h1>
          {globalConf.themeConf[themeId].bannerTitle+globalConf.themeConf[themeId].title}
        </h1>
        <h2>
          （1） 竞赛说明
        </h2>
        <p>
          遥感图像场景分类是指从多幅遥感图像中区分出具有相似场景特征的图像，并对这些图像进行分类，为每一幅遥感图像赋予场景类别标签。本项竞赛针对包含典型的遥感图像场景对象，参赛队伍使用主办方提供的数据对指定的遥感图像进行场景分类，主办方依据评分标准对遥感图像场景分类结果进行综合评价。
        </p>

        <h2>
          （2） 竞赛数据
        </h2>
        <p>
          {/* 竞赛中将提供包含多类典型场景的遥感图像数据集，场景类型和标签包括：旱地（1）、水田（2）、梯田（3）、草地（4）、林地（5）、商业区（6）、油田（7）、油罐区（8）、工厂（9）、矿区（10）、太阳能发电厂（11）、风力发电站（12）、公园（13）、游泳池（14）、教堂（15）、墓地（16）、棒球场（17）、篮球场（18）、高尔夫球场（19）、足球场（20）、温室（21）、网球场（22）、居民区（23）、岛屿（24）、河流（25）、停机坪（26）、直升机场（27）、机场跑道（28）、桥梁（29）、停车场（30）、公路（31）、路边停车区（32）、转盘（33）、立交桥（34）、港口（35）、铁路（36）、火车站（37）、裸地（38）、沙漠（39）、冰岛（40）、山地（41）、石质地（42）、稀疏灌木地（43）、海滩（44）、湖泊（45）。如图 1 所示，展示了本项竞赛数据集各类别场景样本。 */}
          竞赛中将提供包含多个类别场景的遥感图像数据集，场景类型和标签包括：旱地 (1)、水田 (2)、梯田 (3)、草地 (4)、林地 (5)、商业区 (6)、油田 (7)、油罐区 (8)、工厂 (9)、矿区 (10)、太阳能发电厂 (11)、风力发电站 (12)、公园 (13)、游泳池 (14)、教堂 (15)、墓地 (16)、棒球场 (17)、篮球场 (18)、高尔夫球场 (19)、足球场 (20)、温室 (21)、网球场 (22)、居民区 (23)、岛屿 (24)、河流 (25)、停机坪 (26)、直升机场 (27)、机场跑道 (28)、桥梁 (29)、停车场 (30)、公路 (31)、路边停车区 (32)、转盘 (33)、立交桥 (34)、港口 (35)、铁路 (36)、火车站 (37)、裸地 (38)、沙漠 (39)、冰岛 (40)、山地 (41)、石质地 (42)、稀疏灌木地 (43)、海滩 (44)、湖泊 (45)。如图 1 所示，展示了本项竞赛数据集各类别场景样本。        
        </p>
        <div className={'info-paragraph-text-center'}>
          <img
            className="info-paragraph-img"
            src={require('./imgs/t1.png')}
            alt=""
          />
          <p id="figure-name">
            图1 {globalConf.themeConf[themeId].title}数据集样本示例
          </p>
        </div>

        <h2>
          （3）	处理/提交结果
        </h2>
        <p>
        ◼&nbsp; 参赛者需对测试集每一幅图像进行分类并给出其预测类别的标签。
        </p>
        <p>
         ◼&nbsp; 结果输出：txt格式，每一幅遥感图像均需给出其预测类别标签，文件每一行代表测试集图像名称以及该图像的预测类别标签；最终结果以zip压缩文件格式提交，预测结果txt文件存放于zip压缩包根目录下，提交文件名称为“classification.zip”。
        </p>
        <p>
          图片名称与场景预测类别标签以空格隔开，格式示例 (提交范例：classification.zip<a href={globalConf.themeConf[themeId].zipUrl()}>【点击下载】</a>) 如下：
        </p>
        <table>
          <thead>
          <tr><th colSpan="3"></th></tr>
          <tr>
            <th style={styles.textCenter} width="200px"></th>
          </tr>
          </thead>
          <tbody>
          <tr> <td style={styles.textCenter}>1034.jpg</td><td style={styles.textCenter}>3</td>  </tr>
          <tr> <td style={styles.textCenter}>0298.jpg</td><td style={styles.textCenter}>12</td>  </tr>
          <tr> <td style={styles.textCenter}>...</td><td style={styles.textCenter}>...</td></tr>
          <tr> <td style={styles.textCenter}>2301.jpg</td><td style={styles.textCenter}>4</td>  </tr>
          </tbody>
        </table>

        <p>
          ◼&nbsp; 提交方式：初赛和决赛阶段均需在竞赛官网在线提交竞赛对应测试数据集的场景分类输出结果；决赛阶段需同时提交遥感图像场景分类算法模型、算法模型介绍、源代码及运行测试说明等相关文档。
        </p>

        <h2>
          （4） 评分规则
        </h2>
        <p>
          {/* 
          本竞赛单元算法评价主要采用整体分类精度（<InlineMath math={'Overall \\quad Accuracy \\quad , \\quad OA'}/> ），选手模型预测的标签与真实标签一致即为场景分类正确。设总测试图像数为<InlineMath math={'N'}/>，分类正确的图像数为<InlineMath math={'M'}/>，则整体分类精度为：<InlineMath math={' OA = M / N'}/>
          */}

          本竞赛单元算法评价主要采用整体分类精度 (Overall Accuracy，OA)，选手模型预测的标签与真实标签一致即为场景分类正确。设总测试图像数为 N，分类正确的图像数为 M，则整体分类精度为：OA = M/N
        </p>
        <p>
          比赛初赛成绩由大赛评委会专家根据整体分类精度作为得分进行排名，整体分类精度越高，遥感图像场景分类结果越准确，排名越靠前。比赛决赛成绩将基于算法模型精度、效率、规模等指标加权，对算法模型性能进行综合评估与排名。
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
    fontFamily: 'Times New Roman',
  },
  textRight: {
    textAlign: 'right',
    whiteSpace:'pre',
  },
  whiteSpaceKeeper:{
    whiteSpace:'pre'
  }
}
