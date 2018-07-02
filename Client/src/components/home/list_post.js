import React, { Component } from 'react';
import PostItem from './post_item';
import {connect} from 'react-redux'
import Action from '../../store/actions/post'

class list_post extends Component {
  render() {
    return (
      <div class="content-block-single">
        <div class="content-panel">
          <div class="content-panel-title">
            <a class="right" onClick={()=>{this.props.sort(1)}}>Read all articles</a>
            <h2>Latest Articles</h2>
          </div>
          <div class="content-panel-body article-list">
          {
            this.props.Posts.map((post,index)=>{
              return (
                <PostItem post={post}/>
              )
            })
          }
            
          </div>
          <div class="content-panel-body pagination">
            <a class="prev page-numbers" href="#"><i class="fa fa-angle-left"></i>Previous</a>
            <a class="page-numbers" href="#">1</a>
            <span class="page-numbers current">2</span>
            <a class="page-numbers" href="#">3</a>
            <a class="page-numbers" href="#">4</a>
            <a class="page-numbers" href="#">5</a>
            <a class="next page-numbers" href="#">Next<i class="fa fa-angle-right"></i></a>
          </div>
        </div>
        <div class="content-panel">
          <div class="content-panel-body do-space">
            <a href="#" target="_blank"><img src="images/no-space-2.jpg" alt="" /></a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    Posts: state.Posts
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sort: (flag) => {
      dispatch(Action.sort(flag))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(list_post);