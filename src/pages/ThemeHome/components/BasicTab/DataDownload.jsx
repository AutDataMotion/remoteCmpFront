import React from "react";
import IceContainer from '@icedesign/container';
import DataBinder from '@icedesign/data-binder';

import './cmpInfo/InfomStyle.css'
import styles from './ModelTable/table.module.scss';
import globalConf from "../../../../globalConfig";

@DataBinder({
  ajaxDataDownload: {
    url: globalConf.genUrl('dataDownload'),
    method: 'get',
    param: {},
    defaultBindingData: {
      "url": '暂未发布数据下载地址',
      "code": '暂未发布提取码',
    },
    responseFormatter: (rspHandler, res, orgRsp) => {
      res = globalConf.formatResponseComm(res);
      rspHandler(res, orgRsp);
    },

    success: (res, defaultCallBack, orgResponse) => {
      console.log("success res", res, "orgResponse", orgResponse);
    },
    error: (res, defaultCallBack, orgResponse) => {
      // defaultCallBack();
    },
    withCredentials: true,
  }
})

export default class DataDownload extends React.Component {
  static displayName = 'DataDownload';


  componentDidMount() {
    if (globalConf.userInfo.login == true) {
      this.props.updateBindingData('ajaxDataDownload');
    }
    this.setState({
      loading:false,
    })
  }

  renderResult = (themeId) => {

    if (themeId != globalConf.userInfo.competition_id){
      return this.renderNotTheme();
    }
    const {ajaxDataDownload} = this.props.bindingData;

    return (
      <div className={'info-paragraph'}>
        <h3>
          {/* 竞赛数据发布时，取消下面一行注释 */}
           数据下载地址：{ajaxDataDownload.url}
        </h3>
        <h3>
          {/* 竞赛数据发布时，取消下面一行注释 */}
           提取码: {ajaxDataDownload.code}
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
