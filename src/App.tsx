import { BrowserRouter, Navigate,Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Gear from './components/Gear';
import History from './components/History';
import Engineers from './components/Engineers';
import Sidebar from './components/Sidebar';
import './index.css';
import './App.css';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <main>
          <div className="grid-wrapper">
            <Sidebar />
            <div className="content">
              <Routes>
                <Route element={<History />} path="/history" />
                <Route element={<Gear />} path="/gear" />
                <Route element={<Engineers />} path="engineers" />
                <Route element={<Home />} path="/home" />
                <Route path="/" element={<Navigate to="/home" replace />} />
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
