import React, {Component} from 'react';
import TextLoop from 'react-text-loop';
import Title from './Title';

export default class TopList extends Component {
  static displayName = 'TopList';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    // this.updateDate();
    // setInterval(this.updateDate, 1000);

    //setInterval(this.updateChartData, 30 * 1000);
  }

  updateDate = ()=>{

  };

  render() {

    const {data, type} = this.props;
    let queueList = [];
    let dataNew = data;
    if(type===2){
      // 需要补全
      let left = 10 - data.length % 10;
      for (let idxLeft = 0; idxLeft < left; idxLeft++){
        // 补全10整
        dataNew.push({name:'-', value:'-'});
      }
    }
    for (let i=0; i<10; i++){
      let q = dataNew.filter((e, index)=>{
        return index%10===i;
      });
      queueList.push(q);
    }
    let divLoopList = queueList.map((q, index1)=>{
      return (
        <TextLoop interval={5000} adjustingSpeed={5000}>
          {q.map((data, index2) => {
            return (
              <li style={styles.item}>
                <span style={styles.idx}>No.{index2*10 + index1+1}</span>
                <span style={styles.name}>{data.name}</span>
                <span style={styles.name}>{data.value}</span>
              </li>
            );
          })}
        </TextLoop>
      );
    });
    return (
      <div style={{height: '50%'}}>
        <Title data={this.props.title}/>
        <ul style={styles.list}>
          {divLoopList}
        </ul>
      </div>
    );
  }
}

const styles = {
  list: {
    color: '#fff',
    lineHeight: '36px',
    marginTop: '20px',
  },
  item: {
    borderBottom: '1px solid #00F0FF',
    width: '300px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  name: {
    marginLeft: '10px',
  },
};
