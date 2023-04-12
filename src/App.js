import React from 'react';
import Bar from './Components/Bar';
import Table from './Components/Table';


function createData(title, description, deadline, priority, isComplete, action) {
  return { title, description, deadline, priority, isComplete, action };
}

function find(arr, title){
  for(let i = 0; i < arr.length; i++){
    if(arr[i].title === title){
      return i;
    }
  }

  return -1;
}

function remove(arr, title){
  let index = find(arr, title);

  if(index === -1){
    console.log('No such element to remove');
    return arr;
  } else {
    arr.splice(index, 1);
    return arr;
  }
}

function replace(arr, title, newTask){
  let index = find(arr, title);

  if(index === -1){
    console.log('No such element to modify');
    return arr;
  } else {
    arr.splice(index, 1, newTask)
    return arr;
  }
}

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      rows: [

      ]
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete =  this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  
  handleAdd(title, description, deadline, priority, isComplete, action) {
    this.setState({
      rows: [...this.state.rows, createData(title, description, deadline, priority, isComplete, action)]
    });
  }

  handleDelete(title){
    this.setState({
      rows: remove(this.state.rows, title)
    });
  }

  handleUpdate(title, description, deadline, priority, isComplete, action){
    this.setState({
      rows: replace(this.state.rows, title, createData(title, description, deadline, priority, isComplete, action))
    });
  }

  render(){
    return (
      <div>
        <Bar handleAdd={this.handleAdd} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/>
        <Table rows={this.state.rows} />
      </div>
    );
  }
}

export default App;
