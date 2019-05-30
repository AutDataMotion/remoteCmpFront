/* eslint no-plusplus:0 */
import React, {Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import 'echarts/lib/chart/map';
import 'echarts/map/js/world';
import ecConfig from 'echarts/lib/config';
import echarts from 'echarts/lib/echarts';


import DataBinder from '@icedesign/data-binder';
import globalConf from "../../../../globalConfig";
/*
const geoCoordMap = {
  '杭州': [119.133, 29.12],
  '北京':[116.46,39.92],
  '青岛':[120.33,36.07],
  '上海':[121.48,31.22],
  尼日利亚仓: [-4.388361, 11.186148],
  美国洛杉矶仓: [-118.24311, 34.052713],
  香港邦泰仓: [114.195466, 22.282751],
  美国芝加哥仓: [-87.801833, 41.870975],

  加纳库马西仓: [-4.62829, 7.72415],
  英国曼彻斯特仓: [-1.657222, 51.886863],
  德国汉堡仓: [10.01959, 54.38474],

  哈萨克斯坦阿拉木图仓: [45.326912, 41.101891],

  俄罗斯伊尔库茨克仓: [89.116876, 67.757906],
  巴西仓: [-48.678945, -10.493623],
  埃及达米埃塔仓: [31.815593, 31.418032],
  西班牙巴塞罗纳仓: [2.175129, 41.385064],
  柬埔寨金边仓: [104.88659, 11.545469],
  意大利米兰仓: [9.189948, 45.46623],
  乌拉圭蒙得维的亚仓: [-56.162231, -34.901113],
  莫桑比克马普托仓: [32.608571, -25.893473],
  阿尔及利亚阿尔及尔仓: [3.054275, 36.753027],

  阿联酋迪拜仓: [55.269441, 25.204514],

  匈牙利布达佩斯仓: [17.108519, 48.179162],
  澳大利亚悉尼仓: [150.993137, -33.675509],
  美国加州仓: [-121.910642, 41.38028],
  澳大利亚墨尔本仓: [144.999416, -37.781726],
  墨西哥仓: [-99.094092, 19.365711],
  加拿大温哥华仓: [-123.023921, 49.311753],
};
*/
const geoCoordMap = {
  '杭州': [119.133, 29.12],
  '北京':[116.46,39.92],
  '青岛':[120.33,36.07],
  '上海':[121.48,31.22],
  尼日利亚: [-4.388361, 11.186148],
  
  香港: [114.195466, 22.282751],
  美国: [-87.801833, 41.870975],

  
  英国: [-1.657222, 51.886863],
  德国: [10.01959, 54.38474],

  哈萨克斯坦: [45.326912, 41.101891],

  俄罗斯: [89.116876, 67.757906],
  巴西: [-48.678945, -10.493623],
  埃及: [31.815593, 31.418032],
  西班牙: [2.175129, 41.385064],
  柬埔寨: [104.88659, 11.545469],
  意大利: [9.189948, 45.46623],
  乌拉圭: [-56.162231, -34.901113],
  
  阿尔及利亚: [3.054275, 36.753027],

  阿联酋: [55.269441, 25.204514],

  匈牙利: [17.108519, 48.179162],
  
  
  澳大利亚: [144.999416, -37.781726],
  墨西哥: [-99.094092, 19.365711],
  加拿大: [-123.023921, 49.311753],
};

const data = [
  {
    name: '杭州',
    value: 10,
  },
  {
    name: '北京',
    value: 10,
  },
  {
    name: '青岛',
    value: 10,
  },
  {name: '上海', value: 25},
  {
    name: '尼日利亚',
    value: 10,
  },
  
  {
    name: '香港',
    value: 20,
  },
  {
    name: '美国',
    value: 50,
  },
  
  {
    name: '英国',
    value: 68,
  },
  {
    name: '德国',
    value: 45,
  },
  {
    name: '哈萨克斯坦',
    value: 10,
  },
  {
    name: '俄罗斯',
    value: 10,
  },
  {
    name: '巴西',
    value: 20,
  },
  {
    name: '埃及',
    value: 50,
  },
  {
    name: '西班牙',
    value: 58,
  },
  {
    name: '柬埔寨',
    value: 64,
  },
  {
    name: '意大利',
    value: 68,
  },
  {
    name: '乌拉圭',
    value: 45,
  },
  
  {
    name: '阿尔及利亚',
    value: 58,
  },
  {
    name: '阿联酋',
    value: 64,
  },
  {
    name: '匈牙利',
    value: 68,
  },
  {
    name: '澳大利亚',
    value: 45,
  },
  
  {
    name: '墨西哥',
    value: 45,
  },
  {
    name: '加拿大',
    value: 45,
  },
];

function formtGCData(geoData, gcData, srcNam, dest) {
  const tGeoDt = [];
  gcData.map((value) => {
    if (srcNam !== value.name) {
      if (dest) {
        tGeoDt.push({
          coords: [geoData[srcNam], geoData[value.name]],
        });
      } else {
        tGeoDt.push({
          coords: [geoData[value.name], geoData[srcNam]],
        });
      }
    }
    return null;
  });
  return tGeoDt;
}

function formatVData(geoData, vData, srcNam) {
  const tGeoDt = [];
  for (let i = 0, len = vData.length; i < len; i++) {
    const tNam = vData[i].name;
    if (srcNam !== tNam) {
      tGeoDt.push({
        name: tNam,
        value: geoData[tNam],
        symbolSize: 5,
        itemStyle: {
          normal: {
            color: '#FFD24D',
            borderColor: 'gold',
          },
        },
      });
    }
  }
  tGeoDt.push({
    name: srcNam,
    value: geoData[srcNam],
    symbolSize: 8,
    itemStyle: {
      normal: {
        color: '#4DFFFF',
        borderColor: '#fff',
      },
    },
  });
  return tGeoDt;
}

// var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
const planePath = 'arrow';

const option = {
  geo: {
    name: 'Enroll distribution',
    type: 'map',
    map: 'world',
    zoom: 1,
    roam: true,
    label: {
      emphasis: {
        show: true,
      },
    },
    itemStyle: {
      normal: {
        areaColor: '#022548',
        borderColor: '#0DABEA',
      },
      emphasis: {
        areaColor: '#011B34',
      },
    },
  },
  tooltip : {
    trigger: 'item'
  },
  series: [
    // {
    //   type: 'lines',
    //   zlevel: 2,
    //   effect: {
    //     show: true,
    //     period: 6,
    //     trailLength: 0.1,
    //     color: '#FFB973',
    //     symbol: planePath,
    //     symbolSize: 5,
    //   },
    //   lineStyle: {
    //     normal: {
    //       color: '#FFB973',
    //       width: 0,
    //       opacity: 0.2,
    //       curveness: 0,
    //     },
    //   },
    //   data: formtGCData(geoCoordMap, data, '中国 · 浙江兰溪', true),
    // },
    {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 1,
      rippleEffect: {
        period: 4,
        scale: 4,
        brushType: 'stroke',
      },
      label: {
        normal: {
          show: false,
          position: 'right',
          formatter: '{b}',
        },
      },
      symbolSize: 5,
      itemStyle: {
        normal: {
          color: '#fff',
          borderColor: 'gold',
        },
      },
      data: formatVData(geoCoordMap, data, '北京'),
    },
  ],
};
function eConsole(params) {
	alert(params.name);//点击获取的元素名称 如北京
    /*var mes = '【' + param.type + '】';
    if (typeof param.seriesIndex != 'undefined') {
        mes += '  seriesIndex : ' + param.seriesIndex;
        mes += '  dataIndex : ' + param.dataIndex;
    }
    if (param.type == 'hover') {
        document.getElementById('hover-console').innerHTML = 'Event Console : ' + mes;
    }
    else {
        document.getElementById('console').innerHTML = mes;
    }
    alert(param);*/
	
}
/*
@DataBinder({
 
  ajaxCityDetail_map: {
    url: globalConf.genUrl('statistics/city/detail'),
    method:'get',
    param:{city_name:'北京市'},
    defaultBindingData:{
      school: [],
      academy: [],
      company: [],
      other: []
    },
    responseFormatter:(rspHandler, res, orgRsp)=>{
      res = globalConf.formatResponseComm(res);
      rspHandler(res, orgRsp);
    },
  }
})*/
export default class Map extends Component {
  static displayName = 'Map';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }
componentDidUpdate(prevProps, prevState) {
        
		const { id } = this.props;
		const myChart = echarts.init(document.getElementById(id));
		//this.option.series[0].data = data;
		myChart.setOption(option);
		//防止重复触发点击事件
		if(myChart._$handlers.click){
			myChart._$handlers.click.length = 0;
		}
		myChart.on('click', function (params) {//地图点击事件
			eConsole(params);
			//console.log(params.name);
		});
}

//<ReactEcharts option={option} style={{height: '650px'}}/>
  render() {
	  const { id } = this.props;
    return (
      <div>
        
		<div style={{width: '100%', height: '900px'}} id={id} />
      </div>
    );
  }
}
