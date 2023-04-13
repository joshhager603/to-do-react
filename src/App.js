import React from 'react';
import Bar from './Components/Bar';
import Table from './Components/Table';
import DeleteButton from './Components/DeleteButton';
import ButtonStack from './Components/ButtonStack';


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

function getFields(arr, title){
  let i = find(arr, title);
  let fieldArr = [arr[i].description, arr[i].deadline, arr[i].priority];

  return fieldArr;
}

function toggleUpdateOff(arr, title, handleDelete){
  let index = find(arr, title);

  arr[index].action = <DeleteButton handleDelete={handleDelete} title={title}/>;

  return arr;
}

function toggleUpdateOn(arr, title, handleDelete, handleUpdate, handleUpdateOn, handleUpdateOff){
  let index = find(arr, title);

  arr[index].action = <ButtonStack 
                        title={title} 
                        handleDelete={handleDelete} 
                        handleUpdate={handleUpdate} 
                        handleUpdateOn={handleUpdateOn} 
                        handleUpdateOff={handleUpdateOff}
                      />;
  
  return arr;
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
    this.handleUpdateOff = this.handleUpdateOff.bind(this);
    this.handleUpdateOn = this.handleUpdateOn.bind(this);
    this.handleGetFields = this.handleGetFields.bind(this);
    this.titleAdded = this.titleAdded.bind(this);
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

  handleUpdateOff(title, handleDelete){
    this.setState({
      rows: toggleUpdateOff(this.state.rows, title, handleDelete)
    });
  }

  handleUpdateOn(title, handleDelete, handleUpdate, handleUpdateOn, handleUpdateOff){
    this.setState({
      rows: toggleUpdateOn(this.state.rows, title, handleDelete, handleUpdate, handleUpdateOn, handleUpdateOff)
    });
  }

  handleGetFields(title){
    return getFields(this.state.rows, title);
  }

  titleAdded(title){
    let i = find(this.state.rows, title);

    if(i === -1){
      return false;
    }
    else{
      return true;
    }
  }

  render(){
    return (
      <div>
        <Bar 
          handleAdd={this.handleAdd} 
          handleDelete={this.handleDelete} 
          handleUpdate={this.handleUpdate} 
          handleUpdateOff={this.handleUpdateOff} 
          handleUpdateOn={this.handleUpdateOn}
          handleGetFields={this.handleGetFields}
          titleAdded={this.titleAdded}
        />
        <Table rows={this.state.rows} />
      </div>
    );
  }
}

export default App;
