import LandingPage from './components/LandingPage';
import Welcome from './components/Welcome';
import Header from './components/Header';
import Footer from './components/Footer';
import Posts from './components/Posts';
import Donations from './components/Donations';
import Login from './components/Login';
import Contact from './components/Contact';
import ArtistsUnfiltered from './components/ArtistsUnfiltered';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import './App.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter basename="/app">
        <Header />
        <div className="main">
          <Routes>
            <Route element={<Welcome />} path="/welcome" />
            <Route element={<ArtistsUnfiltered />} path="/Artists" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<Posts />} path="/posts" />
            <Route element={<Donations />} path="/donations" />
            <Route element={<Login />} path="/login" />
            <Route element={<LandingPage />} path="/" />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
  // return (
  //   <div>
  //     <LandingPage />
  //     <BasePage />
  //   </div>
  // );
}

export default App;
