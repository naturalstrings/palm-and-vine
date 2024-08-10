import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Gear from './components/Gear';
import History from './components/History';
import Engineers from './components/Engineers';
import Sidebar from './components/Sidebar';
// import Booking from './components/Booking';
import './index.css';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
//import News from './components/News';
//import About from './components/About';
// import Contact from './components/Contact';
//import Artists from './components/Artists';
//import ArtistsFromDB from './components/ArtistsFromDB';
// import Donations from './components/Donations';
// import Login from './components/Login';
//import ArtistNavbar from './components/Filters/ArtistNavbar';
// import ArtistsFilter from './components/Filters/ArtistsFilter';
// import Artists from './components/Artists';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <main>
          <div className="grid-wrapper">
            <Sidebar />
            <div className="content">
              <ScrollToTop />
              <Routes>
                <Route element={<History />} path="/history" />
                <Route element={<Gear />} path="/gear" />
                <Route element={<Engineers />} path="engineers" />
                <Route element={<Home />} path="/" />
                {/* <Route element={<LandingPage />} path="/" /> */}
                {/* <Route element={<Booking />} path="booking" /> */}
                {/* <Route element={<News />} path="/news" /> */}
                {/* <Route element={<About />} path="/about" /> */}
                {/* <Route element={<ArtistsFromDB />} path="/artists" /> */}
                {/* <Route element={<Contact />} path="/contact" /> */}
                {/* <Route element={<Personnel />} path="personnel" /> */}
                {/* <Route element={<Donations />} path="/donations" />
                <Route element={<Login />} path="/login" /> */}
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
