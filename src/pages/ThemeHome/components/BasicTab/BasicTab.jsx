import React, { Component } from 'react';
import { Tab } from '@alifd/next';
import IceContainer from '@icedesign/container';
import HotRank from "../HotRank";

export default class BasicTab extends Component {
  static displayName = 'BasicTab';


  handleChange = (key) =>{
    console.log(key);
  }

  render() {
    const tabs = [
      { tab: '订阅号概览', key: 'guide' },
      { tab: '订阅号推送', key: 'push' },
      { tab: '互动消息', key: 'message' },
      { tab: '自动回复设置', key: 'autoreply' },
    ];

    return (
      <div className="basic-tab">
        <IceContainer style={styles.tabCardStyle}>

          <div className="demo-item-title">Extra in Vertical</div>
          <Tab shape="wrapped" tabPosition="left" onChange={this.handleChange}  contentClassName="custom-tab-content">
            <Tab.Item title="竞赛说明" key="1">Tab 1 Content</Tab.Item>
            <Tab.Item title="数据下载" key="2">Tab 2 Content</Tab.Item>
            <Tab.Item title="提交结果" key="3">Tab 3 Content</Tab.Item>
            <Tab.Item title="排行榜单" key="4"> <HotRank/></Tab.Item>
          </Tab>

        </IceContainer>
      </div>
    );
  }
}

const styles = {
  tabCardStyle: {
    padding: 0,
  },
  demoItemTitle: {
  fontSize: '16px',
  color: '#333',
  padding: '8px',
  margin: '14px 0',
},

customContent: {
  padding: '15px',
},

nextTabsContent: {
  color: '#333',
  fontSize: '12px',
  padding: '12px',
},

customTabItem: {
  marginRight: '-1px !important',
},

justifyTabsTab: {
  width: '140px',
  textAlign: 'center',
},
};
