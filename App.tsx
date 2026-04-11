
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.tsx';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import ResidentOffice from './pages/ResidentOffice.tsx';
import VirtualOffice from './pages/VirtualOffice.tsx';
import MeetingRoom from './pages/MeetingRoom.tsx';
import Gallery from './pages/Gallery.tsx';
import Location from './pages/Location.tsx';
import Contact from './pages/Contact.tsx';
import Admin from './pages/Admin.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resident" element={<ResidentOffice />} />
          <Route path="/virtual" element={<VirtualOffice />} />
          <Route path="/meeting" element={<MeetingRoom />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
