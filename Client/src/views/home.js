import React, { Component } from 'react';
import Slide from '../components/home/slide'
import Sidebar from '../components/home/sidebar';
import ListPost from '../components/home/list_post';

class home extends Component {
  render() {
    return (
      <div class="wrapper">
        <Slide />
        <div class="content-block has-sidebar">
          <ListPost />
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default home;