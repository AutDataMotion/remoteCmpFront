import React from "react";
import IceContainer from '@icedesign/container';
import './cmpInfo/InfomStyle.css'
import styles from './ModelTable/table.module.scss';
import globalConf from "../../../../globalConfig";


export default class DataDownload extends React.Component {
  static displayName = 'DataDownload';


  renderResult = (themeId) => {

    if (themeId != globalConf.userInfo.competition_id){
      return this.renderNotTheme();
    }

    return (
      <div className={'info-paragraph'}>
        <h3>
          {/* 竞赛数据发布时，取消下面一行注释 */}
          {/* 数据下载地址：{dataUrl}  */}
          数据将于2019年6月15日发布，敬请期待
        </h3>
        <h3>
          {/* 竞赛数据发布时，取消下面一行注释 */}
          {/* 提取码: {fetchCode} */}
        </h3>

      </div>
    );

  }

  renderNoLogin = () => {
    return (
      <IceContainer className={styles.container}>
        <div style={inStyles.headerTips}>
          <h3 style={{fontSize: 16, color: '#333', margin: 0}}>
            请先登录，然后下载数据。
          </h3>
        </div>
      </IceContainer>
    )
  };

  renderNotTheme = () => {
    return (
      <IceContainer className={styles.container}>
        <div style={inStyles.headerTips}>
          <h3 style={{fontSize: 16, color: '#333', margin: 0}}>
            这不是您的竞赛主题。
          </h3>
        </div>
      </IceContainer>
    )
  };

  render() {
    const {themeId, dataUrl, fetchCode} = this.props;
    if (globalConf.userInfo.login == true) {
      return this.renderResult(themeId);
    }else {
      return this.renderNoLogin();
    }
  };
}

const inStyles = {
  headerTips: {
    marginBottom: 20,
  },
};
