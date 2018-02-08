import React from 'react';

const TypesEntries = (props) => {
  return (
    <option value={props.type.name}>
      {props.type.name}
    </option>
  );
};

export default TypesEntries;