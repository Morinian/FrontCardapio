import Menu from './componentes/page/navbar';
import Cadastrar from './componentes/page/cadastra';
import Listar from './componentes/page/lista';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router> 
          <Menu/>

            <Routes>
              <Route path='/' element={<Cadastrar/>} />
              <Route path='/listar' element={<Listar/>} />
            </Routes>
            
      </Router>
      
        
    </div>
  );
}

export default App;
