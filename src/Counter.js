import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => (
    <div>
        <h3> Lista com {props.todos.length} Todos </h3> 
    </div>
);

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, null)(Counter);
