import React from "react";
import './cmpInfo/InfomStyle.css'


export default class DataDownload extends React.Component {
  static displayName = 'DataDownload';

  render() {
    const {dataUrl, fetchCode} = this.props;
    return (
      <div className={'info-paragraph'}>
        <h3>
          {/* 竞赛数据发布时，取消下面一行注释 */}
          {/* 数据下载地址：{dataUrl}  */}
        </h3>
        <h3>
          {/* 竞赛数据发布时，取消下面一行注释 */}
          {/* 提取码: {fetchCode} */}
        </h3>

      </div>
    );
  };
}
