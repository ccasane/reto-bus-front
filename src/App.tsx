import BusList from './components/BusTable';
import './styles/main.scss';

function App() {
  return (
    <>
      <div className="container">
        <h1>Lista de Buses</h1>
        <BusList />
      </div>
    </>
  );
}

export default App;
