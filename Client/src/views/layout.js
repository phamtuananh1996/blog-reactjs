import React, { Component } from 'react';
import Header from '../components/share/header'
import Menu from '../components/share/menu'
import Footer from '../components/share/footer'

class layout extends Component {
  componentDidUpdate(prevProps) {
    //if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    //  }
  }
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