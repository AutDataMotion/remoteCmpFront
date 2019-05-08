import React from "react";
import './InfomStyle.css'

export default class ThemeInfo2 extends React.Component {
  static displayName = 'ThemeInfo2';

  render() {

    return (
      <div className={'info-paragraph'}>
        <h1>
          主题二：光学遥感图像目标检测
        </h1>
        <h2>
          （1）&nbsp;&nbsp; 竞赛说明
        </h2>
        <p>
          &nbsp; &nbsp; &nbsp;&nbsp;◼ 竞赛任务：光学遥感图像目标自动检测识别竞赛即利用算法模型对光学遥感图像中的一个或多个目标的类别和位置进行自动化识别与判定。本项竞赛以包含典型地物目标的光学遥感图像为处理对象，参赛队伍使用主办方提供的图像进行带方向的目标检测与识别处理，主办方依据评分标准对检测识别结果进行综合评价。
        </p>
        <p>
          &nbsp; &nbsp; &nbsp;&nbsp;◼ 竞赛目的：针对空间信息网络多维、多尺度空间信息链路传输与处理瓶颈，通过本项竞赛遴选优秀的光学遥感图像目标自动检测识别算法模型，对光学遥感图像中感兴趣的目标对象进行检测识别，并依据检测结果对遥感图像进行基于目标内容的智能压缩，实现对目标区域无损压缩，对非目标区域进行大幅压缩，从而保留数据中感兴趣区域的信息，同时去除背景等冗余信息，提高空间信息网络链路传输的效率。
        </p>
        <h2>
          （2）&nbsp;&nbsp; 竞赛数据
        </h2>
        <p>
          &nbsp; &nbsp; &nbsp;&nbsp;◼ 数据类型：基于吉林一号、高分二号和谷歌地球的高分辨率光学卫星遥感图像，空间分辨率为0.12 ~ 3米
        </p>
        <p>
          &nbsp; &nbsp; &nbsp;&nbsp;◼  目标类型：飞机（客机，小型商务机，战斗机，预警机）、船只（小船，客船，货船，军舰）、交通工具（小型交通工具，大型交通工具，牵引车），游泳池，桥梁，足球场，篮球场，运动场，码头，棒球场，网球场，马路转盘，储蓄罐，集装箱起重机、风力发电站、直升机场、灯塔
        </p>
        <p>
          &nbsp; &nbsp; &nbsp;&nbsp;◼ 数据准备：已构建15类光学遥感图像目标样本数据集，为目前全球最大规模的遥感图像目标检测数据集，完成目标检测竞赛任务部分数据集构建。后续将继续对该数据集目标样本类别和规模进行扩展，竞赛中将提供的遥感图像数据不少于10000幅 ，目标数不少于30万。
        </p>
        <p>
          &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;图像尺寸：800x800 ~ 4000x4000
        </p>
        <p>
          &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;图像格式：PNG格式
        </p>
        <p>
          &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;数据质量：经过辐射校正和几何校正
        </p>
        <p>
          &nbsp; &nbsp; &nbsp;&nbsp;◼  数据样本：如图1所示展示了本项竞赛数据集部分场景类别（大型交通工具、游泳池、直升机、桥梁、飞机、船舶、足球场、篮球场、运动场、小型汽车、码头、棒球场、网球场、转盘、储存罐）
        </p>
        <div className={'info-paragraph-text-center'}>
          <img
            className="info-paragraph-img"
            src={require('./imgs/t2_1.png')}
            alt=""
          />
          <p >
            图1 光学遥感图像目标自动检测识别样本示例
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
