import LandingPage from './components/LandingPage';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import News from './components/News';
import Personnel from './components/Personnel';
// import Contact from './components/Contact';
// import Artists from './components/Artists';
import ArtistsFromDB from './components/ArtistsFromDB';
import Sidebar from './components/Sidebar';
// import Donations from './components/Donations';
// import Login from './components/Login';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import './App.css';
// import ArtistsFilter from './components/Filters/ArtistsFilter';
// import Artists from './components/Artists';

function App() {
  return (
    <div className="app">
      <BrowserRouter basename="/app">
        <Header />
        <main>
          <div className="grid-wrapper">
            <Sidebar />
            <div className="content">
              <Routes>
                <Route element={<About />} path="/about" />
                <Route element={<ArtistsFromDB />} path="/artists" />
                {/* <Route element={<Contact />} path="/contact" /> */}
                <Route element={<News />} path="/news" />
                <Route element={<Personnel />} path="personnel" />
                {/* <Route element={<Donations />} path="/donations" />
            <Route element={<Login />} path="/login" /> */}
                <Route element={<LandingPage />} path="/" />
              </Routes>
            </div>
          </div>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
