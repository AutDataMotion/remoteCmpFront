import React from "react";
import './InfomStyle.css'



export default class ThemeInfo3 extends React.Component {
  static displayName = 'ThemeInfo3';

  render(){

    return (
      <div className={'info-paragraph'}>
        <h1>
          主题三：遥感图像语义分割
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
          竞赛中将提供包含典型土地利用类型（耕地，林地，水域，草地，建筑区）的遥感图像语义分割数据集（TIF格式）。如图3所示，展示了本项竞赛遥感图像语义分割数据集部分样本及标注数据。
        </p>
        <div className={'info-paragraph-text-center'}>
          <img
            className="info-paragraph-img"
            src={require('./imgs/t3_1.png')}
            alt=""
          />
          <p >
            图1 遥感图像语义分割样本示例
          </p>
        </div>
        <p>
          <br/>
        </p>

      </div>
  );
  };
}
