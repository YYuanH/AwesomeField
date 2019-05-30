import React, { Component } from 'react';

export default class Container extends Component {
  render() {
    return (
      <div 
        className='main-container'
        style={{
          height: this.props.height ? this.props.height : '',
          width: this.props.width ? this.props.width : '',
          // padding: this.props.padding ? this.props.padding : '12px',
          // background: this.props.background ? this.props.background : 'white',
          margin: this.props.margin ? this.props.margin : '14px',
        }}
      >
        {this.props.children ? this.props.children : ''}
      </div>
    );
  }
}