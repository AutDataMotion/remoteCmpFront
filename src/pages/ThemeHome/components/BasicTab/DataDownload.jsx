import React from "react";
import ReactDOM from "react-dom";



export default class DataDownload extends React.Component {
  static displayName = 'DataDownload';

  render(){
    const {dataUrl, fetchCode} = this.props;
    return (
      <div>
      <p>
        数据下载地址：{dataUrl}
      </p>
      <p>
      <br/>
      </p>
    <p>
      提取码: {fetchCode}
    </p>

      </div>
  );
  };
}
