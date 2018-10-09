import React, { Component } from 'react'

class Octocat extends Component {
  state = {}
  render() {
    return (
      <article className="cat-element">
        <div className="top-image">
          <img className="main-image" src={this.props.catimage} />
        </div>
        <div className="image-footer">
          <p className="number">#{this.props.number}</p>
          <p>
            {this.props.name}
            the <a href="https://octodex.github.com/scubatocat" />
            by <img className="author-icon" src={this.props.avatarimage} />
          </p>
        </div>
      </article>
    )
  }
}

export default Octocat
