import React, { Component } from 'react';
import Layout from '@icedesign/layout';
import {Table, Card, Pagination} from '@alifd/next';
import { Tab, Button } from '@alifd/next';
import globalConf from "../../../../globalConfig";
import MainData from "../MainData";
import {Col, Row} from "@alifd/next/lib/grid";
import Slider from "@alifd/next/lib/slider";
import DetailTable from "../DetailTable";
import DataBinder from '@icedesign/data-binder';
import cloneDeep from "lodash.clonedeep";

function url114(path){
  if (path.startsWith("/")){
    return "http://114.115.182.9:8000"+path;
  }
  return "http://114.115.182.9:8000/"+path;
}

const defaultQueryMdl = globalConf.genPageModel({competition_id:0});
const defaultDetail = {
  score:'--',
  summary:['--','--'],
  imageInfo:[
    {
      title:'标题',
      imgUrl:'/assets/73cf717975561d8258465f3703e4a903.png',
      items:[
        {name:'指标1',value:'1000'},
      ]
    },
  ]
};

const tabs = [
  {
    tab:globalConf.themeConf[0].title,
    key: '1',
  },
  {
    tab: globalConf.themeConf[1].title,
    key: '2',

  },
  {
    tab: globalConf.themeConf[2].title,
    key: '3',

  },
  {
    tab: globalConf.themeConf[3].title,
    key: '4',

  },
  {
    tab:globalConf.themeConf[4].title,
    key: '5',

  },
];

@DataBinder({
  themeTeams: {
    url: url114('result/themeTeams'),
    method: 'get',
    param: defaultQueryMdl,
    defaultBindingData: {
      "total": 0,
      "pageId": 1,
      "pageSize": 30,
      "results": [],
    },
    responseFormatter: (rspHandler, res, orgRsp) => {
      res = globalConf.formatResponseComm(res);
      rspHandler(res, orgRsp);
    },
    error:(res, defaultCallBack, orgResponse)=>{
      defaultCallBack();
    },
  },
  teamResultDetail: {
    url: url114('result/teamResultDetail'),
    method: 'get',
    param: {},
    defaultBindingData: defaultDetail,
    responseFormatter: (rspHandler, res, orgRsp) => {
      res = globalConf.formatResponseComm(res);
      rspHandler(res, orgRsp);
    },
    error:(res, defaultCallBack, orgResponse)=>{
      defaultCallBack();
    },
  },

})
export default class PostCategory extends Component {
  static displayName = 'PostCategory';

  constructor(props) {
    super(props);
    this.state = {
      pageId: 1,
      themeId:1,
      isLoading: false,
      searchQuery:cloneDeep(defaultQueryMdl),
      dataSource: [],
      selectTeam:{
        teamId:'--', teamName:'请选择队伍', score:'--'
      },
      selectRowIndex: 0,
    };
  }
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
    const {searchQuery, pageId,themeId} = this.state;
    searchQuery.competition_id = themeId;
    const {themeTeams} = this.props.bindingData;
    this.props.updateBindingData('themeTeams',{
      params:{
        ...searchQuery,
        pageId: pageId
      },
      defaultBindingData: {
        ...themeTeams,
        pageId:pageId
      }
    },(response) => {
      // 请求回调，可按需使用
      console.log('数据加载完成啦', response);
      this.onTableRowClick(response.data.results[0]);
    });

    this.setState({
      isLoading: false,
    });

  };

  onTabChangeClick = (key)=>{
    this.setState({
      themeId: key,
    }, ()=>{
      this.fetchData();
    });
  };

  handlePaginationChange = (pageId) => {
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

  onTableRowClick = (record, index)=>{
    console.log('onRowClick', record);
    const {teamResultDetail} = this.props.bindingData;
    this.props.updateBindingData('teamResultDetail',{
      params:{
        teamId: record.teamId
      },
      defaultBindingData: {
        ...teamResultDetail
      }
    });
    this.setState({
      isLoading: false,
      selectRowIndex:index,
      selectTeam:record,
    });
  };

  propsConf = {
    style: {background: '#0308a9'},
  };

  setRowProps = (record, index) => {
    const {selectRowIndex} = this.state;
    if (index === selectRowIndex) {
      return this.propsConf;
    }
  };

  renderSlide = (slides)=>{
    return slides.map(
      (item, index) => <div key={index} className="slider-img-wrapper"><img src={url114(item.imgUrl)}/></div>
    );
  };

  render() {


    const {pageId, isLoading, selectTeam} = this.state;
    const {themeTeams, teamResultDetail} = this.props.bindingData;
    console.log('themeTeams', themeTeams, "teamResultDetail", teamResultDetail);

    return (
      <div>
        <Tab
          navStyle={{ backgroundColor: '#fff' }}
          contentStyle={{ backgroundColor: '#fff', marginTop: 20 }}
          triggerType="click" onChange={this.onTabChangeClick}
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
                    <Table
                      loading={isLoading}
                      dataSource={themeTeams.results}
                      onRowClick={this.onTableRowClick}
                      hasBorder={false}
                    >
                      <Table.Column style={{width:'30%'}} title="队伍编号" dataIndex="teamId"/>
                      <Table.Column style={{width:'40%'}} title="队伍名称" dataIndex="teamName"/>
                      <Table.Column style={{width:'30%'}} title="得分" dataIndex="score" />
                    </Table>
                    <Pagination
                      current={pageId}
                      pageSize={themeTeams.pageSize}
                      total={themeTeams.total}
                      onChange={this.handlePaginationChange}
                    />
                  </Layout.Aside>
                  <Layout.Section style={{
                    margin: '20px 10px ',
                    width:'76%',
                  }} >
                    <Layout.Header style={{
                    }} >
                      <MainData data={selectTeam} />
                    </Layout.Header>
                    <Layout.Main
                                 style={{
                                   margin: '20px 0px'
                                 }} >
                      <Row>
                        <Col xxs={14} xs={14} s={14} l={14}>
                          <Slider arrowSize="large">
                            {this.renderSlide(teamResultDetail.imageInfo)}
                          </Slider>
                        </Col>
                        <Col>
                          <DetailTable data={teamResultDetail} />
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
