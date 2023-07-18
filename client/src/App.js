import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './views/Dashboard';
import New from './views/New';
import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <div class="container">
        <h1>Favorite Authors</h1>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/authors/new' element={<New/>}></Route>
          <Route path='/authors/:id/edit' element={<Edit/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
