import React, { Component } from 'react';
import './Example2.scss'

class Example1 extends Component {


  render() {
    return (
      <div>
        <h3>Set Area Size</h3>
        <div className='grid-container-2'>
          <div className="grid-item item-2-1">Column1 to end</div>
          <div className="grid-item item-2-2">Column2 to end</div>
          <div className="grid-item item-2-3">Column2 to Column3</div>
          <div className="grid-item item-2-4">Area</div>
        </div>
      </div>

      );
  }
}

export default Example1;
