import logo from './logo.svg';
import './App.css';
import { SequinceMemory } from './components/SequinceMemory/SequinceMemory';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './components/homePage/HomePage';
import { ReactionTime } from './components/reactionTime/ReactionTime';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>} />
        <Route path="/sequince" element={<SequinceMemory/>}/>
        <Route path="/reaction-time" element={<ReactionTime/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
