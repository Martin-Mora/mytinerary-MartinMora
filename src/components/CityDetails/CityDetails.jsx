import { useEffect } from "react";
import "../CityDetails/cityDetails.css";
import "../TineraryCard/tineraryCard.css";
import { Link, useParams } from "react-router-dom";
import TineraryCard from "../TineraryCard/TineraryCard";
import UnderConstruction from "../UnderConstruction/UnderConstruction";
import Activities from "../Activities/Activities";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";
import { useDispatch, useSelector } from "react-redux";
import {
  get_city,
  resetCity,
  get_tineraries,
  city_render,
} from "../../redux/actions/cityAction.js";

const CityDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  let render;
  let renderTinerary = [];
  let showTinerary;
  let isLoading = true;

  useEffect(() => {
    dispatch(city_render());
    dispatch(get_city(id));
    dispatch(get_tineraries());
    return () => dispatch(resetCity());
  }, [id, dispatch]);

  const cityStore = useSelector((store) => store.cityReducer.city);
  const tinerariesStore = useSelector((store) => store.cityReducer.tineraries);
  const cities = useSelector((store) => store.cityReducer.allCity);

  for (const iterator of tinerariesStore) {
    for (const iterator2 of cities) {
      if (iterator2._id === iterator.city) {
        renderTinerary.push(iterator);
      }
    }
  }

  console.log(renderTinerary);

  render = (
    <>
      {cityStore && cityStore.city && (
        <h2 className="containerCity__infoCity">{cityStore.city}</h2>
      )}
      {cityStore && cityStore.description && <p>{cityStore.description}</p>}
    </>
  );

  
  let matchingItineraries=[]
   
     matchingItineraries = renderTinerary.filter(
      (tinerary) =>
        cityStore && cityStore._id && tinerary.city === cityStore._id
    );

    if (matchingItineraries.length > 0) {
      showTinerary = matchingItineraries.map((tinerary) => (
        <div key={tinerary._id} className="containerTinerary">
          <TineraryCard value={tinerary} />
          <Activities />
        </div>
      ));
      isLoading = false;
    }
    

  return (
    <>
      {cityStore ? (
        <main className="containerCity">
          <div className="containerCity__info">
            <div className="overlay"></div>
            <img src={cityStore.image} alt="" />
            <div className="containerCity__general">
              {render}
              <a href="#itineraries">
                <button className="containerCity__btnCity">View More ↓</button>
              </a>
              <Link to="/cities/">
                <button className="containerCity__btnBack">Go Back</button>
              </Link>
            </div>
          </div>

          <section className="itineraries" id="itineraries">
            <h2 className="tinerary-title">Itineraries</h2>
            {isLoading ? <UnderConstruction />: showTinerary}
          </section>
        </main>
      ) : (
        <SpinnerLoading />
      )}
    </>
  );
};

export default CityDetails;
