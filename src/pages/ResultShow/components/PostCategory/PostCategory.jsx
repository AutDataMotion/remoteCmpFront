import React, { Component } from 'react';
import Layout from '@icedesign/layout';
import {Table, Card, Pagination} from '@alifd/next';
import { Tab, Button } from '@alifd/next';
import globalConf from "../../../../globalConfig";
import ResultTabContent from "./ResultTabContent";


const tabs = [
  {
    tab:globalConf.themeConf[0].title,
    key: '1',
  },
  {
    tab: globalConf.themeConf[1].title,
    key: '2',

  },
  {
    tab: globalConf.themeConf[2].title,
    key: '3',

  },
  {
    tab: globalConf.themeConf[3].title,
    key: '4',

  },
  {
    tab:globalConf.themeConf[4].title,
    key: '5',

  },
];

export default class PostCategory extends Component {
  static displayName = 'PostCategory';

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Tab
          navStyle={{ backgroundColor: '#fff' }}
          contentStyle={{ backgroundColor: '#fff', marginTop: 20 }}
          triggerType="click"
        >
          <Tab.Item
            tabStyle={{ height: 60, padding: '0 15px' }}
            key={tabs[0].key}
            title={
              <div style={styles.navItemWraper}>
                {tabs[0].tab}
              </div>
            }
          >
            <ResultTabContent themeInfo={tabs[0]}/>
          </Tab.Item>

          <Tab.Item
            tabStyle={{ height: 60, padding: '0 15px' }}
            key={tabs[1].key}
            title={
              <div style={styles.navItemWraper}>
                {tabs[1].tab}
              </div>
            }
          >
            <ResultTabContent themeInfo={tabs[1]}/>
          </Tab.Item>

          <Tab.Item
            tabStyle={{ height: 60, padding: '0 15px' }}
            key={tabs[2].key}
            title={
              <div style={styles.navItemWraper}>
                {tabs[2].tab}
              </div>
            }
          >
            <ResultTabContent themeInfo={tabs[2]}/>
          </Tab.Item>

          <Tab.Item
            tabStyle={{ height: 60, padding: '0 15px' }}
            key={tabs[3].key}
            title={
              <div style={styles.navItemWraper}>
                {tabs[3].tab}
              </div>
            }
          >
            <ResultTabContent themeInfo={tabs[3]}/>
          </Tab.Item>

          <Tab.Item
            tabStyle={{ height: 60, padding: '0 15px' }}
            key={tabs[4].key}
            title={
              <div style={styles.navItemWraper}>
                {tabs[4].tab}
              </div>
            }
          >
            <ResultTabContent themeInfo={tabs[4]}/>
          </Tab.Item>

        </Tab>
      </div>
    );
  }
}


const styles = {
  titleWrapper: {
    backgroundColor: '#fff',
    height: 54,
    lineHeight: '54px',
    padding: '0 16px',
  },
  navItemWraper: {
    display: 'flex',
    alignItems: 'center',
    height: 60,
    lineHeight: '60px',
  },
  postCategoryList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  postCategoryItem: {
    width: '49%',
    flex: '0 0 49%',
    boxSizing: 'border-box',
    backgroundColor: '#f6f6f6',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  coverWrapper: {
    paddingRight: 14,
  },
  blockDetail: {
    position: 'relative',
  },
  blockTitle: {
    fontSize: 16,
    padding: '6px 0',
  },
  blockItem: {
    display: 'flex',
  },
  blockLable: {
    flex: '0 0 60px',
    fontSize: 12,
    lineHeight: '22px',
  },
  blockDesc: {
    fontSize: 12,
    color: '#999',
    lineHeight: '22px',
  },
  blockBtn: {
    position: 'absolute',
    right: '10px',
    bottom: '10px',
    borderRadius: '3px',
    background: '#6af',
    color: '#fff',
  },
};
