import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'hidden', border: '5px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
};

//Dummy comment
export default Scroll;