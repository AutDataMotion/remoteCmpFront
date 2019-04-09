import Container from '@icedesign/container';
import React, { Component } from 'react';
import { Grid, Pagination } from '@alifd/next';

import HotItem from './HotItem';

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

export default class HotRank extends Component {
  static displayName = 'HotRank';

  constructor(props) {
    super(props);
    this.state = {
      dataSource: mockData(1),
    };
  }

  handlePageChange = (page) => {
    this.setState({ dataSource: mockData(page) });
  };

  render() {
    return (
      <Container>
        <div style={styles.header}>
          <h3 style={{ fontSize: 16, color: '#333', margin: 0 }}>
            公告：排行榜每日上午8:00更新一次
          </h3>
        </div>

        <Row wrap>
          <Col style={{ borderRight: '1px solid #eee' }}>
            {this.state.dataSource
              .filter((item, index) => {
                return Math.floor(index / 10) % 3 == 0; // 前10个
              })
              .map((item, index) => {
                return <HotItem key={index} data={item} />;
              })}
          </Col>
          <Col style={{ borderRight: '1px solid #eee' }}>
            {this.state.dataSource
              .filter((item, index) => {
                return Math.floor(index / 10) % 3 == 1; // 前20个
              })
              .map((item, key) => {
                return <HotItem key={key} data={item} />;
              })}
          </Col>
          <Col>
            {this.state.dataSource
              .filter((item, index) => {
                return Math.floor(index / 10) % 3 == 2; // 前30个
              })
              .map((item, key) => {
                return <HotItem key={key} data={item} />;
              })}
          </Col>
        </Row>
        <div style={{ textAlign: 'right', marginTop: 10 }}>
          <Pagination onChange={this.handlePageChange} />
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
