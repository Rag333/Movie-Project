import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from'../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from'../../assets/caret_icon.svg'
import { logout } from '../../firebase'
import { useNavigate } from 'react-router-dom';





const Navbar = () => {
 
  const navRef = useRef();
  const navigate = useNavigate();
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>=80){
        navRef.current.classList.add('nav-dark');
      }else{
        navRef.current.classList.remove('nav-dark');
      }
    })

  },[])
  const handleLogout = async () => {
    try {
      await logout(); // Wait for logout
      navigate('/login'); // Redirect after successful logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div ref={navRef} className='Navbar'>


        <div className="Navbar-left">
            <img src={logo} alt='not found'/>
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My list</li>
                <li>Browse by Language</li>
            </ul>
        </div>
        <div className="Navbar-right">
            <img src={search_icon} alt='' className='icons'/>
            <p>Children</p>
            <img src={bell_icon} alt='' className='icons'/>
            <div className='navbar-profile'>
            <img src={profile_img} alt='' className='profile'/>
            <img src={caret_icon} alt='' />
            <div className='dropdown'>
             <p onClick={handleLogout}> Sign Out</p>
            </div>

            </div>
            
            
        </div>
      
    </div>
  )
}

export default Navbar
