import React, { Component } from 'react';
import Nav from './menu'

class header extends Component {
  render() {
    return (
      <header class="header">
				<div class="wrapper">
					<div class="header-main">
            <div class="header-main-logo">
							<a href="index-2.html"><img src="images/logo.png" alt="" data-ot-retina="images/logo@2x.png" /></a>
            </div>

            <div class="header-main-weather">
              <div class="weather-block">
                <i class="wi wi-day-lightning"></i>
                <strong>Jurmala, Latvia</strong>
                <span>+3&deg;C, Light rain</span>
              </div>
            </div>

            <div class="header-main-search">
              <div class="search-block">
                <form action="http://sendigo.orange-themes.com/html/blog.html">
                  <input type="text" placeholder="Search something.." value="" />
                </form>
              </div>
            </div>
					</div>
          <Nav/>
				</div>
			</header>
        );
      }
    }
    
export default header;