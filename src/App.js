import logo from './logo.svg';
import './App.css';
import Comentario from './components/Comentario';

function App() {
  return (
    <div className="App">
      <h1>Notepad</h1>
      <Comentario nome="Renan David" email="renandavid6@gmail.com" data={new Date(2022,2,23)}>
        Olá Notepad!
      </Comentario>

      <Comentario nome="Renan David" email="renandavid6@gmail.com" data={new Date(2022,2,23)}>
        Anotação número 1!
      </Comentario>
    </div>
  );
}

export default App;
