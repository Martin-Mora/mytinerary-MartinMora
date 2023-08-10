import { useState } from 'react';
import '../Navbar/navbarMain.css';
import User from '../../img/User.png';
import { Link } from 'react-router-dom';


const NavbarMain = () => {

  const[menuOpen,setMenuOpen] = useState(false);
  const[modalClose,setModalClose] = useState(true);
  
 


  const handleClick= ()=> {
    
    setMenuOpen(!menuOpen)
    
  }

  const handleModal= ()=> {
    
    setModalClose(modalClose)
    setMenuOpen(!menuOpen)
    
  }

 

  return (
    <>
        
          <div className='app-main__header--logo'>
            <Link to="/">
            <i className='bx bxs-plane-alt'></i>
            My Tinerary
            </Link>
          </div>
          <nav className='app-main__header--nav'>

            <div onClick={handleModal}>
              <i className={` ${menuOpen ? 'none' : 'bx bx-menu'}`}></i>
            </div>

            <ul className= {` ${menuOpen ? 'nav-items' : 'none'}`} >
              <li>
                <div onClick={handleClick} >
                  <i className={` ${menuOpen ? ' bx bx-x' : 'none'}`}  ></i>
                </div>
              </li>
              <li><Link to="/" onClick={`${handleModal}?''`}><i className='bx bxs-home'></i> Home</Link></li>
              <li><Link to="/cities" onClick={`${handleModal}?''`}><i className='bx bxs-briefcase-alt' ></i> Cities</Link></li>
              <li className='app-login'><img className='user-icon' src={User} alt='' /><a href="#"> Login</a></li>
            </ul>

          </nav>

          <div onClick={handleModal} className={` ${menuOpen ? 'modalBackground' : 'modalBackgroundNone'}`}    >
          </div>
    </>      
  )
}

export default NavbarMain