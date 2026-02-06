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

  useEffect(() => {
    dispatch(city_render());
    dispatch(get_city(id));
    dispatch(get_tineraries());
    return () => dispatch(resetCity());
  }, [id, dispatch]); 

  // Selección segura del store
  const cityStore = useSelector((store) => store.cityReducer.city) || null;
  const tinerariesStore = useSelector((store) => store.cityReducer.tineraries) || [];

  // Mostrar spinner mientras los datos no llegan
  if (!cityStore || !Array.isArray(tinerariesStore)) {
    return <SpinnerLoading />;
  }

  // Filtrar tinerarios de la ciudad actual
  const renderTinerary = tinerariesStore.filter(
    (tinerary) => tinerary.city === cityStore._id
  );

  // Mapear tinerarios o mostrar mensaje de construcción
  const showTinerary =
    renderTinerary.length > 0 ? (
      renderTinerary.map((tinerary) => (
        <div key={tinerary._id} className="containerTinerary">
          <TineraryCard value={tinerary} />
          <Activities />
        </div>
      ))
    ) : (
      <UnderConstruction />
    );

  // Información de la ciudad
  const renderCityInfo = (
    <>
      {cityStore.city && (
        <h2 className="containerCity__infoCity">{cityStore.city}</h2>
      )}
      {cityStore.description && <p>{cityStore.description}</p>}
    </>
  );

  return (
    <main className="containerCity">
      <div className="containerCity__info">
        <div className="overlay"></div>
        <img src={cityStore.image} alt={cityStore.city || "City Image"} />
        <div className="containerCity__general">
          {renderCityInfo}
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
        {showTinerary}
      </section>
    </main>
  );
};

export default CityDetails;

