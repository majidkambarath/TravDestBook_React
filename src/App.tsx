import React from 'react';

import './App.css';
import AdminRouter from './router/AdminRouter';
// import Login_page from './Pages/Login_page';
import  Toastify from './Components/Toastify/Toastify'
import HostToast from './Components/Toastify/Hot_toaster'
import UserRouter from './router/UserRouter';
function App() {
  return (
    <div>
      {/* <Toastify/> */}
      <HostToast/>
      <UserRouter/>
      <AdminRouter/>
    </div>
  );
}

export default App;
