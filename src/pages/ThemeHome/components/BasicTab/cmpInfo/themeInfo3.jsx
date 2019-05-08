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
          &nbsp; &nbsp; &nbsp;&nbsp;◼ 竞赛任务：遥感图像语义分割竞赛即利用遥感图像中各类地物光谱信息和空间信息进行分析，将图像中具有语义信息的各个像元分别赋予语义类别标签。本项竞赛以包含典型土地利用分类的光学遥感图像为处理对象，参赛队伍使用主办方提供的遥感图像进行土地利用类型语义分割处理，主办方依据评分标准对检测识别结果进行综合评价。
        </p>
        <p>
           &nbsp; &nbsp; &nbsp;&nbsp;◼ 竞赛目的：通过对遥感图像的语义分割，可方便快捷地获取土地利用/覆盖信息，并作为精准农业、城市规划、环境保护、土地资源管理等应用的数据支撑。目前针对遥感图像像素级分类的前沿算法已能达到很高的精度，然而现有研究工作都局限于较小的地面区域和较为单一的遥感数据，造成这些算法对于多源图像的适应能力极为有限。因此，通过本项竞赛遴选出利用遥感数据向地学知识进行高效转化的算法模型，获取泛化能力强大的遥感语义分割算法，进而对多源数据、广域区域进行快速准确的土地利用/覆盖信息提取，从而提升空间信息网络建设中遥感图像解译的自动化程度和实际应用能力。
        </p>
        <h2>
          （2）&nbsp;&nbsp; 竞赛数据
        </h2>
        <p>
           &nbsp; &nbsp; &nbsp;&nbsp;◼ 数据类型：高分二号卫星，空间分辨率为1米全色/4米多光谱遥感图像
        </p>
        <p>
           &nbsp; &nbsp; &nbsp;&nbsp;◼ 语义类型：耕地，林地，水域，草地，建筑区
        </p>
        <p>
           &nbsp; &nbsp; &nbsp;&nbsp;◼ 数据准备：已完成150景大尺度遥感图像语义分割数据集的构建，覆盖中国60个以上城市，覆盖面积超5万平方公里，类内差异大、类间差异小，符合土地利用覆盖现实分布状态。竞赛中将提供不少于100幅的语义标记图像数据作为训练和验证数据，后续将扩展多幅遥感图像语义标记图像用于竞赛测试数据。
        </p>
        <p>
           &nbsp; &nbsp; &nbsp;&nbsp;◼ 图像尺寸：6800 x 7200
        </p>
        <p>
           &nbsp; &nbsp; &nbsp;&nbsp;◼ 数据格式：TIF格式
        </p>
        <p>
           &nbsp; &nbsp; &nbsp;&nbsp;◼ 数据质量：经过辐射校正和几何校正，无云雾遮挡
        </p>
        <p>
          &nbsp; &nbsp; &nbsp;&nbsp;◼ 数据样本：如图1所示展示了本项竞赛数据集部分遥感图像语义分割数据样本
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
