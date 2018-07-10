import React, { Component } from 'react';
import { connect } from 'react-redux'
import Type from '../../store/action_type/action_type'

class detail extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.showPost(this.props.id)
	}
	render() {
		return (
			<div class="content-block-single">
				<div class="content-panel">
					<div class="content-panel-body article-header">
						<div class="article-header-image">
							<img src={this.props.post.image} alt=""/>
						</div>
						<strong class="category-link">
							<a href="category.html">{this.props.post.category?this.props.post.category.name:''}</a>
						</strong>
						<h2>{this.props.post.title}</h2>
						<div class="article-meta">
							<a href="blog.html" class="meta-item">{this.props.post.created_at}</a>
							<a href="#comments" class="meta-item">{this.props.post.view_counts} Views</a>
						</div>
					</div>
					<div class="content-panel-body shortcode-content">
						<p>
							{this.props.post.content}
						</p>
					</div>
				</div>
				<div class="content-panel">
					<div class="content-panel-body article-main-review-block" itemscope itemtype="http://data-vocabulary.org/Review">
						<div class="main-review-background"></div>
						<div class="main-review-footer">
							<strong class="review-count" itemProp="rating">4.5</strong>
							<strong class="item-stars"><span class="stars-inner" style={{ width: '90%' }}></span></strong>

							<meta itemProp="itemreviewed" content="Quod sumo pertinacia eos ea at nec modo sonet alterum" />
							<meta itemProp="reviewer" content="Orange Themes" />
							<meta itemProp="dtreviewed" content="April 15, 2015" />
						</div>
					</div>
				</div>
				<div class="content-panel">
					<div class="content-panel-body article-main-share">
						<span class="share-front"><i class="fa fa-share-alt"></i>Share</span>
						<a href="#" class="article-main-share-button"><strong class="hover-color-facebook">Facebook</strong><i>2.1k</i></a>
						<a href="#" class="article-main-share-button"><strong class="hover-color-twitter">Twitter</strong><i>1.4k</i></a>
						<a href="#" class="article-main-share-button"><strong class="hover-color-google-plus">Google+</strong><i>603</i></a>
						<a href="#" class="article-main-share-button"><strong class="hover-color-linkedin">Linkedin</strong><i>278</i></a>
						<a href="#" class="article-main-share-button"><strong class="hover-color-pinterest">Pinterest</strong><i>195</i></a>
					</div>
				</div>
				<div class="content-panel">
					<div class="content-panel-body article-main-tags">
						<span class="tags-front"><i class="fa fa-tags"></i>Tags</span>
						<a href="blog.html">Dignissim</a>
						<a href="blog.html">Habeo quods</a>
						<a href="blog.html">Sumo</a>
						<a href="blog.html">Prima dicunt</a>
						<a href="blog.html">Scripser</a>
					</div>
				</div>
				<div class="content-panel">
					<div class="content-panel-body article-main-next-prev">
						<div class="paragraph-row">
							<div class="column6">
								<a href="#" class="article-nav-previous">
									<i class="fa fa-chevron-left"></i>
									<span>Previous article</span>
									<strong>Has ut quando laoreet et lucilius menandri usu duo ea errem urbanitas</strong>
								</a>
							</div>
							<div class="column6">
								<a href="#" class="article-nav-next">
									<i class="fa fa-chevron-right"></i>
									<span>Next article</span>
									<strong>Amet iudico tincidunt at sea ut euismod antiopam interesset eos</strong>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="content-panel">
					<div class="content-panel-title">
						<a href="blog.html" class="right">More articles</a>
						<h2>About Article Author</h2>
					</div>
					<div class="content-panel-body about-author-block">

						<div class="paragraph-row">
							<div class="column2">
								<img src="images/no-avatar-100x100.jpg" alt="" />
							</div>
							<div class="column10">
								<div class="author-socials right">
									<a href="#" class="hover-color-facebook"><i class="fa fa-facebook"></i></a>
									<a href="#" class="hover-color-twitter"><i class="fa fa-twitter"></i></a>
									<a href="#" class="hover-color-google-plus"><i class="fa fa-google-plus"></i></a>
									<a href="#" class="hover-color-linkedin"><i class="fa fa-linkedin"></i></a>
									<a href="#" class="hover-color-pinterest"><i class="fa fa-pinterest-p"></i></a>
									<a href="#" class="hover-color-dribbble"><i class="fa fa-dribbble"></i></a>
								</div>
								<h3><a href="#">Orange-Themes</a><span class="user-label">Senior Editor</span></h3>
								<p>Pro vocent percipit postulant an, utinam copiosae molestiae his ne. Usu ne sensibus instructior, eos probo voluptatum theophrastus at. Volumus tacimates splendide pro ea, mel in blandit appetere, nonumy fastidii propriae cum ex. His quis postea id...</p>
								<a href="blog.html" class="read-more-button">View more articles by author<i class="fa fa-mail-forward"></i></a>
							</div>
						</div>
					</div>
				</div>
				<div class="content-panel">
					<div class="content-panel-body do-space">
						<a href="#" target="_blank"><img src="images/no-space-2.jpg" alt="" /></a>
					</div>
				</div>
				<div class="content-panel">
					<div class="content-panel-title">
						<a href="blog.html" class="right">Read all articles</a>
						<h2>Similar Articles</h2>
					</div>
					<div class="top-slider-body" data-top-slider-timeout="6000" data-top-slider-autostart="false">
						<div class="top-slider-controls">
							<button class="left" data-top-slider-dir="left"><i class="fa fa-caret-left"></i> Previous</button>
							<button class="right" data-top-slider-dir="right">Next <i class="fa fa-caret-right"></i></button>
						</div>
						<div class="top-slider-content">
							<div class="top-slider-content-wrap active">
								<div class="item">
									<div class="item-header">
										<a href="post.html">
											<span class="comment-tag"><i class="fa fa-comment-o"></i>10<i></i></span>
											<span class="read-more-wrapper"><span class="read-more">Read full article<i></i></span></span>
											<img src="https://lorempixel.com/640/480/?47931" alt="" />
										</a>
									</div>
									<div class="item-content">
										<strong class="category-link"><a href="category.html">Nature is awesome</a></strong>
										<h3><a href="post.html">Greece's reform plan backed by creditors</a></h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna esse cillum dolore...</p>
									</div>
								</div>
								<div class="item" data-color-top-slider="#867eef">
									<div class="item-header">
										<a href="post.html">
											<span class="comment-tag"><i class="fa fa-comment-o"></i>132<i></i></span>
											<span class="read-more-wrapper"><span class="read-more">Read full article<i></i></span></span>
											<img src="https://lorempixel.com/640/480/?47931" alt="" />
										</a>
									</div>
									<div class="item-content">
										<strong class="category-link"><a href="category.html">Wee look at todays fashion</a></strong>
										<h3><a href="post.html">Greece's reform plan backed by creditors</a></h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna esse cillum dolore...</p>
									</div>
								</div>
								<div class="item" data-color-top-slider="#867eef">
									<div class="item-header">
										<a href="post.html">
											<span class="comment-tag"><i class="fa fa-comment-o"></i>290<i></i></span>
											<span class="read-more-wrapper"><span class="read-more">Read full article<i></i></span></span>
											<img src="https://lorempixel.com/640/480/?47931" alt="" />
										</a>
									</div>
									<div class="item-content">
										<strong class="category-link"><a href="category.html">Wee look at todays fashion</a></strong>
										<h3><a href="post.html">Greece's reform plan backed by creditors</a></h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna esse cillum dolore...</p>
									</div>
								</div>
							</div>
							<div class="top-slider-content-wrap">
								<div class="item">
									<div class="item-header">
										<a href="post.html">
											<span class="comment-tag"><i class="fa fa-comment-o"></i>10<i></i></span>
											<span class="read-more-wrapper"><span class="read-more">Read full article<i></i></span></span>
											<img src="https://lorempixel.com/640/480/?47931" alt="" />
										</a>
									</div>
									<div class="item-content">
										<strong class="category-link"><a href="category.html">Nature is awesome</a></strong>
										<h3><a href="post.html">Greece's reform plan backed by creditors</a></h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna esse cillum dolore...</p>
									</div>
								</div>
								<div class="item" data-color-top-slider="#867eef">
									<div class="item-header">
										<a href="post.html">
											<span class="comment-tag"><i class="fa fa-comment-o"></i>132<i></i></span>
											<span class="read-more-wrapper"><span class="read-more">Read full article<i></i></span></span>
											<img src="https://lorempixel.com/640/480/?47931" alt="" />
										</a>
									</div>
									<div class="item-content">
										<strong class="category-link"><a href="category.html">Wee look at todays fashion</a></strong>
										<h3><a href="post.html">Greece's reform plan backed by creditors</a></h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna esse cillum dolore...</p>
									</div>
								</div>
								<div class="item" data-color-top-slider="#867eef">
									<div class="item-header">
										<a href="post.html">
											<span class="comment-tag"><i class="fa fa-comment-o"></i>290<i></i></span>
											<span class="read-more-wrapper"><span class="read-more">Read full article<i></i></span></span>
											<img src="https://lorempixel.com/640/480/?47931" alt="" />
										</a>
									</div>
									<div class="item-content">
										<strong class="category-link"><a href="category.html">Wee look at todays fashion</a></strong>
										<h3><a href="post.html">Greece's reform plan backed by creditors</a></h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna esse cillum dolore...</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		post: state.PostDetail
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		showPost: (id) => {
			dispatch({ type: Type.FETCH_SHOW_POSTS, payload: id })
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(detail)