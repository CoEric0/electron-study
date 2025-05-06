import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Welcome } from './components/welcome';
import { SecondPage } from './components/SecondPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/2nd" element={<SecondPage />} />
      </Routes>
    </Router>
  );
}

export default App;
