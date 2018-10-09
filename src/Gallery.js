import React, { Component } from 'react'
import Octocat from './Octocat.js'
import catsjson from './cats.json'

class Gallery extends Component {
  render() {
    const cats = catsjson.data.map(cat => (
      <Octocat
        number={cat.number}
        name={cat.name}
        catimage={cat.image}
        avatarimage={cat.authors[0].image}
        link={cat.link}
      />
    ))
    return <main>{cats}</main>
  }
}
export default Gallery
