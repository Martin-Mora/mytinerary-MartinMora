import '../Cities/cities.css';
import TravelCard from '../../TravelCard/TravelCard';
import { useState, useEffect } from 'react';
import notFound from '../../../img/notFound.svg';
import axios from 'axios';



const Cities = () => {
  const [data, setData] = useState([]);
  const [input,setinput] = useState("");


  useEffect(() => {
    axios('https://mytinerary-back-martinmora-1c1h-dev.fl0.io/api/cities')
    .then(res=>setData(res.data.response))

    
  }, []);

 

  const searchInput = (e)=>{
    setinput(e.target.value)
    

  }


let result = data.filter((dato) => dato.city.toLowerCase().startsWith(input.toLowerCase().trim()));

let render;

  if (input) {
    render = result.length > 0 ? result.map((travel) => <TravelCard key={travel._id} travel={travel} style='Img-container2' buttonShow='btn-info'  />) :
    <div className='notFoundCity-container'><h2 className='notFoundCity-container--title'>Result not found</h2><img src={notFound} className='notFoundCity' alt="Not found" /></div> ;
  } else {
    render = data.map((travel) => <TravelCard key={travel._id} travel={travel} style='Img-container2' buttonShow='btn-info' />);
  }
  


  
  return (
    
      <>
        <div className='bannerCities'>
          <div className='welcomeCities'>
            <h1 className='welcomeCities__title'>Look at the cities and find the best one for you</h1>

            <div className='welcomeCities__search'>
              <input onChange={searchInput} value={input} className='welcomeCities__search--input' type="text" placeholder='search your city....'/>
            </div>
          </div>
        </div>
        
        <main>

          <div className='citiesContainer'>




        {render}
        
        
    
        

          </div>

        </main>
      </>
  )
}

export default Cities
