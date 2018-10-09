import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <p class="logo">
          <img
            class="header-logo"
            src="https://octodex.github.com/ui/logo.png"
          />
        </p>
        <nav>
          <ul>
            <li>
              <a href="http://feeds.feedburner.com/Octocats" target="_blank">
                RSS
              </a>
            </li>
            <li>
              <a href="https://octodex.github.com/faq.html" target="_blank">
                FAQ
              </a>
            </li>
            <li>
              <a href="https://github.com/" target="_blank">
                Back to GitHub
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
