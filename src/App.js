import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { RoleProvider } from './context/RoleContext';
import { PermissionProvider } from './context/PermissionContext';
import Navbar from './Shared/Navbar';
import Sidebar from './Shared/Sidebar';
import UserList from './components/UserManagement/UserList';
import RoleList from './components/RoleManagement/RoleList';
import PermissionTable from './components/PermissionManagement/PermissionTable';
import './styles/global.css';


function App() {
  return (
    <Router>
      <UserProvider>
        <RoleProvider>
          <PermissionProvider>
            <div className="flex">
              <Sidebar />
              <div className="main-content">
                <Navbar />
                <Routes>
                  <Route path="/" element={<UserList />} />
                  <Route path="/roles" element={<RoleList />} />
                  <Route path="/permissions" element={<PermissionTable />} />
                </Routes>
              </div>
            </div>
          </PermissionProvider>
        </RoleProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
