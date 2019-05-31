/* eslint react/no-children-prop:0 */
import React, {Component} from 'react';
import {Icon} from '@alifd/next';
import TextLoop from 'react-text-loop';
import PieChart from './PieChart';
import TopList from './TopList';
import LineChart from './LineChart';
import Map from './Map';
import Title from './Title';

import DataBinder from '@icedesign/data-binder';
import globalConf from "../../../../globalConfig";

const data = {
  country: [
    {
      value: 48,
      name: '中国',
    },
    {
      value: 3,
      name: '俄罗斯',
    },
    {
      value: 10,
      name: '美国',
    },
    {
      value: 5,
      name: '英国',
    },
    {
      value: 2,
      name: '法国',
    },
  ],

  topCityForeign: [
    {
      name: '美国：纽约·华盛顿 ',
    },
    {
      name: '英国：伦敦·牛津·剑桥',
    },
    {
      name: '法国：巴黎',
    },
    {
      name: '俄罗斯：莫斯科·圣彼得堡 ',
    },
  ],

  topItem: [
    {
      name: '-----',
    },
  ],

  cityChina: [
    {
      value: 67,
      name: '北京',
    },
    {
      value: 20,
      name: '杭州市',
    },
    {
      value: 10,
      name: '上海市',
    },
    {
      value: 2,
      name: '青岛',
    },
  ],

  cityMembers: [
    {
      value: 33,
      name: '北京：67支队伍',
    },
    {
      value: 31,
      name: '杭州市：20支队伍',
    },
    {
      value: 23,
      name: '上海市：10支队伍',
    },
    {
      value: 2,
      name: '青岛市：2支队伍',
    },
  ],

};


@DataBinder({
  ajaxAll: {
    url: globalConf.genUrl('statistics/all'),
    method: 'get',
    param: {},
    defaultBindingData: {
      "team_number": 0,
      "country": 0,
      "city": 0,
    },
    responseFormatter: (rspHandler, res, orgRsp) => {
      res = globalConf.formatResponseComm(res);
      rspHandler(res, orgRsp);
    },
  },
  ajaxCountry: {
    url: globalConf.genUrl('statistics/country'),
    method: 'get',
    param: {},
    defaultBindingData: {
      "countries": []
    },
    responseFormatter: (rspHandler, res, orgRsp) => {
      res = globalConf.formatResponseComm(res);
      rspHandler(res, orgRsp);
    },
  },
  ajaxCity: {
    url: globalConf.genUrl('statistics/city'),
    method: 'get',
    param: {},
    defaultBindingData: {
      "cities": []
    },
    responseFormatter: (rspHandler, res, orgRsp) => {
      res = globalConf.formatResponseComm(res);
      rspHandler(res, orgRsp);
    },
  },
  ajaxCityDetail: {
    url: globalConf.genUrl('statistics/city/detail'),
    method: 'get',
    param: {city_name: '北京市'},
    defaultBindingData: {
      school: [],
      academy: [],
      company: [],
      other: []
    },
    responseFormatter: (rspHandler, res, orgRsp) => {
      res = globalConf.formatResponseComm(res);
      rspHandler(res, orgRsp);
    },
  }
})
export default class DataAnalysis extends Component {
  static displayName = 'DataAnalysis';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }

  updateDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    this.setState({
      date: `${year}-${month + 1}-${day} ${hour}:${
        minute < 10 ? `0${minute}` : minute
        }:${second < 10 ? `0${second}` : second}`,
    });
  };

  componentDidMount() {
    this.updateChartData();
    setInterval(this.updateDate, 1000);

    //setInterval(this.updateChartData, 5 * 1000);
  }

  updateChartData = () => {
    this.props.updateBindingData('ajaxAll');
    this.props.updateBindingData('ajaxCountry');
    this.props.updateBindingData('ajaxCity');
  }


  render() {
    const {ajaxAll, ajaxCountry, ajaxCity} = this.props.bindingData;
    console.log("ajaxAll", ajaxAll, "ajaxCountry", ajaxCountry, "ajaxCity", ajaxCity);
    let chartTitle = ajaxAll.country + "个国家 " + ajaxAll.city + "个城市 " + ajaxAll.team_number + "支队伍";
    let countries = ajaxCountry.countries;
    //console.log("countries "+countries[0])
    let cities = ajaxCity.cities;
    // 转换数据格式 以国家为例
    data.country = []; // 清空
    data.topCityForeign = [];
    for (let ic = 0; ic < countries.length; ic++) {
      data.country.push({value: countries[ic].team_number, name: countries[ic].name});
      data.topCityForeign.push({value: countries[ic].team_number + '支队伍', name: countries[ic].name});
    }
    // 转换数据格式 中国每个城市队伍情况  {"team_number": 5, "name": "武汉市", "rankNum": 2}
    data.cityChina = []; // 清空
    data.cityMembers = [];
    for (let ic = 0; ic < cities.length; ic++) {
      data.cityChina.push({value: cities[ic].team_number, name: cities[ic].name});
      data.cityMembers.push({value: cities[ic].team_number + '支队伍', name: cities[ic].name});
    }

    console.log("country " + data.country)
    return (
      <div style={styles.container}>
        <div style={styles.main}>
          <div style={styles.side}>
            <PieChart id="left_pie" data={data.country} title="国家队伍分布"/>
            <TopList data={data.topCityForeign} title="国家队伍分布信息"/>
            {/*<LineChart data={data.source} title="队伍分布" />*/}
          </div>
          <div style={styles.middle}>
            <div style={styles.header}>
              <h1 style={styles.pageTitle}>大赛队伍分布</h1>
              <p style={styles.time}>
                <Icon type="clock" size="xs"/> {this.state.date}
              </p>
              <Title data={chartTitle}/>
            </div>
          </div>
          <div style={styles.side}>
            <PieChart id="right_pie" data={data.cityChina} title="国内队伍分布"/>
            <TopList data={data.cityMembers} title="国内城市队伍分布信息"/>
          </div>
        </div>
        <div style={styles.bg}>
          <Map propData={data.cityChina} id='mapContainer'/>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#000',
    color: '#fff',
    position: 'relative',
    height: '100vh',
  },
  main: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
  },
  bg: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  side: {
    zIndex: 1,
    width: '320px',
    padding: '10px',
    marginTop: '85px',
  },
  middle: {
    flex: 1,
  },
  header: {
    position: 'relative',
    zIndex: 9,
    textAlign: 'center',
  },
  pageTitle: {
    fontSize: '36px',
    margin: 0,
  },
  time: {
    marginBottom: 20,
  },
  sum: {
    height: '44px',
    lineHeight: '44px',
    margin: '25px 0 0',
    color: '#f7d947',
    fontSize: '62px',
    fontWeight: 400,
  },
};
