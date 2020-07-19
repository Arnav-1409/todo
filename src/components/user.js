import React, { Component } from 'react';
import { List } from 'antd';
import 'antd/dist/antd.css';
import './user.css'

class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
  }

  render() {
    const users = this.props.allUsers || [];
    const deleteUser = this.props.deleteUser;
    const editUserFun = this.props.editUserFun;

    return (
      <div className="list">
        <List
          itemLayout="horizontal"
          dataSource={users}
          renderItem={(item,id) => (
            <List.Item>
              <List.Item.Meta
                description={item.name}   
              />
              <p className= "mg-r text-button" onClick = {()=> editUserFun(id, item)}>Edit</p>
              <p className = "text-button" onClick = {()=> deleteUser(id)}>Delete</p>
            </List.Item>
            
          )}
        />
      </div>
    )
  }
}

export default User;