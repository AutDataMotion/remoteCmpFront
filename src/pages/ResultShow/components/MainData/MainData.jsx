import React, { Component } from 'react';

export default class MainData extends Component {
  static displayName = 'MainData';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.content}>
          <div style={styles.contentItemLeft}>
            <div style={styles.contentNum}>
              <span style={styles.symbol}>总得分:</span>
              <span style={styles.bigNum}>99.9999</span>
            </div>
          </div>
          <div style={styles.contentItemRight}>
            <div style={styles.contentDesc}>摘要信息说明文字</div>
            <div style={styles.contentDesc}>摘要信息说明文字</div>
            <div style={styles.contentDesc}>摘要信息说明文字</div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    background: '#F4F4F4',
    width:'98%',
  },
  content: {
    width: '100%',
    height: 100,
    maxWidth: 1024,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '0 auto',
  },
  contentItemLeft: {
    width:'50%'
  },
  contentItemRight: {
    width:'50%'
  },
  contentNum: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
  },
  bigNum: {
    color: '#333',
    fontSize: 40,
  },
  symbol: {
    color: '#333',
    fontSize: 30,
    marginLeft: 10,
  },
  contentDesc: {
    color: '#666666',
    fontSize: 16,
    textAlign: 'left',
    marginTop: 6,
  },
};
