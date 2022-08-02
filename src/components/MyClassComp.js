import React from 'react';

export default class MyClassComp extends React.Component {
  // 可写可不写
  /*constructor(props) {
   super(props);   // this.props = props
   console.log(props, this.props, this.props === props);
   }*/
  render() {
    if (this.props.obj) {
      return (
        <>
          <p>姓名：{this.props.obj.name}</p>
          <p>年龄：{this.props.obj.age}</p>
        </>
      )
    }
    if (this.props.dom) {
      return <div>
        <h1>传进来了元素，显示传进来的</h1>
        {this.props.dom}
      </div>
    }
    return <h1>类组件内容，属性number={this.props.number}</h1>
  }
}
