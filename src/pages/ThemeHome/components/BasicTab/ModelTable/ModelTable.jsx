import React, { Component } from 'react';
import { Table, Pagination, Dialog, Button } from '@alifd/next';
import IceContainer from '@icedesign/container';
import TableHead from './TableHead';
import styles from './table.module.scss';
import globalConf from "../../../../../globalConfig";

import DataBinder from '@icedesign/data-binder';

// MOCK 数据，实际业务按需进行替换
const getData = (length = 10) => {
  return Array.from({ length }).map((item, index) => {
    return {
      uploadTime: '2019-04-09',
      fileName: 'results20190409.zip',
      score: '98',
    };
  });
};


@DataBinder({
  ajaxResult: {
    url: 'https://2c6dc8ce-562b-4058-9c50-ae8bf9f6267e.mock.pstmn.io/results',
    method:'get',
    param:{
      page:1,
      number:30,
    },
    defaultBindingData:{},

    responseFromatter:(rspHandler, res, orgRsp)=>{
        res = globalConf.formatResponseComm(res);
        rspHandler(res, orgRsp);
    },

    success:(res, defaultCallBack, orgResponse)=>{
        console.log("success res", res, "orgResponse", orgResponse);
    },
    error:(res, defaultCallBack, orgResponse)=>{
        defaultCallBack();
    },
  }
})
export default class ModelTable extends Component {
  state = {
    page: 1,
    isLoading: false,
    data: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  mockApi = (len) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getData(len));
      }, 600);
    });
  };

  fetchData = (len) => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        this.mockApi(len).then((data) => {
          this.setState({
            data,
            isLoading: false,
          });
        });
      }
    );

    // 获取数据
   // const {defaultData}

  };

  handlePaginationChange = (current) => {
    this.setState(
      {
        current,
      },
      () => {
        this.fetchData();
      }
    );
  };

  handleFilterChange = () => {
    this.fetchData(5);
  };

  handlePublish = () => {
    Dialog.confirm({
      content: '确认发布线上吗',
      onOk: () => {
        this.fetchData();
      },
    });
  };

  handleDelete = () => {
    Dialog.confirm({
      content: '确认删除该模型吗',
      onOk: () => {
        this.fetchData();
      },
    });
  };

  renderState = (value) => {
    return (
      <span className={styles.state}>
        {value}
      </span>
    );
  };

  render() {
    const { isLoading, data, current } = this.state;

    return (
      <IceContainer className={styles.container}>
        <div style={inStyles.headerTips}>
          <h3 style={{ fontSize: 16, color: '#333', margin: 0 }}>
            {globalConf.uploadTips}
          </h3>
        </div>
        <TableHead onChange={this.handleFilterChange} />
        <Table
          loading={isLoading}
          dataSource={data}
          hasBorder={false}
          className={styles.table}
        >
          <Table.Column title="上传时间" dataIndex="uploadTime" />
          <Table.Column title="结果文件" dataIndex="fileName" />
          <Table.Column
            title="得分"
            dataIndex="score"
            cell={this.renderState}
          />
        </Table>
        <Pagination
          className={styles.pagination}
          current={current}
          onChange={this.handlePaginationChange}
        />
      </IceContainer>
    );
  }
}

const inStyles = {
  headerTips: {
    marginBottom: 20,
  },
};
