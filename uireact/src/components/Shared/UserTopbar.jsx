import React from 'react'

import { NavLink } from 'react-router-dom'
import '../../assets/css/core.css'
import { UserIcon } from 'lucide-react'

const UserTopbar = () => {
    const links=[
        
        {
          name:'My Profile',
          path:'/user/Profile',
          icon: <UserIcon color='white'/>
        },
        
    ]
  return (
    <>
    <header class="header sticky top-0 shadow-md flex items-center justify-between px-8 py-02" style={{backgroundColor:"#1F2937"}}>

    <h1 class="w-3/12">
        
    </h1>

   
    <nav class="nav font-semibold text-lg">
        <ul class="flex items-center ">
            {
             
              links.map((link,index)=>(
                <li className='p-4 border-b-2 border-blue-900 border-opacity-0 hover:border-opacity-100 hover:text-white duration-100 cursor-pointer'>
                <NavLink key={index} to={link.path} className='cursor-pointer nav-link'>
                  {link.icon}
                </NavLink>
                </li>
    
              ))
    
            }
        </ul>
    </nav>

    
   
</header>
    </>
  )
}

export default UserTopbar