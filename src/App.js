import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import Counter from './components/Counter';
import Timer from './components/Timer';
import Planets from './components/Planets';

class App extends React.Component {
  state = {
    page: "Counter"
  }

  changePage = e => {
    this.setState({
      page: e.target.innerText
    })
  }

  renderPage(){
    switch (this.state.page) {
      case "Counter":
        
        return <Counter />;

      case "Timer":
        
        return <Timer />;

      case "Planets":
      
        return <Planets />;
    
      default:
        break;
    }
  }

  render(){
    return (
      <div className="App">
        <Navbar changePage={this.changePage} />
  
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
