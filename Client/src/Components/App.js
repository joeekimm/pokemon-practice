import React, { Component } from 'react';
import axios from 'axios';
import Types from './Types';
import SortedTypes from './SortedTypes';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      input: '',
      pokemon: null,
      pokeObj: {},
      types: [],
      selectedType: '',
      typesOfPokemon: []
    };

    this.handleTypeSelect = this.handleTypeSelect.bind(this);
  }

  componentDidMount() {
    this.retrieveAllTypes();
  }
  
  handleChange(e) {
    e.preventDefault();
    this.setState({
      input: e.target.value
    }, () => console.log(this.state.input));
  }
  
  retrieveAllTypes() {
    axios.get('http://localhost:3000/types/getAll')
      .then(res => {
        console.log(res.data);
        this.setState({
          types: res.data
        });
      })
      .catch(err => {
        console.log('Error with retrieving all types: ', err);
      })
  }

  retrieveOneType() {
    axios.get('http://localhost:3000/types/getOne', { params: { type: this.state.selectedType }})
      .then(res => {
        console.log(res.data);
        this.setState({
          typesOfPokemon: res.data.pokemon
        })
      })
      .catch(err => {
        console.log('Error in retrieving one type: ', err);
      })
  }

  handleTypeSelect(type) {
    this.setState({
      selectedType: type
    }, () => this.retrieveOneType())
  }

  generatePokemon(e) {
    e.preventDefault();
    axios.get('http://localhost:3000/pokemon', { params: { pokemon: this.state.input } })
    .then(res => {
      console.log(res.data);
      this.setState({
        pokemon: this.state.input,
        pokeObj: res.data
      })
    })
    .catch(err => {
      console.log('Error in retrieving pokemon: ', err);
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.generatePokemon(e)}>
          <input onChange={(e) => this.handleChange(e)}/>
        </form>
        {this.state.pokemon ? <img src={this.state.pokeObj.sprites.front_default}/> : null}
        {this.state.pokemon ? <h1>{this.state.pokeObj.name}</h1> : null}

        <Types types={this.state.types} handleTypeSelect={this.handleTypeSelect}/>
        {this.state.typesOfPokemon.length > 0 ? <SortedTypes pokemon={this.state.typesOfPokemon}/> : null}
      </div>
    );
  }
}

export default App;