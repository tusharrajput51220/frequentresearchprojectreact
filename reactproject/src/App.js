import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ProjectInformation from './components/ProjectInformation';
import Regions from './components/Regions';
import Specifications from './components/Specifications';
import Devices from './components/Devices';
import FilterOptions from './components/FilterOptions';
import SubmitSection from './components/SubmitSection';
import FinalTable from './components/FinalTable';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
function App() {
  return (
    <Router>
      <Header />
      <ToastContainer />
      <div className="app d-flex">
        <div>
          <Sidebar />
        </div>

        <div className="content">
          <Routes>
            <Route path="/project-information" element={<ProjectInformation />} />
            <Route path="/regions" element={<Regions />} />
            <Route path="/specifications" element={<Specifications />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/filter-options" element={<FilterOptions />} />
            <Route path="/submit" element={<SubmitSection />} />
          </Routes>
          <div>
            <FinalTable />
          </div>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
