import '../Carousel/carouselMain.css';
import TravelCard from '../TravelCard/TravelCard';
import Image from '../../data/data.js';
import { useEffect, useState } from 'react';


const CarouselMain = () => {
  
  
  const [pageCity,setPageCity] = useState(0);
  
  
  const btnPrev = () =>{
    if (pageCity ==0){
      setPageCity(Image.length - 1);
    }else{
      setPageCity(pageCity -1);
    }
    
  };
  
  const btnNext = () =>{
    if (pageCity == Image.length - 1){
      setPageCity(0);
    }else{
      setPageCity(pageCity + 1);
    }
  };

  useEffect(()=>{
  const interval= setInterval(()=>{
      btnNext();
    },3000);
    return() =>clearInterval(interval)
  })

  return (
    <div className="carouselMain">
        <h2 className='titleCarousel'>Popular Mytineraries!</h2>
        <button onClick={btnPrev} className="btn-prev">{"<"}</button>
      <div className='carouselContainer'>
        {
          Image[pageCity].map((travel,key) => <TravelCard key={key} travel={travel}/>)
        }
        
        <button onClick={btnNext} className="btn-next">{">"}</button>
      </div>
    </div>
  )
}

export default CarouselMain