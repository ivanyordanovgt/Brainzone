import logo from './logo.svg';
import './App.css';
import { SequinceMemory } from './components/SequinceMemory/SequinceMemory';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './components/homePage/HomePage';
import { ReactionTime } from './components/reactionTime/ReactionTime';
import { AimTrainer } from './components/AimTrainer/AimTrainer';
import { OddsTrainer } from './components/OddsTrainer/OddsTrainer';
import { OddsTrainerUrls } from './components/OddsTrainer/OddsTrainerUrls';
import { MathTrainer } from './components/MathTrainer/MathTrainer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>} />
        <Route path="/sequince" element={<SequinceMemory/>}/>
        <Route path="/reaction-time" element={<ReactionTime/>}/>
        <Route path="/aim-trainer" element={<AimTrainer/>}/>
        <Route path="/math-trainer" element={<MathTrainer/>}/>
        <Route path="/odds-trainer" element={<OddsTrainer/>}/>
        <Route path="/odds-trainer/*" element={<OddsTrainerUrls/>}/>
        
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
