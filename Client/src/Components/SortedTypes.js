import React from 'react';
import SortedTypesEntries from './SortedTypesEntries';

const SortedTypes = (props) => {
  return (
    <div>
      {props.pokemon.map((el, idx) => {
        return <SortedTypesEntries pokemon={el} key={idx}/>
      })}
    </div>
  );
};

export default SortedTypes;