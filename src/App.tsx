import './App.css';
import { RandomNumber } from './components/restriction/RandomNumber';

function App() {
  return (
    <div className='App'>
      <RandomNumber value={0} isZero/>
    </div>
  )
}

export default App;
