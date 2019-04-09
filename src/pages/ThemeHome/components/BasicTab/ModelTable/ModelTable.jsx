import React, { Component } from 'react';
import { Table, Pagination, Dialog, Button } from '@alifd/next';
import IceContainer from '@icedesign/container';
import TableHead from './TableHead';
import styles from './table.module.scss';

// MOCK 数据，实际业务按需进行替换
const getData = (length = 10) => {
  return Array.from({ length }).map((item, index) => {
    return {
      uploadTime: '2019-04-09',
      fileName: 'results20190409.zip',
      remark: '提高精度',
      score: '98',
      state: '已评分',
    };
  });
};

export default class ModelTable extends Component {
  state = {
    current: 1,
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

  renderOper = () => {
    return (
      <div>
        <Button
          type="primary"
          style={{ marginRight: '5px' }}
          onClick={this.handlePublish}
        >
          发布
        </Button>
        <Button type="primary" warning onClick={this.handleDelete}>
          删除
        </Button>
      </div>
    );
  };

  renderState = (value) => {
    return (
      <span className={styles.state}>
        <i className={styles.dot} />
        {value}
      </span>
    );
  };

  render() {
    const { isLoading, data, current } = this.state;

    return (
      <IceContainer className={styles.container}>
        <TableHead onChange={this.handleFilterChange} />
        <Table
          loading={isLoading}
          dataSource={data}
          hasBorder={false}
          className={styles.table}
        >
          <Table.Column title="上传时间" dataIndex="uploadTime" />
          <Table.Column title="文件名" dataIndex="fileName" />
          <Table.Column title="得分" dataIndex="score" />
          <Table.Column title="备注" dataIndex="remark" />
          <Table.Column
            title="评分状态"
            dataIndex="state"
            cell={this.renderState}
          />
          {/*<Table.Column title="操作" cell={this.renderOper} />*/}
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
