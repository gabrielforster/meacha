import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './components/Header'
import { CepFinder } from './components/CepFinder'
import { StreetFinder } from './components/StreetFinder'
import './assets/styles/App.scss';

function App() {
  return (
    <div className="app">
        <BrowserRouter>

          <Header />

          <Routes>
            <Route path='/meacha/' element={<CepFinder />} />          
            <Route path='/meacha/rua/' element={<StreetFinder />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
