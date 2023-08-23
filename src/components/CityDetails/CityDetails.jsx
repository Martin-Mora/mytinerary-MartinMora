import { useEffect,useState } from 'react';
import '../CityDetails/cityDetails.css';
import { useParams } from 'react-router-dom';




const CityDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({}); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://mytinerary-back-martinmora-1c1h-dev.fl0.io/api/cities/' + id);
        const jsonData = await response.json();
        setData(jsonData.response); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]); 


  return (
    <main className='containerCity'>
      <div className='containerCity__info'>
        <div className='overlay'></div>
        <img src={data.image} alt="" />
        <div className='containerCity__general'>
          <h2 className='containerCity__infoCity'>{data.city}</h2>
          <p>{data.description}</p>
         <a href="#itineraries"><button className='containerCity__btnCity'>View More ↓</button></a>
        </div>
      </div>

      <section className='itineraries' id='itineraries'>
        
      </section>
    </main>
  );
};

export default CityDetails;
