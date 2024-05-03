import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">
          <Outlet /> {/* Render nested routes */}
        </div>
      </div>
    </div>
  );
};

export default Layout;