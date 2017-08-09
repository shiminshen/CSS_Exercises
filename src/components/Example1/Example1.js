import React, { Component } from 'react';

class Example1 extends Component {


  render() {
    return (
      <div>
        <h3>Basic</h3>
        <pre>
          <code>
            .grid-container1 {'{'} <br/>
              grid-template-columns: 200px 0.4fr auto;<br/>
              grid-template-rows: 25% 100px auto;<br/>
            }
          </code>
        </pre>
        <div className='grid-container-1'>
          <div className="grid-item item-1">200px</div>
          <div className="grid-item item-2">40% of container</div>
          <div className="grid-item item-3">rest of the row</div>
          <div className="grid-item item-4">Area</div>
        </div>
        </div>

      );
  }
}

export default Example1;
