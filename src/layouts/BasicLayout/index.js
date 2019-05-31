import React, { Component } from 'react';
import Layout from '@icedesign/layout';
import Header from './components/Header';
import Footer from './components/Footer';
import MainRoutes from './MainRoutes';

import './index.scss';
import BlackFooter from '../../pages/ThemeHome/components/BlackFooter';
import {Col} from "@alifd/next/lib/grid";

export default class BasicLayout extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <Layout className="basic-layout">
        <Header />
        <div style={styles.mainContent}>
          <MainRoutes />
        </div>
        <BlackFooter />
      </Layout>
    );
  }
}

const styles = {
  mainContent: {
    marginTop: '62px',
    backgroundColor:'white'
    /*padding: '0 20px',*/
  },
};
