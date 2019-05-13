import React from "react";
import './InfomStyle.css'


export default class ThemeInfo1 extends React.Component {
  static displayName = 'ThemeInfo1';

  render() {

    return (
      <div className={'info-paragraph'}>
        <h1>
          主题一：遥感图像场景分类&nbsp;
        </h1>
        <h2>
          （1） 竞赛说明
        </h2>
        <p>
          &nbsp; &nbsp; &nbsp;&nbsp;遥感图像场景分类是指从多幅遥感图像中区分出具有相似场景特征的图像，并对这些图像进行分类，为每一幅遥感图像赋予场景类别标签。本项竞赛针对包含典型的遥感图像场景对象，参赛队伍使用主办方提供的数据对指定的遥感图像进行场景分类，主办方依据评分标准对遥感图像场景分类结果进行综合评价。
        </p>

        <h2>
          （2） 竞赛数据
        </h2>
        <p>
          &nbsp; &nbsp; &nbsp;&nbsp;竞赛中将提供包含多类典型场景的遥感图像数据集。如图 1 所示，展示了本项竞赛数据集部分场景类别（机场、 裸地、棒球场、山地、公园、停车场、沙滩、活动中心、桥梁、运动场、 池塘、港口、教堂、商业区、高密度住宅区、火车站、游乐场、河流、 沙漠、农田、森林、学校、低密度住宅区、广场、工业区、草地、中密 度住宅区、体育场、存储罐、高架桥）。
        </p>
        <div className={'info-paragraph-text-center'}>
          <img
            className="info-paragraph-img"
            src={require('./imgs/t1_1.png')}
            alt=""
          />
          <p >
            图1 遥感图像场景分类数据集样本示例
          </p>
        </div>

        <h2>
          （3）	处理/提交结果
        </h2>
        <p>
          &nbsp; &nbsp; &nbsp;&nbsp;◼参赛者需对测试集每一幅图像进行分类并给出前5个预测类别的标签。
        </p>
        <p>
          &nbsp; &nbsp; &nbsp;&nbsp;◼ 结果输出：txt格式，每个类别场景的判别结果均需建立一个文本文件。文件每一行代表判定属于该类别的遥感图像名称以及属于该类别的置信度。
        </p>
        <table>
          <thead>
          <tr><th colSpan="3">文件范例：water.txt</th></tr>
          <tr>
            <th style={styles.textCenter} width="60px">序号</th>
            <th style={styles.textCenter} width="60px">置信度</th>
            <th style={styles.textCenter} width="100px">图像名称</th>
          </tr>
          </thead>
          <tbody>
          <tr><td style={styles.textCenter}>1  </td><td style={styles.textCenter}>0.85    </td><td style={styles.textCenter}>1034.png</td> </tr>
          <tr><td style={styles.textCenter}>2  </td><td style={styles.textCenter}>0.93    </td><td style={styles.textCenter}>0298.png</td> </tr>
          <tr> <th colSpan="3">... </th> </tr>
          <tr> <td style={styles.textCenter}>n  </td><td style={styles.textCenter}>0.80    </td><td style={styles.textCenter}>2301.png</td></tr>
          </tbody>
        </table>
        <p>
          &nbsp; &nbsp; &nbsp;&nbsp;◼ 提交方式：初赛和决赛阶段均需在竞赛官网在线提交：① 遥感图像场景分类算法模型；② 竞赛对应测试数据集的场景分类文本输出结果；③ 算法模型介绍，源代码说明及运行测试相关文档。
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
  },
  }
