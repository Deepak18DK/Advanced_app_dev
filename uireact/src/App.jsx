import React, { Suspense, lazy } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import HomePage from './pages/Homepage';

import SignupPage from './pages/Signup';
import Login from './pages/Login';
import Weblayout from './layouts/Weblayout';
import ContactPage from './pages/Contact';
import Terms from './pages/Terms';
const Contact=lazy(()=>import ('./pages/Contact'))

function App() {
  return (
   <BrowserRouter>
   <Suspense fallback="LOADING.....">
   <Routes>
    <Route element={<Weblayout/>}>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
    </Route>
      <Route path='/contact-us' element={<ContactPage/>}/>
      <Route path='/terms' element={<Terms/>}/>
    
   </Routes>
   </Suspense>
   </BrowserRouter>

  );
}

export default App;
