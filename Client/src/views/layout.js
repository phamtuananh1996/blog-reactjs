import React, { Component } from 'react';
import Header from '../components/share/header'
import Menu from '../components/share/menu'
import Footer from '../components/share/footer'

class layout extends Component {
  render() {
    return (
      <div>
        <Header />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default layout;