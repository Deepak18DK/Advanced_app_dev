import React, { Suspense, lazy } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Terms from './pages/Terms';




import UserDashboard from './pages/Shared/UserDashboard';
import { UserEvents } from './pages/Shared/UserEvents';
import { UserBookings } from './pages/Shared/UserBookings';
import { UserPayments } from './pages/Shared/UserPayments';
import UserProfile from './pages/Shared/UserProfile';
import Login from './components/Auth/Login';
import WebLayout from './layouts/Weblayout';
import AdminLayout from './layouts/Adminlayout';
import { AdminDashboard } from './pages/Admin/AdminDashboard';

import { AdminBookings } from './pages/Admin/AdminBookings';
import { AdminAllPayments } from './pages/Admin/AdminAllPayments';
import AdminSettings from './pages/Admin/AdminSettings';
import { AdminAllUsers } from './pages/Admin/AdminAllUsers';
import HomePage from './pages/Homepage';
import Signup from './components/Auth/Signup';
import ContactPage from './pages/Contact';
import UserLayout from './layouts/Userlayout';
import { AdminAllEvent } from './pages/Admin/AdminAllEvent';
import { AdminAddEvent } from './pages/Admin/AdminAddEvent';
const Contact=lazy(()=>import ('./pages/Contact'))

function App() {
  return (
   <BrowserRouter>
   <Suspense fallback="LOADING.....">
   <Routes>
    <Route element={<WebLayout/>}>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contact-us' element={<ContactPage/>}/>
      <Route path='/terms' element={<Terms/>}/>
    </Route>
    <Route element={<UserLayout/>}>
        <Route path='/user/Dashboard' element={<UserDashboard/>}/>
        <Route path='/user/Events' element={<UserEvents/>}/>
        <Route path='/user/Bookings' element={<UserBookings/>}/>
        <Route path='/user/Payments' element={<UserPayments/>}/>
        <Route path='/user/Profile' element={<UserProfile/>}/>
      </Route>

      <Route element={<AdminLayout/>}>
        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
        <Route path='/admin/addEvent' element={<AdminAddEvent/>}/>
        <Route path='/admin/allEvents' element={<AdminAllEvent/>}/>
        <Route path='/admin/bookings' element={<AdminBookings/>}/>
        <Route path='/admin/payments' element={<AdminAllPayments/>}/>
        <Route path='/admin/settings' element={<AdminSettings/>}/>
        <Route path='/admin/users' element={<AdminAllUsers/>}/>
      </Route>
         </Routes>
   
   </Suspense>
   </BrowserRouter>

  );
}

export default App;
