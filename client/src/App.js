import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home/home';
import Error from './components/other/404';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;