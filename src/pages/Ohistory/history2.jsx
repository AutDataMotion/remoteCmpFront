import React from "react";
import './historyStyle.css'
import globalConf from "../../globalConfig";


export default class History2 extends React.Component {
  static displayName = 'History2';

  render() {

    return (
      <div className={'info-paragraph-history'}>
        <h1>
          第二届“眼神杯”竞赛
        </h1>
        <p>
          8月9日，第三届“空间信息网络”学术论坛在吉林长春举行，2018“眼神杯”遥感影像稀疏表征与智能处理算法大赛获奖名单在论坛开幕式上隆重揭晓。中国工程院院士刘韵洁，中国科学院院士、武汉大学遥感信息工程学院院长龚健雅，中国工程院院士姜会林，日本东北大学Nei Kato教授，眼神科技CTO沈昕阳博士等多位知名学者专家参会，并为获奖团队颁奖。
        </p>

        <div className={'info-paragraph-text-center'}>

          <img
            className="info-paragraph-img"
            src={require('./imgs/h2_1.jpg')}
            alt=""
          />
          <p>
            论坛开幕式现场
          </p>
        </div>

        <p>
          本次“眼神杯”大赛共有来自海内外知名科研院所和企业的逾百支队伍报名，超过70支队伍参加了从7月9日开始的现场数据测试环节。经过11天的激烈角逐，组委会根据参赛队伍现场测试成绩，按照光学图像识别、SAR遥感图像识别、遥感卫星追踪、智能压缩四个竞赛单元分别进行了客观测试结果排名，共选拔出20支队伍进入决赛阶段。
        </p>

        <p>
          8月8日，大赛组委会在长春举行了决赛阶段的现场答辩，对各个队伍的算法设计理念、创新点、团队研究基础等进行了考察，而后打乱四个竞赛单元的分类，对20支队伍进行了综合排名。最终，来自中国科学院和北京理工大学的两支队伍摘得一等奖；来自哈尔滨工业大学、电子科技大学、武汉大学、银河航天（北京）科技有限公司的四支队伍获得二等奖；来自东北大学、北京理工雷科电子信息技术有限公司、中科拓视（北京）科技有限公司、西北工业大学、中国科学院自动化研究所的6支队伍获得三等奖。另外，组委会还评选出了多支优胜团队。
        </p>
        <div className={'info-paragraph-text-center'}>

          <img
            className="info-paragraph-img"
            src={require('./imgs/h2_2.jpg')}
            alt=""
          />
          <p>
            眼神科技CTO沈昕阳（右一）为一等奖获得者颁奖
          </p>
        </div>

        <div className={'info-paragraph-text-center'}>

          <img
            className="info-paragraph-img"
            src={require('./imgs/h2_3.jpg')}
            alt=""
          />
          <p>
            二等奖颁奖现场
          </p>
        </div>

        <div className={'info-paragraph-text-center'}>

          <img
            className="info-paragraph-img"
            src={require('./imgs/h2_4.jpg')}
            alt=""
          />
          <p>
            三等奖颁奖现场
          </p>
        </div>
        <p>
          随着人工智能技术的快速升级，遥感技术也取得了明显的进步和突破。遥感影像智能解译将视觉人工智能深度学习技术引入遥感数据的解译中，获得了更加自动化的数据处理与分析能力，可应用于包括目标检测、变化检测、路网提取、云雪检测、水体提取、土地利用类型分类、建筑物提取等多个应用场景。
        </p>
        <p>
          空间信息网络是国家重要的基础设施，亟需用新理论、新方法来促进服务能力的提升。与人工智能的结合驱动了空间智能化的发展进程，有助于对观测数据进行挖掘、管理，地理信息技术也将能更好地解决自然和社会发展的问题。
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
  },
  textRight: {
    textAlign: 'right',
    whiteSpace:'pre',
  },
}
