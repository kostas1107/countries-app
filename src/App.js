import './header/Header';
import HomePage from './pages/HomePage/HomePage';
import CountryPage from './pages/CountryPage/CountryPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="country" element={<CountryPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
