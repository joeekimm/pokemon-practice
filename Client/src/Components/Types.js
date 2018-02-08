import React, { Component } from 'react';
import TypesEntries from './TypesEntries';

class Types extends Component {
  constructor(props) {
    super(props);
    
  }
  

  handleSelect() {
    const selectBox = document.getElementById('selectbox');
    const selectedType = selectBox.options[selectBox.selectedIndex].value;
    this.props.handleTypeSelect(selectedType);
  }

  render() {
    return (
      <form>
        <select name='types' id='selectbox' onChange={() => this.handleSelect()}>
          {this.props.types.map((el, idx) => {
            return <TypesEntries type={el} key={idx}/>
          })}
        </select>
      </form>
    );
  }
}

export default Types;