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
           &nbsp; &nbsp; &nbsp;&nbsp;◼ 竞赛任务：遥感图像变化检测竞赛即利用多时相的遥感数据分析并确定地表覆盖变化的特征与过程，将多时相图像中随时间变化的像元赋予变化语义类别标签。本竞赛以谷歌地球遥感图像为处理对象，参赛队伍使用主办方提供的遥感图像进行变化检测处理，主办方根据评分标准对变化检测结果进行综合评价。
        </p>
        <p>
           &nbsp; &nbsp; &nbsp;&nbsp;◼ 竞赛目的：遥感图像变化检测可以对同一地点的不同时相数据进行变化检测处理，在资源和环境监测、地理国情监测、自然灾害评估等领域具有高度的实用价值。目前遥感图像变化检测的前沿算法在数据层面以及算法设计层面均具有局限性。因此，通过本项竞赛遴选出泛化性能强大的高效变化检测算法，可以提高空间信息网络建设中的遥感图像自动化解译能力。
        </p>
        <p>
          （2）&nbsp;&nbsp; 竞赛数据
        </p>
        <p>
           &nbsp; &nbsp; &nbsp;&nbsp;◼ 数据类型：谷歌地球遥感图像，空间分辨率为0.12~3米
        </p>
        <p>
           &nbsp; &nbsp; &nbsp;&nbsp;◼ 标注类别：无变化、人工变化、自然变化
        </p>
        <p>
           &nbsp; &nbsp; &nbsp;&nbsp;◼ 数据准备：已完成800对遥感图像变化检测数据集的构建，变化类型分为无变化，人工变化以及自然变化，类内差异大、类间差异小，符合现实的变化场景。竞赛中将提供不少于400对的变化检测数据作为训练和验证数据，后续将扩展多幅遥感图像变化检测图像用于竞赛测试数据。
        </p>
        <p>
           &nbsp; &nbsp; &nbsp;&nbsp;◼ 图像尺寸：512 x 512
        </p>
        <p>
           &nbsp; &nbsp; &nbsp;&nbsp;◼ 数据格式：PNG格式
        </p>
        <p>
          &nbsp; &nbsp; &nbsp;&nbsp;◼ 数据样本：图1 展示了本项竞赛数据集部分遥感图像变化检测数据样本
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
