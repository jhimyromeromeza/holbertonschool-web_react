import logo from '../logoholberton.jpg'
import '../App.css';
import {getFullYear, getFooterCopy} from './utils.js'

function App(){
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1>School dashboard</h1>     
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label className="labelcorreo"htmlFor="email">Email:</label>
        <input type="email" name="email" id="email"></input>
        <label className="labelpassword"htmlFor="password">Password:</label>
        <input type="password" name="password" id="password"></input>
        <button className="ok">OK</button>
      </div>
      <footer className="App-footer">
        <p>{getFooterCopy(true)}</p>
        <p>{getFullYear()}</p>
      </footer>
    </div>
  )
}

export default App;
