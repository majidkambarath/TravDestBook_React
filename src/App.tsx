import React from 'react';

import './App.css';
import AdminRouter from './Router/AdminRouter';
// import Login_page from './Pages/Login_page';

import UserRouter from './Router/UserRouter';
function App() {
  return (
    <div>
      <UserRouter/>
      <AdminRouter/>
    </div>
  );
}

export default App;
