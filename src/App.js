import React from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";


class App extends React.Component{
  constructor() {
    super ();
    this.state = {
        monsters:[],
        searchField:''
    }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users =>this.setState({monsters: users}))
  }
  
  render() {

    const { monsters,searchField } = this.state;
    const filterdMonsters =monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
        <div className="App">
          <SearchBox
          placeholder ='Search Monsters'
          handleChange ={e => this.setState({searchField: e.target.value})}
          />

          <CardList monsters={filterdMonsters}/>
        </div>
    );
  }

}

export default App;
