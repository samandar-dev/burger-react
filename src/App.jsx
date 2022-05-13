
import { Component } from 'react';
import './App.css';
import Layout from './companents/layout/layout';
import BurgerBuild from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <h1>Burger builder</h1>
        <Layout>
          <BurgerBuild />
        </Layout>
      </div>
    );
  }
}

export default App;
