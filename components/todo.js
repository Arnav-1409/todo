import React, { Component } from 'react';
import { List } from 'antd';
import 'antd/dist/antd.css';
import './user.css'

class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
  }

  render() {
    const todo = this.props.todo || [];
    const deleteTodo = this.props.deleteTodo;
    const editTodoFun = this.props.editTodoFun;

    return (
      <div className="list">
        <List
          itemLayout="horizontal"
          dataSource={todo}
          renderItem={(item,id) => (
            <List.Item>
              <List.Item.Meta
                description={item.action}
              />
              <p className=" mg-r-e">{item.date}</p>
              <p className=" mg-r text-button" onClick = {()=> editTodoFun(id, item)}>Edit</p>
              <p className="text-button" onClick = {()=> deleteTodo(id)}>Delete</p>
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default Todo;