import React from 'react';
import Bar from './Components/Bar';
import Table from './Components/Table';


function createData(title, description, deadline, priority, isComplete, action) {
  return { title, description, deadline, priority, isComplete, action };
}

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      rows: [

      ]
    };

    this.handleAdd = this.handleAdd.bind(this);
  }
  
    handleAdd(title, description, deadline, priority, isComplete, action) {
    this.setState({
      rows: [...this.state.rows, createData(title, description, deadline, priority, isComplete, action)]
    });
  }

  render(){
    return (
      <div>
        <Bar handleAdd={this.handleAdd}/>
        <Table rows={this.state.rows} />
      </div>
    );
  }
}

export default App;
