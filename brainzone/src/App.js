import logo from './logo.svg';
import './App.css';
import { SequinceMemory } from './components/SequinceMemory/SequinceMemory';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './components/homePage/HomePage';
import { ReactionTime } from './components/reactionTime/ReactionTime';
import { AimTrainer } from './components/AimTrainer/AimTrainer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>} />
        <Route path="/sequince" element={<SequinceMemory/>}/>
        <Route path="/reaction-time" element={<ReactionTime/>}/>
        <Route path="/aim-trainer" element={<AimTrainer/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
