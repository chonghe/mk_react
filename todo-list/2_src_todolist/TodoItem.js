import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TodoItem extends Component {
  // 4-3 当父组件的render函数被运行时，它的子组件的render都将被重新运行一次
  render() {
    const { item } = this.props;
    // 4-5 JSX --> JS对象 --> 真实的DOM
    // JSX --> createElement --> 虚拟DOM（JS对象）
    // return React.createElement('div',{},"item")
    return <div onClick={() => this.handleClick()}>{item}</div>;
  }
  handleClick = () => {
    const { index, handleItemDelete } = this.props;
    handleItemDelete(index);
  };
}

// 4-2 propTypes and defaultProps
TodoItem.propTypes = {
  content: PropTypes.string,
  handleClick: PropTypes.func,
  index: PropTypes.number,
};

TodoItem.defaultProps = {
  content: "hello",
};

/**
 * 4-4 虚拟DOM
 * 1. state数据
 * 2. JSX模板
 * 3. 数据 + 模板 结合，生成真实的DOM，来显示
 * 4. state 发生改变
 * 5. 数据 + 模板 结合，生成真是的DOM，替换原始的DOM
 *
 * 缺陷：
 * 第一次生成了一个完整的DOM片段
 * 第二次生成了一个完整的DOM片段
 * 第二次的DOM替换第一次的DOM，非常耗性能
 * ----------------------------------------------------
 *
 * 1-4
 * 5. 并不直接替换原始的DOM
 * 6. 新的DOM(DocumentFragment)和原始的DOM作比较，找差异
 * 7. 找出input框发生了变化
 * 8. 只用新的DOM中的input元素，替换掉老的DOM中的input元素
 *
 * 缺陷：
 * 性能的提升并不明显
 * -----------------------------------------------------
 *
 * 1-2
 * 3. 生成虚拟DOM（虚拟DOM就是一个JS对象，用它来描述真实DOM） --损耗了性能
 * 4. 用虚拟DOM的结构生成真实的DOM，来显示
 * 5. state发生变化
 * 6. 数据 + 模板 生成新的虚拟DOM   --极大的提升了性能
 * 7. 比较原始虚拟DOM和新的虚拟DOM的区别  --极大的提升了性能
 * 8. 直接操作DOM，改变XX中的内容
 */

/* 
优点
1. 性能提升了
2. 它使得跨端应用得以实现。React Native
    dom只在浏览器中，如安卓和ios无dom概念。
    有了虚拟dom（js对象）后，就可以在浏览器端转化成真实dom，而在其他原生应用中，转化为原生组件
*/

/* 
  4-6
  diff算法就是虚拟dom之间差异的比对
  setState之所以是异步，是为了在两次或以上数据在极短的时间里被更新后，可以只执行一次更新操作（多次结合成一次），节省性能。
  同层比较原则 如果第一层就不同，那么会直接删除原始虚拟dom，直接生成一个新的虚拟dom
  key的作用 在循环比较每个节点时，有了key就会直接做关联进行一一比对。
    为何不建议用index作为key，就是因为原始的和新的虚拟dom的节点在重新渲染后顺序是不一样的
*/
