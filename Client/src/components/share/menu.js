import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class menu extends Component {
  render() {
    return (
      <nav class="main-menu">
            <a href="#dat-menu" class="dat-menu-button"><i class="fa fa-bars"></i>Show Menu</a>
            <div class="main-menu-placeholder">
              <div class="main-menu-wrapper">
                <div class="menu-search-thing">
                  <form action="http://sendigo.orange-themes.com/html/blog.html">
                    <input type="text" placeholder="Search something.." />
                    <input type="submit" value="Search" />
                  </form>
                  <button><i class="fa fa-search"></i></button>
                </div>
                <ul class="top-main-menu load-responsive" rel="Main Menu">
                  <li><Link to='/'>Homepage</Link></li>
                  <li><a href="blog.html"><span>Blog page</span></a>
                    <ul class="sub-menu">
                      <li><a href="blog2.html">Blog page #2</a></li>
                      <li><a href="category.html">Category page</a></li>
                      <li><a href="post.html"><span>Post page</span></a>
                        <ul class="sub-menu">
                          <li><a href="post-no-image.html">Post with no image</a></li>
                          <li><a href="post-sidebar-left.html">Post, sidebar on left</a></li>
                          <li><a href="post-similar.html">Post with similar articles</a></li>
                          <li><a href="post-no-comments.html">Post without comments</a></li>
                          <li><a href="post.html">Post with review block</a></li>
                        </ul>
                      </li>
                      <li><a href="full-width.html">Full width page</a></li>
                      <li><a href="error404.html">Error 404 page</a></li>
                    </ul>
                  </li>
                  <li class="has-ot-mega-menu"><a href="#"><span>Mega Menu</span></a>
                    <ul class="ot-mega-menu">
                      <li>

                        <div class="widget">
                          <h3>Live feed from instagram</h3>
                          <div class="widget-instagram-photos">

                            <div class="item">
                              <div class="item-header">
                                <a href="#"><img src="../../distilleryimage1-a.akamaihd.net/427393eef7af11e2b65722000a9e00be_7.jpg" alt="" /></a>
                              </div>
                              <div class="item-content">
                                <span class="insta-like-count"><i class="fa fa-heart"></i>160 likes</span>
                                <h4><a href="#">How The Walking Dead irresistible to...</a></h4>
                                <span class="item-meta">
                                  <a href="#"><i class="fa fa-clock-o"></i>3 days ago</a>
                                </span>
                              </div>
                            </div>

                            <div class="item">
                              <div class="item-header">
                                <a href="#"><img src="../../igcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-15/10576140_778241095547266_331905980_n.jpg" alt="" /></a>
                              </div>
                              <div class="item-content">
                                <span class="insta-like-count"><i class="fa fa-heart"></i>283 likes</span>
                                <h4><a href="#">Possit nominati peri culis cu sit, assum</a></h4>
                                <span class="item-meta">
                                  <a href="#"><i class="fa fa-clock-o"></i>6 days ago</a>
                                </span>
                              </div>
                            </div>

                            <a href="#" target="_blank" class="button-read-more">View instagram profile</a>

                          </div>
                        </div>

                        <div class="widget">
                          <h3>Subscribe to our newsletter</h3>
                          <div class="widget-subscribe">
                            <div>
                              <p>Ne congue electram dignissim eos, ius verterem gubergren temporibus te, cu inciderint definitiones usu.</p>
                            </div>
                            <hr/>
                              <form action="#">
                                <label class="label-input">
                                  <span>Your name</span>
                                  <input type="text" value="" />
                                </label>
                                <label class="label-input">
                                  <span>E-mail address</span>
                                  <input type="email" value="" />
                                </label>
                                <input type="submit" class="button" value="Subscribe" />
                              </form>
													</div>
                          </div>

                          <div class="widget">
                            <h3>Popular Articles</h3>
                            <div class="widget-article-list">

                              <div class="item">
                                <div class="item-header">
                                  <a href="post.html"><img src="images/photos/image-7.jpg" alt="" /></a>
                                </div>
                                <div class="item-content">
                                  <h4><a href="post.html">Watch the first 30 minutes of Mortal Kombat X</a></h4>
                                  <span class="item-meta">
                                    <a href="post.html#comments"><i class="fa fa-comment-o"></i>82 comments</a>
                                    <a href="blog.html"><i class="fa fa-clock-o"></i>March 30, 2015</a>
                                  </span>
                                </div>
                              </div>

                              <div class="item">
                                <div class="item-header">
                                  <a href="post.html"><img src="images/photos/image-8.jpg" alt="" /></a>
                                </div>
                                <div class="item-content">
                                  <h4><a href="post.html">How The Walking Dead became irresistible to advertisers</a></h4>
                                  <span class="item-meta">
                                    <a href="post.html#comments"><i class="fa fa-comment-o"></i>139 comments</a>
                                    <a href="blog.html"><i class="fa fa-clock-o"></i>March 30, 2015</a>
                                  </span>
                                </div>
                              </div>

                              <a href="blog.html" class="button-read-more">Show more articles</a>

                            </div>
                          </div>

                          <div class="widget">
                            <h3>Latest Article Comments</h3>
                            <div class="widget-comments-list active">

                              <div class="item">
                                <div class="item-header">
                                  <img src="images/no-avatar.jpg" alt="" />
                                </div>
                                <div class="item-content">
                                  <h4><a href="#">Lindon Brook</a></h4>
                                  <p>Vim corpora definitionem ad, est et tritani argumentum, ei nec adhuc dignissim eos...</p>
                                  <span class="item-meta">
                                    <a href="post.html"><i class="fa fa-reply"></i>Read related article</a>
                                  </span>
                                </div>
                              </div>

                              <div class="item">
                                <div class="item-header">
                                  <img src="images/no-avatar.jpg" alt="" />
                                </div>
                                <div class="item-content">
                                  <h4><a href="#">Dane Goddard</a></h4>
                                  <p>Iudico consequat sit te, diceret nonumes adolescens id vim.</p>
                                  <span class="item-meta">
                                    <a href="post.html"><i class="fa fa-reply"></i>Read related article</a>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
											</li>
										</ul>
									</li>
                    <li><a href="shortcodes.html">Shortcodes</a></li>
                    <li><a href="photo-gallery.html"><span>Photo Gallery</span></a>
                      <ul class="sub-menu">
                        <li><a href="photo-gallery-single.html">Photo gallery single</a></li>
                        <li><a href="photo-gallery-single-sidebar.html">Photo gallery single with sidebar</a></li>
                        <li><a href="photo-gallery-single-lightbox.html">Photo gallery single lightbox</a></li>
                      </ul>
                    </li>
                    <li><a href="archive.html">Archive</a></li>
                    <li><a href="contact-us.html">Contact us</a></li>
								</ul>
                  <ul class="top-bottom-menu load-responsive" rel="Bottom Menu">
                    <li><a href="category.html">Nature is awesome</a></li>
                    <li><a href="category.html">We look at todays fashion</a></li>
                    <li><a href="category.html">Car &amp; Racing world</a></li>
                    <li><a href="category.html">The urban news</a></li>
                    <li><a href="#" target="_blank"><strong>Buy this template</strong></a></li>
                  </ul>
							</div>
              </div>
					</nav>
    );
  }
}

export default menu;