import React, {Component} from 'react';
import cloneDeep from 'lodash.clonedeep';
import {Table, Pagination, Dialog, Button} from '@alifd/next';
import IceContainer from '@icedesign/container';
import DataBinder from '@icedesign/data-binder';

import TableHead from './TableHead';
import styles from './table.module.scss';
import globalConf from "../../../../../globalConfig";



const defaultQueryMdl = globalConf.genPageModel({});

@DataBinder({
  ajaxResult: {
    url: globalConf.genUrl('results'),
    method: 'get',
    param: defaultQueryMdl,
    defaultBindingData: {
      "total": 0,
      "pageId": 1,
      "pageSize": 30,
      "today_remain": 5,
      "results": [],
    },
    responseFormatter: (rspHandler, res, orgRsp) => {
      res = globalConf.formatResponseComm(res);
      rspHandler(res, orgRsp);
    },

    success: (res, defaultCallBack, orgResponse) => {
      console.log("success res", res, "orgResponse", orgResponse);
    },
    error: (res, defaultCallBack, orgResponse) => {
      defaultCallBack();
    },
    withCredentials: true,
  }
})
export default class ModelTable extends Component {
  state = {
    pageId: 1,
    isLoading: false,
    searchQuery: cloneDeep(defaultQueryMdl),
    data: [],
  };

  componentDidMount() {
    if (globalConf.userInfo.login === true) {
      // 已登录
      this.fetchData();
    }
  }

  fetchData = () => {

    this.setState(
      {
        isLoading: true,
      },
    );

    // get data
    const {searchQuery, pageId} = this.state;
    const {ajaxResult} = this.props.bindingData;
    this.props.updateBindingData('ajaxResult', {
      params: {
        ...searchQuery,
        pageId: pageId
      },
      defaultBindingData: {
        ...ajaxResult,
        pageId: pageId
      }
    });

    this.setState({
      isLoading: false,
    });

  };

  handlePaginationChange = (pageId) => {
    this.setState(
      {
        pageId,
      },
      () => {
        this.fetchData();
      }
    );
  };

  handleFilterChange = () => {
    this.fetchData();
  };

  handlePublish = () => {
    Dialog.confirm({
      content: '确认发布线上吗',
      onOk: () => {
        this.fetchData();
      },
    });
  };

  add0=(m)=>{return m<10?'0'+m:m }
  format=(timestamp)=>
  {
    let time = new Date(timestamp);
    let y = time.getFullYear();
    let m = time.getMonth()+1;
    let d = time.getDate();
    let h = time.getHours();
    let mm = time.getMinutes();
    let s = time.getSeconds();
    return y+'-'+this.add0(m)+'-'+this.add0(d)+' '+this.add0(h)+':'+this.add0(mm)+':'+this.add0(s);
  };

  renderState = (value) => {
    console.log('value', value);
    let text = '--';
    if (value == -1){
      text = '评分处理中';
    } else if(value == -2){
      text = '文件错误';
    } else {
      text = value.toFixed(2);
    }
    return (
      <span className={styles.state}>
        {text}
      </span>
    );
  };
  renderDate = (value) => {
    return (
      <span className={styles.state}>
        {this.format(value)}
      </span>
    );
  };

  renderResult = (themeId) => {

    if (themeId != globalConf.userInfo.competition_id){
      return this.renderNotTheme();
    }
    const {pageId, isLoading} = this.state;
    const {ajaxResult} = this.props.bindingData;
    console.log('ajaxResult', ajaxResult);

    return (<IceContainer className={styles.container}>
      <div style={inStyles.headerTips}>
        <h3 style={{fontSize: 16, color: '#333', margin: 0}}>
          {globalConf.uploadTips}
        </h3>
      </div>
      <TableHead superCallback={this.fetchData} onChange={this.handleFilterChange}/>
      <Table
        loading={isLoading}
        dataSource={ajaxResult.results}
        hasBorder={false}
        className={styles.table}
      >
        <Table.Column title="上传时间" dataIndex="time_stamp" cell={this.renderDate}/>
        <Table.Column title="结果文件" dataIndex="file_name" />
        <Table.Column
          title="得分"
          dataIndex="score"
          cell={this.renderState}
        />
      </Table>
      <Pagination
        className={styles.pagination}
        current={pageId}
        pageSize={ajaxResult.pageSize}
        total={ajaxResult.total}
        onChange={this.handlePaginationChange}
      />
    </IceContainer>);
  };

  renderNoLogin = () => {
    return (
      <IceContainer className={styles.container}>
        <div style={inStyles.headerTips}>
          <h3 style={{fontSize: 16, color: '#333', margin: 0}}>
            请先登录，然后提交结果。
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
    const {themeId} = this.props;
    if (globalConf.userInfo.login == true) {
      return this.renderResult(themeId);
    }else {
      return this.renderNoLogin();
    }
  }
}

const inStyles = {
  headerTips: {
    marginBottom: 20,
  },
};
