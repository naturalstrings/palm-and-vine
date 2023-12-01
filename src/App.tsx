import LandingPage from './components/LandingPage';
import Welcome from './components/Welcome';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter basename="/app">
        <Routes>
          <Route element={<Welcome />} path="/welcome" />
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
