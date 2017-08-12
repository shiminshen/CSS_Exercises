import React, { Component } from 'react';
import './Example1.scss'

class Example1 extends Component {


  render() {
    return (
      <div>
        <h3>Basic</h3>
        <div className='grid-container-1'>
          <div className="grid-item item-1">200px * (50% height)</div>
          <div className="grid-item item-2">40% of container</div>
          <div className="grid-item item-3">rest of the row</div>
          <div className="grid-item item-4">200px * 100px</div>
        </div>
      </div>

      );
  }
}

export default Example1;
