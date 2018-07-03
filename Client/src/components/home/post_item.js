import React, { Component } from 'react';
import { Link } from "react-router-dom";

class post_item extends Component {
  render() {
    return (
      <div class="item" data-color-top-slider="#8ec91d">
        <div class="item-header">
          <Link to={"/post-detail/"+this.props.post.id}>
            <span class="comment-tag"><i class="fa fa-eye"></i>{this.props.post.view_counts}<i></i></span>
            <span class="read-more-wrapper"><span class="read-more">Read full article<i></i></span></span>
            <img src={this.props.post.image} alt="" />
          </Link>
        </div>
        <div class="item-content">
          <strong class="category-link"><a href="category.html">{this.props.post.category}</a></strong>
          <h3><a href="post.html">{this.props.post.title}</a></h3>
          <span class="item-meta">
            <a href="post.html#comments"><i class="fa fa-eye"></i>{this.props.post.view_counts} view</a>
            <a href="blog.html"><i class="fa fa-clock-o"></i>{this.props.post.created_at}</a>
          </span>
          <p>{this.props.post.content}</p>
          <a href="post.html" class="read-more-button">Read full article<i class="fa fa-mail-forward"></i></a>
        </div>
      </div>
    );
  }
}

export default post_item;