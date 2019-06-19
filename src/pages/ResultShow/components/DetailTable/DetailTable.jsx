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
    return (
      <div className="detail-table">
          <ul style={styles.detailTable}>
            <li style={styles.detailItem}>
              <div style={styles.detailTitle}>标题：</div>
              <div style={styles.detailBody}>图片说明标题</div>
            </li>
            <li style={styles.detailItem}>
              <div style={styles.detailTitle}>指标1：</div>
              <div style={styles.detailBody}>1000.00</div>
            </li>
            <li style={styles.detailItem}>
              <div style={styles.detailTitle}>指标2：</div>
              <div style={styles.detailBody}>1000.00</div>
            </li>
            <li style={styles.detailItem}>
              <div style={styles.detailTitle}>指标3：</div>
              <div style={styles.detailBody}>1000.00</div>
            </li>
            <li style={styles.detailItem}>
              <div style={styles.detailTitle}>指标4：</div>
              <div style={styles.detailBody}>
                1000.00
              </div>
            </li>
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
    width: '120px',
    color: '#999999',
  },
  detailBody: {
    flex: 1,
  },
  statusProcessing: {
    color: '#64D874',
  },
};
