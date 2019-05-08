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
           &nbsp; &nbsp; &nbsp;&nbsp;◼ 竞赛任务：光学遥感视频卫星目标自动跟踪竞赛即利用算法模型对一段光学遥感卫星视频中的一个目标的位置进行自动化识别与判定，并以矩形边界框的形式进行标识。本项竞赛以包含典型运动目标的光学遥感卫星视频为处理对象，视频以时间上连续的多帧图像的方式提供，参赛队伍使用主办方提供的光学遥感卫星视频进行运动目标自动跟踪处理，主办方依据评分标准对自动跟踪结果进行综合评价。
        </p>
        <p>
           &nbsp; &nbsp; &nbsp;&nbsp;◼ 竞赛目的：利用光学遥感卫星视频可以实现指定目标监控，在机场、商场、道路流量监测等方面具有重要的应用价值，但是，卫星视频数据存在目标尺寸相对较小、背景抖动、目标大范围旋转等问题，自动化跟踪是实现应用的一个难点。针对空间信息网络多维、多尺度空间信息链路传输与处理瓶颈，通过本项竞赛遴选优秀的光学遥感卫星视频目标自动跟踪算法模型，实现空间信息网络对地物目标的在线实时跟踪，同时将跟踪结果经链路直接传回，提高空间信息网络在轨实时处理能力和链路传输效率。
        </p>
        <h2>
          （2）&nbsp;&nbsp; 竞赛数据
        </h2>
        <p>
           &nbsp; &nbsp; &nbsp;&nbsp;◼ 数据类型：高分辨率光学卫星遥感视频，吉林一号，空间分辨率1米，每一段视频由时间上连续的多帧图像组成
        </p>
        <p>
           &nbsp; &nbsp; &nbsp;&nbsp;◼ 目标类型：包含车辆、飞机、舰船、火车等典型运动目标
        </p>
        <p>
           &nbsp; &nbsp; &nbsp;&nbsp;◼ 数据准备：已完成15段视频（总计帧数约4000帧）的高分辨率视频卫星目标自动跟踪数据集的标注。竞赛将提供不少于20段（总计帧数≥6000帧）的卫星视频数据，以及每个待跟踪目标在第一帧中的准确位置用于算法测试
        </p>
        <p>
           &nbsp; &nbsp; &nbsp;&nbsp;◼ 图像尺寸：400Í400，4000Í4000
        </p>
        <p>
           &nbsp; &nbsp; &nbsp;&nbsp;◼ 图像格式：TIFF格式或JPEG格式
        </p>
        <p>
           &nbsp; &nbsp; &nbsp;&nbsp;◼ 数据质量：经过辐射校正
        </p>
        <p>
          &nbsp; &nbsp; &nbsp;&nbsp;◼ 数据样本：如图1 所示展示了本项竞赛中遥感卫星视频数据目标样本
        </p>
        <div className={'info-paragraph-text-center'}>
          <img
            className="info-paragraph-img"
            src={require('./imgs/t5_1.png')}
            alt=""
          />
          <p >
            图1 光学卫星遥感视频目标自动跟踪样本示例
          </p>
        </div>
        <p>
          <br/>
        </p>
      </div>
    );
  };
}
