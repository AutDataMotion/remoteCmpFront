import React from "react";
import './cmpInfo/InfomStyle.css'


export default class DataDownload extends React.Component {
  static displayName = 'DataDownload';

  render() {
    const {dataUrl, fetchCode} = this.props;
    return (
      <div className={'info-paragraph'}>
        <h2>
          数据下载地址：{dataUrl}
        </h2>
        <h2>
          提取码: {fetchCode}
        </h2>

      </div>
    );
  };
}
