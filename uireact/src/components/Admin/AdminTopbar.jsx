import React from 'react'
import { Cog } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../../assets/css/core.css'
import { UserIcon } from 'lucide-react'
import corpify from '../../assets/images/LogoCorp.png'

const AdminTopbar = () => {

    const Toplinks=[
       
        {
            name: 'Settings',
            path: '/admin/settings',
            icon: Cog
        },
    ]

    const navigate=useNavigate()
    const handleLogout = (e) => {
        e.preventDefault();
        navigate('/login'); // Navigate to the admin dashboard route
    };
  return (
    <div>
      <div className=' sticky top-0 h-[9vh] w-screen flex flex-row justify-between items-center shadow-sm shadow-blue-900' style={{backgroundColor:"#1F2937"}}>
      <div className='w-[90%] h-full flex flex-row justify-between items-center'>
     
      <div className='w-[15%] flex justify-center items-center'>
      <div className='cursor-pointer text-xl font-bold whitespace-nowrap'><img src={corpify} style={{height:"9vh"}}/></div>
                </div>
        <div className='w-[3%] flex justify-center items-center'>
          {Toplinks.map((link,index)=> (
             <NavLink key={index} to={link.path} className={'cursor-pointer text-md text-white font-400 mr-8'}>
              {link.name}
            </NavLink>
          ))     
          }          
          <button className='cursor-pointer justify-end items-end text-sm font-bold  bg-red-500 text-white px-4 py-2 rounded-md ' onClick={() => navigate('/login')}>Logout</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AdminTopbar