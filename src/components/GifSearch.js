import React from 'react';

class InputSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state.input);
  }

  render() {
    return(
      <div className="col-md-6 col-md-offset-1">
        <form onSubmit={this.handleSubmit}>
          <h2>Find Some Gifs!</h2>
          <input type='text' onChange={this.handleChange}/>
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

const GifSearch = ({ handleSubmit }) => {
  return (
    <InputSearch handleSubmit={handleSubmit} />
  )
}

export default GifSearch;
