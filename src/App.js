// import { Card } from '@azuga-forms/azuga-design-system';
import './App.css';
import Board from './components/Board';
import Card from "./components/Card"

function App() {
  return (
    <div className="App">
      <h3>Here are the boards:</h3>
      <div className='container'>
        <Board id="board1" className="board">
          <Card id="card1" className='card' draggable="true">
            <p>I am row-one 1</p>
          </Card>
          <Card id="card2" className='card' draggable="true">
            <p>I am row-one 2</p>
          </Card>
          <Card id="card3" className='card' draggable="true">
            <p>I am row-one 3</p>
          </Card>
        </Board>

        <Board id="board2" className="board">
          <Card id="card-one" className='card' draggable="true">
            <p>I am row-two 1</p>
          </Card>
          <Card id="card-two" className='card' draggable="true">
            <p>I am row-two 2</p>
          </Card>
        </Board>
      </div>
      
    </div>
  );
}

export default App;
