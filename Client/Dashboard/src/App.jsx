import './App.css'
import Navbar from './NavBar';
import Cardcollection from './Cardcollection';
import Board from './Board';
import Combinedaddpie from './Combinedaddpie';
import Barchart from './Barchart';
function App(){
  return(
    <>
      <div>
        <Navbar />
        <div id='card-board'>
          <Board />
          <div id='card-pie-bar'>
            <Cardcollection />
            <Barchart />
            <Combinedaddpie />
          </div>
        </div>
      </div>
    </>
  )
}
 
export default App;