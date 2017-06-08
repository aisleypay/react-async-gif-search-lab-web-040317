import React from 'React';
import 'whatwg-fetch';

import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

const BASE_URL = 'http://api.giphy.com/v1/gifs/search?';
const API_KEY = '&api_key=dc6zaTOxFJmzC';


export default class GifListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      gifs: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(searchTerm) {
    fetch(BASE_URL.concat(`q=${searchTerm}`).concat(API_KEY))
      .then(response => response.json())
      .then(gifList => this.setState({ gifs: gifList.data.slice(0, 3)}))
  }


  render() {
    return (
      <div className="container">
        <GifList gifList={ this.state.gifs } />
        <GifSearch handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

GifListContainer.defaultProps = {
  gifs: []
}
