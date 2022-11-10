import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        // Tentukan state
        this.state = {count: 0};
    }

    // Buat method handleClick
    handleClick() {
        this.setState({count: this.state.count + 1});
    }
  
  render() {
    return (
      <div>
        <h1>
          {/* Tampilkan nilai state */}
          {this.state.count}
          
        </h1>
        {/* Tambahkan tag <button> */}
        <button onClick={()=> {this.handleClick()}}> + </button>
        
      </div>
    );
  }
}

export default App;
