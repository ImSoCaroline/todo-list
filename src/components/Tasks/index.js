import React from 'react';
import Task from '../Task';

class Tasks extends React.Component {
  render() {
    const { tasks } = this.props
    return (
      <ul className="taskContainer">
        {tasks.map((name, key) => {
          return <Task task={name} key={key} />
        })}
      </ul>
    );
  }
}

export default Tasks;