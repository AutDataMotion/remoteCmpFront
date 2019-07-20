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

    const {data} = this.props;
    return (
      <div style={styles.wrapper}>
        <div style={styles.content}>
          <div style={styles.contentItemLeft}>
            <div style={styles.contentNum}>
              <span style={styles.symbol}>队伍名称:</span>
              <span style={styles.bigNum}>{data.teamName}</span>
            </div>
            <div style={styles.contentNumRight}>
              <span style={styles.symbol}>得分:</span>
              <span style={styles.bigNum}>{data.score}</span>
            </div>
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
    height: 70,
    maxWidth: 1024,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '0 auto',
  },
  contentItemLeft: {
  },
  contentItemRight: {
    width:'50%'
  },
  contentNum: {
    float: 'left',
    alignItems: 'center',
    textAlign: 'left',
  },

  contentNumRight: {
    float: 'left',
    alignItems: 'center',
    textAlign: 'left',
    marginLeft:'100px',
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
