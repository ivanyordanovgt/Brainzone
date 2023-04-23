import logo from './logo.svg';
import './App.css';
import { SequinceMemory } from './components/SequinceMemory/SequinceMemory';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './components/homePage/HomePage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>} />
        <Route path="/sequince" element={<SequinceMemory/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
