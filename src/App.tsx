import React from 'react';

import './App.css';
import AdminRouter from './router/AdminRouter';
// import Login_page from './Pages/Login_page';

import UserRouter from './router/UserRouter';
function App() {
  return (
    <div>
      <UserRouter/>
      <AdminRouter/>
    </div>
  );
}

export default App;
