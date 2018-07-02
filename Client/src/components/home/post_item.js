import React, { Component } from 'react';

class post_item extends Component {
  render() {
    return (
      <div class="item" data-color-top-slider="#8ec91d">
        <div class="item-header">
          <a href="post.html">
            <span class="comment-tag"><i class="fa fa-comment-o"></i>65<i></i></span>
            <span class="read-more-wrapper"><span class="read-more">Read full article<i></i></span></span>
            <img src="images/photos/image-15.jpg" alt="" />
          </a>
        </div>
        <div class="item-content">
          <strong class="category-link"><a href="category.html">{this.props.post.category_name}{this.props.post.id}</a></strong>
          <h3><a href="post.html">{this.props.post.title}</a></h3>
          <span class="item-meta">
            <a href="post.html#comments"><i class="fa fa-comment-o"></i>82 comments</a>
            <a href="blog.html"><i class="fa fa-clock-o"></i>March 30, 2015</a>
          </span>
          <p>{this.props.post.content}</p>
          <a href="post.html" class="read-more-button">Read full article<i class="fa fa-mail-forward"></i></a>
        </div>
      </div>
    );
  }
}

export default post_item;