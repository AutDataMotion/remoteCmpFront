import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import FoundationSymbol from '@icedesign/foundation-symbol';
import DataBinder from '@icedesign/data-binder';

const { Row, Col } = Grid;
import cloneDeep from "lodash.clonedeep";
import globalConf from "../../../../globalConfig";

const mockData = [
  {
    symbolBgColor: '#ee706d',
    symbol: 'shezhi',
    count: '- -',
    desc: '当前状态',
  },
  {
    symbolBgColor: '#f7da47',
    symbol: 'chart',
    count: '- -',
    desc: '截止日期',
  },
  {
    symbolBgColor: '#58ca9a',
    symbol: 'cascades',
    count: '- -',
    desc: '参数队伍',
  },
  {
    symbolBgColor: '#447eff',
    symbol: 'yonghu',
    count: '- -',
    desc: '用户总数',
  },
];

const defaultQueryMdl = {"competition_id":1,"time":2};

@DataBinder({
  ajaxCount: {
    url: globalConf.genUrl('theme/count'),
    method:'get',
    param:defaultQueryMdl,
    defaultBindingData:{
      "theme": 1,
      "current_stage": "- -",
      "user_number": "- -",
      "team_number": "- -",
      "deadline": "-/-/-",
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
export default class Overview extends Component {

  state = {
    isLoading: false,
    searchQuery:cloneDeep(defaultQueryMdl),
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
    const {searchQuery} = this.state;
    const {ajaxCount} = this.props.bindingData;
    this.props.updateBindingData('ajaxCount',{
      params:{
        ...searchQuery
      },
      defaultBindingData: {
        ...ajaxCount
      }
    });

    this.setState({
      isLoading: false,
    });

  };

  render() {

    const { pageId, isLoading } = this.state;

    const {ajaxCount} = this.props.bindingData;
    console.log('ajaxCount', ajaxCount);
    mockData[0].count = ajaxCount.current_stage;
    mockData[1].count = ajaxCount.deadline;
    mockData[2].count = ajaxCount.team_number;
    mockData[3].count = ajaxCount.user_number;
    return (
      <Row gutter={20}>
        {mockData.map((item, index) => {
          return (
            <Col l="6" key={index}>
              <div style={styles.box}>
                <div
                  style={{
                    ...styles.symbol,
                    background: `${item.symbolBgColor}`,
                  }}
                >
                  <FoundationSymbol size="xl" type={item.symbol} />
                </div>
                <div style={styles.value}>
                  <div style={styles.count}>{item.count}</div>
                  <div style={styles.desc}>{item.desc}</div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    );
  }
}

const styles = {
  box: {
    display: 'flex',
    height: '100px',
    background: '#fff',
    borderRadius: '4px',
    marginBottom: '20px',
  },
  symbol: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    color: '#fff',
  },
  value: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    color: '#c6cad6',
  },
  count: {
    fontSize: '30px',
    marginBottom: '2px',
  },
  desc: {
    fontSize: '13px',
  },
};
