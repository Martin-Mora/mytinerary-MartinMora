import '../Cities/cities.css';
import TravelCard from '../../TravelCard/TravelCard';
import { useState, useEffect } from 'react';
import notFound from '../../../img/notFound.svg';
import axios from 'axios';
import { TailSpin} from 'react-loader-spinner';

const Cities = () => {
  const [data, setData] = useState([]);
  const [input, setinput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios('https://mytinerary-back-martinmora-1c1h-dev.fl0.io/api/cities')
      .then(res => {
        setData(res.data.response);
        setIsLoading(false); 
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setIsLoading(false); 
      });
  }, []);

  const searchInput = (e) => {
    setinput(e.target.value);
  }

  let result = data.filter((dato) => dato.city.toLowerCase().startsWith(input.toLowerCase().trim()));

  let render;

  if (isLoading) {
    render = (
      <div className="spinner-container">
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      <h2>Loading...</h2>
      </div>
    );

  } else if (input) {
    render = result.length > 0 ? result.map((travel) => (
      <TravelCard key={travel._id} travel={travel} style='Img-container2' buttonShow='btn-info' />
    )) : (
      <div className='notFoundCity-container'>
        <h2 className='notFoundCity-container--title'>Result not found</h2>
        <img src={notFound} className='notFoundCity' alt="Not found" />
      </div>
    );
  } else {
    render = data.map((travel) => (
      <TravelCard key={travel._id} travel={travel} style='Img-container2' buttonShow='btn-info' />
    ));
  }

  return (
    <>
      <div className='bannerCities'>
        <div className='welcomeCities'>
          <h1 className='welcomeCities__title'>Look at the cities and find the best one for you</h1>
          <div className='welcomeCities__search'>
            <input onChange={searchInput} value={input} className='welcomeCities__search--input' type="text" placeholder='search your city....' />
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

export default Cities;
