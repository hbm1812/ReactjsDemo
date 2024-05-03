import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from './Pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';
// import NestedRoute1 from './pages/NestedRoute1';
// import NestedRoute2 from './pages/NestedRoute2';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/nestedroute1/*" element={<NestedRoute1 />} />
          <Route path="/nestedroute2/*" element={<NestedRoute2 />} /> */}
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;