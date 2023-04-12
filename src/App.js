import React from 'react';
import Bar from './Components/Bar';
import Table from './Components/Table';


function createData(title, description, deadline, priority, isComplete, action) {
  return { title, description, deadline, priority, isComplete, action };
}

function removeFromArray(arr, value){
  let index = -1;

  for(let i = 0; i < arr.length; i++){
    if(arr[i].title === value){
      index = i;
      break;
    }
  }
  
  if(index === -1){
    console.log('No such element to remove');
    return arr;
  } else {
    arr.splice(index, 1);
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
  }
  
  handleAdd(title, description, deadline, priority, isComplete, action) {
    this.setState({
      rows: [...this.state.rows, createData(title, description, deadline, priority, isComplete, action)]
    });
  }

  handleDelete(title){
    this.setState({
      rows: removeFromArray(this.state.rows, title)
    });
  }

  render(){
    return (
      <div>
        <Bar handleAdd={this.handleAdd} handleDelete={this.handleDelete}/>
        <Table rows={this.state.rows} />
      </div>
    );
  }
}

export default App;
