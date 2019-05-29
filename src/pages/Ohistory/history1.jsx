import React from "react";
import './historyStyle.css'


export default class History1 extends React.Component {
  static displayName = 'History1';

  render() {

    return (
      <div className={'info-paragraph-history'}>
        <h1>
          第一届“眼神杯”竞赛
        </h1>
        <p>
          {/* 第二届“空间信息网络”学术论坛在宁夏银川如期举行，本次论坛以国家自然科学基金2013年度启动的“空间信息网络基础理论与关键技术”重大研究计划为依托，展示了最新技术及学术研究成果。本次论坛还同步(4月8日)开展了"眼神杯"遥感影像处理比赛，面向遥感影像稀疏表征及目标识别，通过提供数据集的方式征集处理算法软件进行评比，共有85位报名参加遥感影像，14位参加智能处理算法产生了特等奖1项、一等奖1项、二等奖3项、三等奖3项、优秀奖7项。 */}
          第二届“空间信息网络”学术论坛在宁夏银川如期举行，本次论坛以国家自然科学基金2013年度启动的“空间信息网络基础理论与关键技术”重大研究计划为依托，展示了最新技术及学术研究成果。本次论坛还同步(4月8日)开展了“眼神杯”遥感影像智能处理算法竞赛，竞赛包括影像目标检测和智能压缩两个主题。共有85支队伍报名参加此次竞赛，通过提供数据集对算法进行测试的方式，有14支队伍获得竞赛奖项，其中特等奖1项、一等奖1项、二等奖3项、三等奖3项和优秀奖7项。
        </p>

        <div className={'info-paragraph-text-center'}>
          <h2>
            特等奖的获得者是，北京理工大学BIT-RSU团队。
          </h2>
          <img
            className="info-paragraph-img"
            src={require('./imgs/h1_1.jpg')}
            alt=""
          />
        </div>


        <div className={'info-paragraph-text-center'}>
          <h2>
            一等奖的获得者是，清华大学CSCG团队。
          </h2>
          <img
            className="info-paragraph-img"
            src={require('./imgs/h1_2.jpg')}
            alt=""
          />
        </div>


        <div className={'info-paragraph-text-center'}>
          <h2>
            二等奖的获得者有
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
              <td valign="top" style={styles.textLeft}>中科院自动化所</td>
              <td style={styles.textLeft}> 天眼智能团队</td>
            </tr>
            <tr>
              <td valign="top" style={styles.textLeft}>东北大学</td>
              <td style={styles.textLeft}> Betaeye智能压缩团队</td>
            </tr>
            <tr>
              <td valign="top" style={styles.textLeft}>东北大学</td>
              <td style={styles.textLeft}> 多源团队</td>
            </tr>

            </tbody>
          </table>
          <img
            className="info-paragraph-img"
            src={require('./imgs/h1_3.jpg')}
            alt=""
          />
        </div>


        <div className={'info-paragraph-text-center'}>
          <h2>
            三等奖的获得者有
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
              <td valign="top" style={styles.textLeft}>东北大学</td>
              <td style={styles.textLeft}> Betaeye智能检测团队</td>
            </tr>
            <tr>
              <td valign="top" style={styles.textLeft}>北京理工大学</td>
              <td style={styles.textLeft}> KTYG团队</td>
            </tr>
            <tr>
              <td valign="top" style={styles.textLeft}>西安电子科技大学团队</td>
              <td style={styles.textLeft}> 千跬队</td>
            </tr>
            </tbody>
          </table>
          <img
            className="info-paragraph-img"
            src={require('./imgs/h1_4.jpg')}
            alt=""
          />
        </div>


        <div className={'info-paragraph-text-center'}>
          <h2>
            优秀奖的获得者有
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
              <td valign="top" style={styles.textLeft}>中国科学院遥感与数字地球研究所</td>
              <td style={styles.textLeft}> 图像室团队</td>
            </tr>
            <tr>
              <td valign="top" style={styles.textLeft}>北京化工大学</td>
              <td style={styles.textLeft}> EYE-LAB517团队</td>
            </tr>
            <tr>
              <td valign="top" style={styles.textLeft}>国防科学技术大学 (上海交大)</td>
              <td style={styles.textLeft}> Insight-NUDT团队</td>
            </tr>
            <tr>
              <td valign="top" style={styles.textLeft}>智能感知与计算国际联合研究中心</td>
              <td style={styles.textLeft}> Sunshine团队</td>
            </tr>
            <tr>
              <td valign="top" style={styles.textLeft}>上海交通大学 (西安测绘研究所、上海北斗导航创新研究院)</td>
              <td style={styles.textLeft}> YuRocks-SJTU团队</td>
            </tr>
            <tr>
              <td valign="top" colSpan="2" style={styles.textLeft}>中国科学院遥感与数字地球研究所高光谱模型算法研究组</td>
            </tr>
            <tr>
              <td valign="top" style={styles.textLeft}>西安电子科技大学</td>
              <td style={styles.textLeft}> SPACE-I2C团队</td>
            </tr>
            </tbody>
          </table>
          <img
            className="info-paragraph-img"
            src={require('./imgs/h1_5.jpg')}
            alt=""
          />
        </div>

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
    fontSize: '16px',
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
  whiteSpaceKeeper:{
    whiteSpace:'pre',
  }
}
