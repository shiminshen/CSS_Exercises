import React, { Component } from 'react';
import './Example3.scss'

class Example3 extends Component {


  render() {
    return (
      <div>
        <h3>Set Grid by Area</h3>
        <div className='grid-container-3'>
          <div className="grid-item item-3-1">Header</div>
          <div className="grid-item item-3-2">Sidebar</div>
          <div className="grid-item item-3-3">Main</div>
          <div className="grid-item item-3-4">Footer</div>
        </div>
      </div>

      );
  }
}

export default Example3;
