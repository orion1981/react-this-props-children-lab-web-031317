// import React, { Component } from 'react'
//
// class ThemedDecorations extends Component {
//   render(){
//     return(
//     <div>
//       <h1> "You've been innvited!" </h1>
//
//     </div>
//   )}
// }
//
// export default ThemedDecorations


import React from 'react';

export default class ThemedDecorations extends React.Component {
  render() {
    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme,
      });
    });

    return (
      <div>
        {childrenWithExtraProp}
      </div>
    );
  }
}
