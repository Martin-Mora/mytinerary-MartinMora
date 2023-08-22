import { useEffect } from "react";
import Footer from "../../Footer/Footer";
import NavbarMain from "../../Navbar/NavbarMain";
import { Outlet, useLocation } from "react-router-dom";



const LayoutMain = ( ) => {

    const {pathname} = useLocation();
    
    useEffect(()=>{
        window.scrollTo(0,0);
    },[pathname])

return (
    <div className='app-main'> 
    <header className='app-main__header'>
    <NavbarMain />
    </header>
    
    <Outlet />
    
    <Footer />
    
    </div>
)
}

export default LayoutMain