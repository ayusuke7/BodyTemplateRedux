import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as todoActions from "./store/actions/todos";

class TodoList extends Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      newTodo: ""
    };
  }

  addNewTodo = () => {
    this.props.addTodo(this.state.newTodo);

    this.setState({
      newTodo: ""
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((item, index) => (
            <li key={index.toString()}>{item.text}</li>
          ))}
        </ul>

        <input
          type="text"
          value={this.state.newTodo}
          onChange={e => {
            this.setState({
              newTodo: e.target.value
            });
          }}
        />
        <button onClick={this.addNewTodo}>Adicionar</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(todoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
