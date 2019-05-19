import Container from '@icedesign/container';
import React, { Component } from 'react';
import cloneDeep from 'lodash.clonedeep';
import { Grid, Pagination } from '@alifd/next';

import DataBinder from '@icedesign/data-binder';

import HotItem from './HotItem';
import globalConf from "../../../../globalConfig";

const { Row, Col } = Grid;

function mockData(page = 1) {
  return Array.from({ length: 30 }).map((n, i) => {
    return {
      index: i + 1 + (page - 1) * 30,
      keyword: ['梦之队', '遥感精度', '天眼', '智能压缩'][i % 4],
      total: (30 * (30 - i))/9,
      percent: 100 - i * 2.8,
      url: '#',
    };
  });
}

const defaultQueryMdl = globalConf.genPageModel({competition_id:1});

@DataBinder({
  ajaxRank: {
    url: globalConf.genUrl('results/leaderboard'),
    method:'get',
    param:defaultQueryMdl,
    defaultBindingData:{
      "total": 0,
      "pageId": 1,
      "pageSize": 30,
      "results": [],
    },
    responseFormatter:(rspHandler, res, orgRsp)=>{
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
export default class HotRank extends Component {
  static displayName = 'HotRank';

  state = {
    pageId: 1,
    isLoading: false,
    searchQuery:cloneDeep(defaultQueryMdl),
    dataSource: mockData(1),
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState(
      {
        isLoading: true,
      },
    );

    // get data
    const {searchQuery, pageId} = this.state;
    const {ajaxRank} = this.props.bindingData;
    this.props.updateBindingData('ajaxRank',{
      params:{
        ...searchQuery,
        pageId: pageId
      },
      defaultBindingData: {
        ...ajaxRank,
        pageId:pageId
      }
    });

    this.setState({
      isLoading: false,
    });

  };

  handlePageChange = (pageId) => {
    // this.setState({ dataSource: mockData(page) });
    this.setState(
      {
        pageId,
      },
      () => {
        this.fetchData();
      }
    );
  };

  render() {

    const { pageId, isLoading } = this.state;
    const {ajaxRank} = this.props.bindingData;
    console.log('ajaxRank', ajaxRank);

    return (
      <Container>
        <div style={styles.header}>
          <h3 style={{ fontSize: 16, color: '#333', margin: 0 }}>
            {globalConf.dashboardTips}
          </h3>
        </div>

        <Row wrap>
          <Col style={{ borderRight: '1px solid #eee' }}>
            {ajaxRank.results
              .filter((item, index) => {
                return Math.floor(index / 10) % 3 == 0; // 前10个
              })
              .map((item, index) => {
                return <HotItem key={index} data={item} />;
              })}
          </Col>
          <Col style={{ borderRight: '1px solid #eee' }}>
            {ajaxRank.results
              .filter((item, index) => {
                return Math.floor(index / 10) % 3 == 1; // 前20个
              })
              .map((item, key) => {
                return <HotItem key={key} data={item} />;
              })}
          </Col>
          <Col>
            {ajaxRank.results
              .filter((item, index) => {
                return Math.floor(index / 10) % 3 == 2; // 前30个
              })
              .map((item, key) => {
                return <HotItem key={key} data={item} />;
              })}
          </Col>
        </Row>
        <div style={{ textAlign: 'right', marginTop: 10 }}>
          <Pagination
            current={pageId}
            pageSize={ajaxRank.pageSize}
            total={ajaxRank.total}
            onChange={this.handlePageChange} />
        </div>
      </Container>
    );
  }
}

const styles = {
  header: {
    marginBottom: 20,
  },
  hotrankList: {},
};
