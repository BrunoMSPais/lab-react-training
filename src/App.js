import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard/IdCard';
import './components/IdCard/IdCard.css';
import Greetings from './components/Greetings/Greetings';
import './components/Greetings/Greetings.css';
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Iteration 1 */}
        <h1>Id Card</h1>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date('1992-07-14')}
          picture='https://randomuser.me/api/portraits/men/44.jpg'
        />

        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        {/* Iteration 2 */}
        <h1>Greetings</h1>
        <div>
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>
        </div>

        {/* Iteration 3 */}
        <h1>Random number</h1>
        <div>
          <Random min={1} max={6} />
          <Random min={1} max={100} />
        </div>

        {/* Iteration 4 */}
        <h1>Box Color</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

      </div>
    );
  }
}

export default App;
