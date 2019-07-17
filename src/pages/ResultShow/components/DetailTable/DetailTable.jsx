import React, { Component } from 'react';
import IceContainer from '@icedesign/container';

export default class DetailTable extends Component {
  static displayName = 'DetailTable';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const {data} = this.props;
    return (
      <div className="detail-table">
          <ul style={styles.detailTable}>
            <li style={styles.detailItem}>
              <div style={styles.detailTitle}>总分：</div>
              <div style={styles.detailBody}>{data.score}</div>
            </li>
            {
              data.summary.map((item)=>{
                return (
                  <li style={styles.detailItem}>
                    <div style={styles.detailTitle}>{item}</div>
                  </li>
                );
              })
            }
          </ul>
      </div>
    );
  }
}

const styles = {
  detailTable:{
    padding:20,
  },
  detailItem: {
    padding: '15px 0px',
    display: 'flex',
    borderTop: '1px solid #EEEFF3',
  },
  detailTitle: {
    marginRight: '30px',
    textAlign: 'right',
    color: '#999999',
  },
  detailBody: {
    flex: 1,
  },
  statusProcessing: {
    color: '#64D874',
  },
};
