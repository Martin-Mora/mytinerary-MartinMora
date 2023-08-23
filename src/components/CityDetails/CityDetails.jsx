import { useEffect,useState } from 'react';
import '../CityDetails/cityDetails.css';
import { useParams } from 'react-router-dom';
import { TailSpin} from 'react-loader-spinner';




const CityDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({}); 
  const [isLoading, setIsLoading] = useState(true);

  let render;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://mytinerary-back-martinmora-1c1h-dev.fl0.io/api/cities/' + id);
        const jsonData = await response.json();
        setData(jsonData.response);
        setIsLoading(false); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]); 


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
  }

  else{
    render =(
      <>
        <h2 className='containerCity__infoCity'>{data.city}</h2>
        <p>{data.description}</p>
      </>
    )
  }

  return (
    <main className='containerCity'>
      <div className='containerCity__info'>
        <div className='overlay'></div>
        <img src={data.image} alt="" />
        <div className='containerCity__general'>
          {render}
          <a href="#itineraries"><button className='containerCity__btnCity'>View More ↓</button></a>
        </div>
      </div>

      <section className='itineraries' id='itineraries'>
      </section>
    </main>
  );
};

export default CityDetails;
