import React, { Component } from 'react';

class footer extends Component {
  render() {
    return (
      <footer class="footer">
      <div class="footer-menu">
        <div class="wrapper">
          <a href="#top" class="right"><i class="fa fa-chevron-up"></i>Back to <strong>top</strong></a>
          <ul>
            <li><a href="category.html" style={{color: '#eb6435'}}>Nature is awesome</a></li>
            <li><a href="category.html" style={{color: '#867eef'}}>We look at todays fashion</a></li>
            <li><a href="category.html" style={{color: '#4288de'}}>Car &amp; Racing world</a></li>
            <li><a href="category.html" style={{color: '#8ec91d'}}>The urban news</a></li>
          </ul>
        </div>
      </div>
      <div class="wrapper">
        
        <div class="footer-widgets">

          <div class="widget-split">
            <div class="widget">
              <h3>About Sendigo</h3>
              <div>
                <div>
                  <p>His quis postea id, illum audiam nominavi ex pro. Pri no eros omnes, cu soleat officiis iudicabit vel. Alii nostrum moderatius id cum, qui cu nominavi conclusionemque.</p>
                </div>
                <hr/>
                <ul class="widget-contact-info">
                  <li><i class="fa fa-envelope"></i>name@myblog.com</li>
                  <li><i class="fa fa-location-arrow"></i>Riga, Latvia</li>
                  <li><i class="fa fa-phone"></i>+44 1387 255794</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="widget-split">
            <div class="widget">
              <h3>Tag cloud</h3>
              <div class="tagcloud">
                <a href="blog.html">Dignissim</a>
                <a href="blog.html">Habeo quods</a>
                <a href="blog.html">Sumo</a>
                <a href="blog.html">Prima dicunt</a>
                <a href="blog.html">Scripser</a>
                <a href="blog.html">Dignissim</a>
                <a href="blog.html">Scripser</a>
                <a href="blog.html">Scripser</a>
                <a href="blog.html">Dignissim</a>
                <a href="blog.html">Scripser</a>
                <a href="blog.html">Dignissim</a>
                <a href="blog.html">Habeo quods</a>
                <a href="blog.html">Sumo</a>
                <a href="blog.html">Prima dicunt</a>
                <a href="blog.html">Scripser</a>
                <a href="blog.html">Dignissim</a>
                <a href="blog.html">Habeo quods</a>
              </div>
            </div>
          </div>

          <div class="widget-split">
            <div class="widget">
              <h3>Popular articles</h3>
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

                <a href="blog.html" class="button-read-more">Show more reviews</a>

              </div>
            </div>
          </div>

          <div class="widget-split">
            <div class="widget">
              <h3>Latest article comments</h3>
              <div class="widget-comments-list">
                
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
          </div>
        </div>
      </div>
    </footer>
    );
  }
}

export default footer;