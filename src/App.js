import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import Header from './components/Header'
import Hero from './components/Hero'
import TitleListContainer from './components/TitleListContainer'
import './App.css'

class App extends Component {
  apiKey = '87dfa1c669eea853da609d4968d294be'
  state = {
    data: []
  }

  performSearch = e => {
    e.preventDefault()

    // get the search query string
    var val = $('.Search input').val()

    const requestUrl =
      'https://api.themoviedb.org/3/search/multi?query=' +
      val +
      '&api_key=' +
      this.apiKey
    fetch(requestUrl, { mode: 'no-cors' })
      .then(response => response.json())
      .then(json => {
        console.log('data', json)
        this.setState({
          data: json
        })
      })
      .catch(error => alert(error.messgae))
  }

  componentDidUpdate() {}

  render() {
    if (this.state.data.results) {
      console.log('data', this.state.data)
    }
    return (
      <div>
        <Header onSubmit={this.performSearch} />
        <Hero />
        <TitleListContainer
          title="Top TV picks for Max"
          url="discover/tv?sort_by=popularity.desc&page=1"
        />
        <TitleListContainer
          title="Trending now"
          url="discover/movie?sort_by=popularity.desc&page=1"
        />
        <TitleListContainer
          title="Most watched in Horror"
          url="genre/27/movies?sort_by=popularity.desc&page=1"
        />
        <TitleListContainer
          title="Sci-Fi greats"
          url="genre/878/movies?sort_by=popularity.desc&page=1"
        />
        <TitleListContainer
          title="Comedy magic"
          url="genre/35/movies?sort_by=popularity.desc&page=1"
        />
      </div>
    )
  }
}

export default hot(module)(App)
