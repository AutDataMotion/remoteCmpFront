import React, { Component } from 'react';
import Layout from '@icedesign/layout';
import { Table, Card } from '@alifd/next';
import { Tab, Button } from '@alifd/next';
import globalConf from "../../../../globalConfig";
import MainData from "../MainData";
import {Col, Row} from "@alifd/next/lib/grid";
import Slider from "@alifd/next/lib/slider";
import DetailTable from "../DetailTable";

function mockCentent() {
  return Array.from({ length: 2 + Math.round(Math.random() * 5) }).map(() => {
    return {
      title: '长文章',
      cover:
        'https://img.alicdn.com/tfs/TB1sbkkXmBYBeNjy0FeXXbnmFXa-280-498.png',
      url: '#',
      detail: [
        {
          label: '模板描述',
          desc: '创作自由度高。'.repeat(2 + Math.round(Math.random() * 5)),
        },
        {
          label: '创作指导',
          desc: '<a href="#">好的长文章应该怎么写？</a>',
        },
      ],
    };
  });
}

export default class PostCategory extends Component {
  static displayName = 'PostCategory';

  constructor(props) {
    super(props);
    this.state = {};
  }

  teamTable = [
    {
      teamName:'明火',
      score:99.9999,
    },
    {
      teamName:'明火',
      score:99.9999,
    },
    {
      teamName:'明火',
      score:99.9999,
    },
    {
      teamName:'明火',
      score:99.9999,
    },
    {
      teamName:'明火',
      score:99.9999,
    },
    {
      teamName:'明火',
      score:99.9999,
    },
    {
      teamName:'明火',
      score:99.9999,
    },
    {
      teamName:'明火',
      score:99.9999,
    },
    {
      teamName:'明火',
      score:99.9999,
    },
    {
      teamName:'明火',
      score:99.9999,
    },
    {
      teamName:'明火',
      score:99.9999,
    },
    {
      teamName:'明火',
      score:99.9999,
    },
  ];

  slides = [
    { url: 'http://rscup.bjxintong.com.cn/assets/73cf717975561d8258465f3703e4a903.png', text: '' },
    { url: 'http://rscup.bjxintong.com.cn/assets/73cf717975561d8258465f3703e4a903.png', text: '' }
  ];

  renderSlide = ()=>{
    return this.slides.map(
      (item, index) => <div key={index} className="slider-img-wrapper"><img src={item.url} alt={item.text} /></div>
    );
  };

  render() {
    const tabs = [
      {
        tab:globalConf.themeConf[0].title,

        key: 'home',
        content: mockCentent(),
      },
      {
        tab: globalConf.themeConf[1].title,

        key: 'doc',
        content: mockCentent(),
      },
      {
        tab: globalConf.themeConf[2].title,

        key: 'collect',
        content: mockCentent(),
      },
      {
        tab: globalConf.themeConf[3].title,
        key: 'item',
        content: mockCentent(),
      },
      {
        tab:globalConf.themeConf[4].title,
        key: 'ask',
        content: mockCentent(),
      },
    ];

    return (
      <div>
        <Tab
          navStyle={{ backgroundColor: '#fff' }}
          contentStyle={{ backgroundColor: '#fff', marginTop: 20 }}
        >
          {tabs.map((item) => {
            return (
              <Tab.Item
                tabStyle={{ height: 60, padding: '0 15px' }}
                key={item.key}
                title={
                  <div style={styles.navItemWraper}>
                    {item.tab}
                  </div>
                }
              >
                <Layout fixable={true}>
                  <Layout.Aside style={{
                    width: '24%',
                    margin: '20px 30px 20px 20px'
                  }} >
                    <Table dataSource={this.teamTable}>
                      <Table.Column style={{width:'70%'}} title="队伍名称" dataIndex="teamName"/>
                      <Table.Column style={{width:'30%'}} title="得分" dataIndex="score" />
                    </Table>

                  </Layout.Aside>
                  <Layout.Section style={{
                    margin: '20px 10px ',
                    width:'76%',
                  }} >
                    <Layout.Header style={{
                    }} >
                      <MainData />
                    </Layout.Header>
                    <Layout.Main scrollable={true}
                                 style={{
                                   margin: '20px 0px'
                                 }} >
                      <Row>
                        <Col l={14}>
                          <Slider arrowSize="large">
                            {this.renderSlide()}
                          </Slider>
                        </Col>
                        <Col>
                          {/* 展示详情信息的表格 */}
                          <DetailTable />
                        </Col>
                      </Row>
                    </Layout.Main>
                  </Layout.Section>
                </Layout>
              </Tab.Item>
            );
          })}
        </Tab>
      </div>
    );
  }
}

const styles = {
  titleWrapper: {
    backgroundColor: '#fff',
    height: 54,
    lineHeight: '54px',
    padding: '0 16px',
  },
  navItemWraper: {
    display: 'flex',
    alignItems: 'center',
    height: 60,
    lineHeight: '60px',
  },
  postCategoryList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  postCategoryItem: {
    width: '49%',
    flex: '0 0 49%',
    boxSizing: 'border-box',
    backgroundColor: '#f6f6f6',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  coverWrapper: {
    paddingRight: 14,
  },
  blockDetail: {
    position: 'relative',
  },
  blockTitle: {
    fontSize: 16,
    padding: '6px 0',
  },
  blockItem: {
    display: 'flex',
  },
  blockLable: {
    flex: '0 0 60px',
    fontSize: 12,
    lineHeight: '22px',
  },
  blockDesc: {
    fontSize: 12,
    color: '#999',
    lineHeight: '22px',
  },
  blockBtn: {
    position: 'absolute',
    right: '10px',
    bottom: '10px',
    borderRadius: '3px',
    background: '#6af',
    color: '#fff',
  },
};
