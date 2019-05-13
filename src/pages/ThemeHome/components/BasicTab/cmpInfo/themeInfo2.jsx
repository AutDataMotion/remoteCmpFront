import React from "react";
import './InfomStyle.css'

export default class ThemeInfo2 extends React.Component {
  static displayName = 'ThemeInfo2';

  render() {

    return (
      <div className={'info-paragraph'}>
        <h1>
          主题二：遥感图像目标检测
        </h1>
        <h2>
          （1）&nbsp;&nbsp; 竞赛说明
        </h2>
        <p>遥感图像目标检测识别竞赛即利用算法模型对遥感图像中的一个或多个目标的类别和位置进行自动化判定与识别。本项竞赛以包含典型地物目标的遥感图像为处理对象，参赛队伍使用主办方提供的图像进行带方向的目标检测与识别处理，主办方依据评分标准对检测识别结果进行综合评价。</p>
        <h2>
          （2）&nbsp;&nbsp; 竞赛数据
        </h2>
        <p>
          竞赛中将提供包含多类目标的大规模遥感图像样本数据集，目标样本采用四边形边界框的形式进行标注。如图2所示，展示了本项竞赛数据集样本实例（大型交通工具、游泳池、直升机、桥梁、飞机、船舶、足球场、篮球场、集装箱起重机、运动场、小型汽车、码头、棒球场、网球场、转盘、储存罐）。
        </p>
        <div className={'info-paragraph-text-center'}>
          <img
            className="info-paragraph-img"
            src={require('./imgs/t2_1.png')}
            alt=""
          />
          <p >
            图1 遥感图像目标自动检测识别样本示例
          </p>
        </div>
        <p>
          <br/>
        </p>
        <p>
          <br/>
        </p>
      </div>
    );
  };
}
