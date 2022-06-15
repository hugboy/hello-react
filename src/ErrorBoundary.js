import React, { Component } from 'react';
import errors from './img/error.gif';

class ErrorBoundary extends Component {
  state = {
    error: false,
  };
  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    console.log({ error, info });
  }
  render() {
    if (this.state.error === true)
      return (
        <div>
          <img src={errors}></img>
        </div>
      );
    return this.props.children;
  }
}

export default ErrorBoundary;
