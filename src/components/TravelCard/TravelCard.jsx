import '../Carousel/carouselMain.css';
import '../pages/Cities/cities.css';
import { Link } from 'react-router-dom';


const TravelCard = ({ travel,style,buttonShow }) => {

  const cardStyle = style == 'Img-container' ? 'Img-container' : 'Img-container2';

  const butonElement = buttonShow == 'btn-info' ? 'btn-info' : 'btn-hidden';

  

  return (
    <div className={cardStyle}>
          <img className='carousel-img' src={travel.image} alt="" />
          <div className='carousel-img--info'>
            <h5>{travel.city}</h5>
            <p>{travel.country}</p>
            <Link to={`/CityDetails/${travel._id}`}><button className={butonElement}> Info city </button></Link>
          </div>
    </div>
  )
}

export default TravelCard