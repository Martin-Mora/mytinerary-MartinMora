import Footer from "../../Footer/Footer";
import NavbarMain from "../../Navbar/NavbarMain";
import { Outlet } from "react-router-dom";



const LayoutMain = ( ) => {
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