import LandingPage from './components/LandingPage';
import Welcome from './components/Welcome';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Posts from './components/Posts';
import Donations from './components/Donations';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter basename="/app">
        <Routes>
          <Route element={<Welcome />} path="/welcome" />
          <Route element={<Posts />} path="/Posts"  />
          <Route element={<Donations />} path="/Donations" />
          <Route element={<Login />} path="/Login" />
          <Route element={<LandingPage />} path="/" />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
  // return (
  //   <div>
  //     <LandingPage />
  //     <BasePage />
  //   </div>
  // );
}

export default App;
