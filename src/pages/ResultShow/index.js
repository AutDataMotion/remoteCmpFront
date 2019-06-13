import React, { Component } from 'react';
import PostCategory from './components/PostCategory';
import DetailTable from './components/DetailTable';

export default class ResultShow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="result-show-page">
        {/* 文章创作类型列表 */}
        <PostCategory />
      </div>
    );
  }
}
