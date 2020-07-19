import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions, todoActions } from '../actions';
import User from './user'
import Todo from './todo'
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import { Form, Input, } from 'antd';
import { DatePicker } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


class BoxModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false,
      allUsers: [],
      todo: [],
      name: '',
      email: '',
      action: '',
      date: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    })
  }

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let allUsers = [...this.state.allUsers];
    if (this.state.name !== '') {
      allUsers.push({ name: this.state.name, email: this.state.email })
    }
    this.setState({
      allUsers: allUsers
    });
    this.setState({
      name: '',
      email: '',
    })
    this.props.addUser(this.state.allUsers);
    this.handleOk();
  }

  deleteUser = (i) => {
    const filteredUser = this.state.allUsers
    filteredUser.splice(i, 1)
    this.setState({ allUsers: filteredUser })
    this.props.deleteUser(this.state.allUsers);
  }

  editUserFun = (id, item) => {
    const newUser = [...this.state.allUsers];
    newUser[id] = item;
    this.setState({
      allUsers: newUser,
    });
    this.showModal();
    this.props.editUser(this.state.allUsers);
    this.deleteUser(id);
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleDate = (date, dateString) => {
    this.setState({
      date: dateString,
    })
  }

  handleAction = (e) => {
    this.setState({
      action: e.target.value,
    })
  }

  handleTodoSubmit = (e) => {
    e.preventDefault();
    let todo = [...this.state.todo];
    if (this.state.action !== '') {
      todo.push({ action: this.state.action, date: this.state.date })
    }
    this.setState({
      todo: todo,
      action: '',
      date: '',
    });
    this.props.addTodo(this.state.todo);
    this.handleOk();
  }

  deleteTodo = (i) => {
    const filteredTodo = this.state.todo
    filteredTodo.splice(i, 1)
    this.setState({ todo: filteredTodo })
    this.props.deleteUser(this.state.todo);
  }

  editTodoFun = (id, item) => {
    const newTodo = [...this.state.todo];
    newTodo[id] = item;
    this.setState({
      todo: newTodo,
    });
    this.showModal();
    this.props.editTodo(this.state.todo)
    this.deleteTodo(id);
  }

  render() {
    const { visible, loading } = this.state;
    const { flag } = this.props;
    const onFinish = values => {
      console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
    return (
      <div>

        {
          flag === 1 ?
            <section>
              <Button type="primary" onClick={this.showModal}>
                create user
        </Button>
              <Modal
                visible={visible}
                title="Create User"
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                  <Button key="back" onClick={this.handleCancel}>
                    Return
            </Button>,
                  <Button key="submit" type="primary" loading={loading} onClick={this.handleSubmit}>
                    Save
            </Button>,
                ]}
              >
                <Form
                  {...layout}
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    label="name"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.name}
                    rules={[{ required: true, message: 'Please input name of user' }]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="email"
                    name="email"
                    onChange={this.handleEmail}
                    value={this.state.email}
                    rules={[{ required: true, message: 'Please input email' }]}
                  >
                    <Input />
                  </Form.Item>
                </Form>
              </Modal>
              <User
                allUsers={this.state.allUsers}
                deleteUser={this.deleteUser}
                editUserFun={this.editUserFun}
              />
            </section>
            :
            <section>
              <Button type="primary" onClick={this.showModal}>
                Add Todo
        </Button>
              <Modal
                visible={visible}
                title="Add New Todo"
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                  <Button key="back" onClick={this.handleCancel}>
                    Return
            </Button>,
                  <Button key="submit" type="primary" loading={loading} onClick={this.handleTodoSubmit}>
                    Save
            </Button>,
                ]}
              >
                <Form
                  {...layout}
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    label="Action"
                    name="Action"
                    value={this.state.action}
                    onChange={this.handleAction}
                    rules={[{ required: true, message: 'Please input action' }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="DateAdded"
                    name="DateAdded"
                    rules={[{ required: true, message: 'select date' }]}
                  >
                    <DatePicker onChange={this.handleDate} />
                  </Form.Item>

                </Form>
              </Modal>
              <Todo
                todo={this.state.todo}
                deleteTodo={this.deleteTodo}
                editTodoFun={this.editTodoFun}
              />
            </section>
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    name: state.userReducer,
    action: state.todoReducer,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addUser: name => dispatch(userActions.addUser(name)),
    deleteUser: name => dispatch(userActions.deleteUser(name)),
    editUser: name => dispatch(userActions.editUser(name)),
    addTodo: action => dispatch(todoActions.addTodo(action)),
    deleteTodo: action => dispatch(todoActions.deleteTodo(action)),
    editTodo: action => dispatch(todoActions.editTodo(action))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoxModal);