import '../Carousel/carouselMain.css';

const TravelCard = ({ travel }) => {
  return (
    <div className='Img-container'>
          <img className='carousel-img' src={travel.image} alt="" />
          <div className='carousel-img--info'>
            <h5>{travel.city}</h5>
            <p>{travel.country}</p>
          </div>
    </div>
  )
}

export default TravelCard