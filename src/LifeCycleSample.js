import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;
  /*Load*/
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  /*Load, Update*/
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }
  /*Load*/
  componentDidMount() {
    console.log('componentDidMount');
  }
  /*Update props/state가 변경될때 동작 리렌더링을 할지 여부 true/false 리턴 필요*/
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
    return nextState.number % 10 !== 4;
  }
  /*컴포넌트를 DOM에서 제거할때*/
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  /*render결과물이 브라우저에 반영되기 직전*/
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }
  /*리렌더링 완료후*/
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트되기 직전 색상', snapshot);
    }
  }

  /*컴포넌트 렌더링중 에러발생시*/
  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    console.log('componentDidCatch', { error, info });
  }
  render() {
    console.log('render');
    const style = {
      color: this.props.color,
    };
    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
