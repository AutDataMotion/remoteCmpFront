import React from "react";
import './InfomStyle.css'



export default class ThemeInfo5 extends React.Component {
  static displayName = 'ThemeInfo5';

  render(){

    return (
      <div className={'info-paragraph'} >
        <h1>
          主题五：遥感卫星视频目标自动跟踪
        </h1>
        <h2>
          （1）&nbsp;&nbsp; 竞赛说明
        </h2>

        <p>
          光学遥感视频卫星目标自动跟踪竞赛即利用算法模型对一段光学遥感卫星视频中的一个目标的位置进行自动化识别与判定，并以矩形边界框的形式进行标识。本项竞赛以包含典型运动目标的光学遥感卫星视频为处理对象，视频以时间上连续的多帧图像的方式提供，参赛队伍使用主办方提供的光学遥感卫星视频进行运动目标自动跟踪处理，主办方依据评分标准对自动跟踪结果进行综合评价。
        </p>
        <h2>
          （2）&nbsp;&nbsp; 竞赛数据
        </h2>
        <p>
          竞赛中将提供多段高分辨率光学卫星遥感视频，以及对应的目标自动跟踪标注数据集。如图1所示，展示了本项竞赛遥感卫星视频数据目标样本。
        </p>
        <div className={'info-paragraph-text-center'}>
          <img
            className="info-paragraph-img"
            src={require('./imgs/t5_1.png')}
            alt=""
          />
          <p >
            图1 卫星遥感视频目标自动跟踪样本示例
          </p>
        </div>
        <p>
          <br/>
        </p>
      </div>
    );
  };
}
