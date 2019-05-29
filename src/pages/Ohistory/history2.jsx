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
          8月8日，大赛组委会在长春举行了决赛阶段的现场答辩，对各个队伍的算法设计理念、创新点、团队研究基础等进行了考察，而后打乱四个竞赛单元的分类，对20支队伍进行了综合排名，大赛最终产生了一等奖2项、二等奖4项、三等奖6项、优秀奖8项。
        </p>
        <div className={'info-paragraph-text-center'}>

          <h2>
            一等奖的获得者有
          </h2>
          <table align="center">
            <thead>
            <tr><th colSpan="3"></th></tr>
            <tr>
              <th style={styles.textLeft} width="100px"></th>
              <th style={styles.textLeft} width="120px"></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td valign="top" style={styles.textLeft}>中国科学院空间应用工程与技术中心</td>
              <td style={styles.textLeft}> Duc-Vision团队</td>
            </tr>
            <tr>
              <td valign="top" style={styles.textLeft}>北京理工大学</td>
              <td style={styles.textLeft}> 星空团队</td>
            </tr>

            </tbody>
          </table>

          <img
            className="info-paragraph-img"
            src={require('./imgs/h2_2.jpg')}
            alt=""
          />

        </div>

        <div className={'info-paragraph-text-center'}>
          <h2>二等奖的获得者有 </h2>

          <table align="center">
            <thead>
            <tr><th colSpan="3"></th></tr>
            <tr>
              <th style={styles.textLeft} width="100px"></th>
              <th style={styles.textLeft} width="120px"></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td valign="top" style={styles.textLeft}>哈尔滨工业大学</td>
              <td style={styles.textLeft}>始于足下团队</td>
            </tr>
            <tr>
              <td valign="top" style={styles.textLeft}>电子科技大学</td>
              <td style={styles.textLeft}> IVIPC-DET团队</td>
            </tr>
            <tr>
              <td valign="top" style={styles.textLeft}>武汉大学电子信息学院</td>
              <td style={styles.textLeft}>十万队</td>
            </tr>
            <tr>
              <td valign="top" style={styles.textLeft}>银河航天(北京)科技有限公司</td>
              <td style={styles.textLeft}>Galaxy-AI团队</td>
            </tr>

            </tbody>
          </table>

          <img
            className="info-paragraph-img"
            src={require('./imgs/h2_3.jpg')}
            alt=""
          />

        </div>

        <div className={'info-paragraph-text-center'}>

          <h2>三等奖的获得者有</h2>

          <table align="center">
            <thead>
            <tr><th colSpan="3"></th></tr>
            <tr>
              <th style={styles.textLeft} width="100px"></th>
              <th style={styles.textLeft} width="120px"></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td valign="top" style={styles.textLeft}>东北大学数学系</td>
              <td style={styles.textLeft}>SAR-Compress 进取团队</td>
            </tr>
            <tr>
              <td valign="top" style={styles.textLeft}>北京理工雷科电子信息技术有限公司</td>
              <td style={styles.textLeft}> 天鹰队</td>
            </tr>
            <tr>
              <td valign="top" style={styles.textLeft}>中科视拓(北京)科技有限公司</td>
              <td style={styles.textLeft}> Seeta-KD团队</td>
            </tr>
            <tr>
              <td valign="top" style={styles.textLeft}>东北大学理学院</td>
              <td style={styles.textLeft}>Eyesight团队</td>
            </tr>
            <tr>
              <td valign="top" style={styles.textLeft}>西北工业大学 </td>
              <td style={styles.textLeft}>502团队</td>
            </tr>
            <tr>
              <td valign="top" style={styles.textLeft}>中国科学院自动化研究所</td>
              <td style={styles.textLeft}>二三六团队</td>
            </tr>
            </tbody>
          </table>

          <img
            className="info-paragraph-img"
            src={require('./imgs/h2_4.jpg')}
            alt=""
          />
        </div>

        <div className={'info-paragraph-text-center'}>

          <h2>优秀奖的获得者有</h2>

          <table align="center">
            <thead>
            <tr><th colSpan="3"></th></tr>
            <tr>
              <th style={styles.textLeft} width="100px"></th>
              <th style={styles.textLeft} width="120px"></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td valign="top" style={styles.textLeft}>东北大学</td>
              <td style={styles.textLeft}>Betaeye智能压缩团队</td>
            </tr>
            <tr>
              <td valign="top" style={styles.textLeft}>国防科技大学</td>
              <td style={styles.textLeft}> ATR4团队</td>
            </tr>
            <tr>
              <td valign="top" style={styles.textLeft}>复旦大学</td>
              <td style={styles.textLeft}>遥鹞相团队</td>
            </tr>
            <tr>
              <td valign="top" style={styles.textLeft}>东北大学数学系</td>
              <td style={styles.textLeft}>SAR-Compress进取团队</td>
            </tr>
            <tr>
              <td valign="top" style={styles.textLeft}>北京理工大学 </td>
              <td style={styles.textLeft}>追踪者团队</td>
            </tr>
            <tr>
              <td valign="top" style={styles.textLeft}>东北大学</td>
              <td style={styles.textLeft}>Betaeye智能检测团队团队</td>
            </tr>
            <tr>
              <td valign="top" style={styles.textLeft}>东北大学数学系</td>
              <td style={styles.textLeft}>INFINITY团队</td>
            </tr>
            <tr>
              <td valign="top" style={styles.textLeft}>中科视拓(北京)科技有限公司</td>
              <td style={styles.textLeft}>Seeta-KD团队</td>
            </tr>
            </tbody>
          </table>

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
    fontSize: '16px',
  },
  textLeft: {
    textAlign: 'left',
    whiteSpace:'pre',
    fontSize: '16px',
  },
}
