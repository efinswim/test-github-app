import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="user/:id" element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App;
