import welcome from '../../../img/welcome3.jpg';
import '../Home/home.css';
import CarouselMain from '../../Carousel/CarouselMain';
import { Link } from 'react-router-dom';





const Home = () => {
  return (
    <>
      <main className='app-main__main'>
        <div className='app-main__main--welcome'>
          <div className='app-main__background'>
            <div className='app-main__info'>
              <h1>Find the perfect destination</h1>
              <p>Find your perfect trip whith ours app, designed by insiders
              who know and love their cities!</p>
              <Link to="/cities"><button className='app-main__btShow'>Show more</button></Link>
            </div>
          </div>
        </div>
        <div className='app-main__main--img'>
          <img src={welcome} alt="welcome-MyItenarary" />
        </div>
      </main>  
      <CarouselMain />
    </>
  )
}

export default Home