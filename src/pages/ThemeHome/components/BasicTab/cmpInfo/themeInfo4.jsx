import React from "react";
import './InfomStyle.css'



export default class ThemeInfo4 extends React.Component {
  static displayName = 'ThemeInfo4';

  render(){

    return (
      <div className={'info-paragraph'}>
        <h1>
          主题四：遥感图像变化检测
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
          竞赛中将提供两个不同时间获取的大尺度高分辨率遥感图像（包含蓝、绿、红和近红外四个波段），以及图像中变化区域的二值化标注数据集。如图4所示，展示了本项竞赛数据集部分遥感图像变化检测数据样本。
        </p>
        <div className={'info-paragraph-text-center'}>
          <img
            className="info-paragraph-img"
            src={require('./imgs/t4_1.png')}
            alt=""
          />
          <p >
            图1 遥感图像变化检测样本示例
          </p>
        </div>
        <p>
          <br/>
        </p>
      </div>

    );
  };
}
