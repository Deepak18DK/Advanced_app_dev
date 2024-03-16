import React, { Suspense, lazy } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import HomePage from './pages/Homepage';

import SignupPage from './pages/Signup';
import Login from './pages/Login';
import Weblayout from './layouts/Weblayout';
const Contact=lazy(()=>import ('./pages/Contact'))

function App() {
  return (
   <BrowserRouter>
   <Suspense fallback="LOADING.....">
   <Routes>
    <Route element={<Weblayout/>}>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/signup' element={<SignupPage/>}/>
    </Route>
   </Routes>
   </Suspense>
   </BrowserRouter>

  );
}

export default App;
