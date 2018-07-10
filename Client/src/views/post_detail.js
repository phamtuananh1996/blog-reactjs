import React, { Component } from 'react';
import PostDetail from '../components/detail_post/detail'
import Sidebar from '../components/home/sidebar';

class post_detail extends Component {
  render() {
    return (
      <div class="wrapper">
        <div class="content-block has-sidebar">
          <PostDetail id={this.props.match.params.id} />
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default post_detail;