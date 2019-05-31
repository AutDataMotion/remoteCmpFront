import React, {Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import Title from './Title';
import echarts from 'echarts/lib/echarts';

export default class PicChart extends Component {
  static displayName = 'PicChart';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};

    this.option = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}({d}%)<br/>{c}支队伍',
      },
      grid: {
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: true,
      },
      series: [
        {
          type: 'pie',
          radius: ['40%', '50%'],
          avoidLabelOverlap: false,
          selectedMode: 'single',
          label: {
            show: true,
            formatter: '{b}:{c}支队伍',
          },
          color: ['#5e83fb', '#f7da47', '#58ca9a', '#ee706d', '#1bc918', '#999'],
        },
      ],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('Component DID UPDATE!')
    const {id, data, title} = this.props;
    const myChart = echarts.init(document.getElementById(id));
    this.option.series[0].data = data;
    myChart.setOption(this.option);
  }

  //<ReactEcharts
  //option={this.option}
  //style={{ height: '100%' }} />
  render() {
    const {id, data, title} = this.props;
    // console.log(data);
    //this.option.series[0].data = data;
    return (
      <div style={{height: '33%'}}>
        <Title data={title}/>

        <div style={{width: '100%', height: '100%'}} id={id}/>
      </div>
    );
  }
}
