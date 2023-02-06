import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutScreen from './screens/AboutScreen';
import DashBoardScreen from './screens/DashBoardScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

const App = () => {
  return (
    <Router>
      <main className="main">
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
          </Route>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/dashboard" element={<DashBoardScreen />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
