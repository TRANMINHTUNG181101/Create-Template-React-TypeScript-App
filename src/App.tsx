import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first: 'Tran Minh',
    last: 'Tung',
  }

  const nameList = [
    {
      first: 'Tran Minh Tung',
      last: '1',
    },
    {
      first: 'Tran Minh Tung',
      last: '2',
    },
    {
      first: 'Tran Minh Tung',
      last: '3',
    }
  ]

  return (
    <div className='App'>
      <Greet name='Tung' massageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
