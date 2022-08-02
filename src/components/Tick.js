import React, { Component } from 'react';

class Tick extends Component {
  // 初始化状态，JS Next语法，目前处于试验阶段
  // state = {
  //     left: this.props.number
  // };
  
  constructor(props) {
    super(props);
    // 初始化状态
    this.state = {
      left: this.props.number
    };
    this.timer = setInterval(() => {
      // 重新设置状态（覆盖，相当于Object.assign），触发自动渲染
      this.setState({
        left: this.state.left - 1
      });
      if (this.state.left <= 0) {
        clearInterval(this.timer);
      }
    }, 1000);
  }
  render() {
    return (
      <h1>
        倒计时：{this.state.left}
      </h1>
    );
  }
}

export default Tick;
