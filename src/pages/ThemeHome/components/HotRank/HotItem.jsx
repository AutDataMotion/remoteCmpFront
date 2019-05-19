import { Progress } from '@alifd/next';
import React, { Component } from 'react';

import './HotRankItem.scss';

const rankStyle = [
  { backgroundColor: '#f74444' },
  { backgroundColor: '#ff7272' },
  { backgroundColor: '#f9a4a4' },
];

class HotItem extends Component {

  changeTwoDecimal(x){
    let f_x1 = parseFloat(x);
    if (isNaN(f_x1)) {
      return 0;
    }
    let f_x = Math.round(x * 100) / 100;
    let s_x = f_x.toString();
    let pos_decimal = s_x.indexOf('.');
    if (pos_decimal < 0) {
      pos_decimal = s_x.length;
      s_x += '.';
    }
    while (s_x.length <= pos_decimal + 2) {
      s_x += '0';
    }
    return s_x;
  }

  render() {
    const { data } = this.props;
    return (
      <a className="hot-rank-item" href={data.url} style={styles.item}>
        <span
          style={{
            ...styles.index,
            ...rankStyle[Number(data.rankNum) - 1],
          }}
        >
          {data.rankNum}
        </span>
        <span style={styles.keyword}>{data.team_name}</span>
        <span style={styles.total}>{ this.changeTwoDecimal(data.score)}</span>
      </a>
    );
  }
}

const styles = {
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  index: {
    minWidth: 22,
    height: 22,
    padding: '0 4px',
    border: '2px solid #eee',
    color: '#fff',
    lineHeight: '18px',
    textAlign: 'center',
    borderRadius: 11,
    backgroundColor: '#c6c6c6',
    marginRight: 10,
    fontSize: 12,
  },
  keyword: {
    fontSize: 14,
    flex: 'auto',
  },
  total: {
    fontSize: 12,
    paddingLeft: 10,
    width: 40,
  },
  link: {
    fontSize: 12,
    paddingLeft: 10,
  },
};

export default HotItem;
