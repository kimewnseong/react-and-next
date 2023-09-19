import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Country from './pages/Country';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/country/:code" element={<Country />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <div>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
      </div>
    </>
  );
}

export default App;
