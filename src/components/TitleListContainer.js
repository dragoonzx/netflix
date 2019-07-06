import React, { Component } from 'react'
import TitleListItem from './TitleListItem'

class TitleListContainer extends Component {
  apiKey = '87dfa1c669eea853da609d4968d294be'

  state = {
    data: [],
    mounted: false
  }

  loadContent = () => {
    const requestUrl =
      'https://api.themoviedb.org/3/' +
      this.props.url +
      '&api_key=' +
      this.apiKey
    fetch(requestUrl, { mode: 'cors' })
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: json
        })
      })
      .catch(error => console.log(error.messgae))
  }

  componentDidMount() {
    this.loadContent()
    this.setState({
      mounted: true
    })
  }

  componentWillUnmount() {
    this.setState({
      mounted: false
    })
  }

  render() {
    if (this.state.data.results) {
      var titles = this.state.data.results.map((title, i) => {
        if (i < 5) {
          var backDrop =
            'http://image.tmdb.org/t/p/original' + title.backdrop_path
          if (!title.name) {
            var name = title.original_title
          } else {
            var name = title.name
          }
          return (
            <TitleListItem
              key={title.id}
              title={name}
              score={title.vote_average}
              overview={title.overview}
              backdrop={backDrop}
            />
          )
        }
      })
    } else {
      var titles = ''
    }
    return (
      <div
        ref="titlecategory"
        className="TitleList"
        data-loaded={this.state.mounted}
      >
        <div className="Title">
          <h1>{this.props.title}</h1>
          <div className="titles-wrapper">{titles}</div>
        </div>
      </div>
    )
  }
}

export default TitleListContainer
