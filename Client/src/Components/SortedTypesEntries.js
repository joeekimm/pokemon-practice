import React, { Component } from 'react';
import axios from 'axios';

class SortedTypesEntries extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      img: ''
    };
  }
  
  componentDidMount() {
    axios.get('http://localhost:3000/pokemon', { params: { pokemon: this.props.pokemon.pokemon.name}})
      .then(res => {
        console.log(res.data.name);
        console.log(res.data.sprites.front_default);
        this.setState({
          name: res.data.name,
          img: res.data.sprites.front_default
        })
      })
      .catch(err => {
        console.log('Error in retrieving sorted individual pokemon: ', err);
      })
  }

  render() {
    return (
      <div>
        {this.state.img ? <img src={this.state.img}/> : null}
        {this.state.name ? <h1>{this.state.name}</h1> : null}
      </div>
    );
  }
}

export default SortedTypesEntries;