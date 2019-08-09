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

const urlIp114='http://114.115.182.9:8000';
const urlIp119='http://119.3.202.35:8000';
function url114(path){
  if (path.startsWith("/")){
    return urlIp119 + path;
  }
  return urlIp119+ "/" + path;
}

const settings = {
  className: 'custom-slide',
  arrowSize:"large",
  dots: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  lazyLoad:true,
};


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
export default class ResultTabContent extends Component {
  static displayName = 'ResultTabContent';

  constructor(props) {
    super(props);
    this.state = {
      pageId: 1,
      isLoading: false,
      searchQuery:cloneDeep(defaultQueryMdl),
      dataSource: [],
      selectTeam:{
        teamId:'1', teamName:'请选择队伍', score:'--'
      },
      selectRowIndex: 0,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    // get data
    const {themeInfo} = this.props;
    const {searchQuery, pageId} = this.state;
    searchQuery.competition_id = themeInfo.key;
    const {themeTeams} = this.props.bindingData;
    this.props.updateBindingData('themeTeams',{
      params:{
        ...searchQuery,
        pageId: pageId
      },
      // defaultBindingData: {
      //   ...themeTeams,
      //   pageId:pageId
      // }
    },(response) => {
      // 请求回调，可按需使用
      console.log('数据加载完成啦', response);
      if (response.hasOwnProperty('data') && response.data.hasOwnProperty('results')){
        this.onTableRowClick(response.data.results[0]);
      }
    });

    this.setState({
      isLoading: false,
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
      // defaultBindingData: {
      //   ...teamResultDetail
      // }
    },()=>{
    });
    this.setState({
      isLoading: false,
      selectRowIndex:index,
      selectTeam:record,
    });
  };

  renderSlide = (slides)=>{
    return slides.map(
      (item, index) => <div key={index} className="slider-img-wrapper"><img src={url114(item.imgUrl)}/></div>
    );
  };

  render() {

    const {themeInfo} = this.props;
    const {pageId, isLoading, selectTeam} = this.state;
    const {themeTeams, teamResultDetail} = this.props.bindingData;
    console.log('themeTeams', themeTeams, "teamResultDetail", teamResultDetail);

    return (

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
            <Table.Column style={{width:'30%', display:'none'}} title="队伍编号" dataIndex="teamId"/>
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
              <div  style={{
                width: '100%',
                maxWidth:'1200px',
              }}>
                <Slider {...settings}>
                  {this.renderSlide(teamResultDetail.imageInfo)}
                </Slider>
              </div>
              {/*<Col>*/}
              {/*<DetailTable data={teamResultDetail} />*/}
              {/*</Col>*/}
            </Row>
          </Layout.Main>
        </Layout.Section>
      </Layout>
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
