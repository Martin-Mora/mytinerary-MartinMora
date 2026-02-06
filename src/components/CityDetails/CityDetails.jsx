import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../CityDetails/cityDetails.css";
import "../TineraryCard/tineraryCard.css";

import TineraryCard from "../TineraryCard/TineraryCard";
import UnderConstruction from "../UnderConstruction/UnderConstruction";
import Activities from "../Activities/Activities";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";

import { get_city, get_tineraries } from "../../redux/actions/cityAction.js";

const CityDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Traer datos al montar o cambiar de ciudad
  useEffect(() => {
    dispatch(get_city(id));
    dispatch(get_tineraries());
  }, [id, dispatch]);

  // Estado global de Redux
  const {
    city: cityStore,
    tineraries: tinerariesStore = [], // aseguramos que siempre sea array
    loadingCity,
    loadingTineraries,
  } = useSelector((store) => store.cityReducer);

  // Spinner mientras carga
  if (loadingCity || loadingTineraries || !cityStore) {
    return <SpinnerLoading />;
  }

  // Itinerarios de la ciudad actual
  const cityItineraries = tinerariesStore.filter(
    (tinerary) => tinerary.city === cityStore._id
  );

  return (
    <main className="containerCity">
      {/* HERO */}
      <div className="containerCity__info">
        <div className="overlay"></div>
        <img src={cityStore.image} alt={cityStore.city} />

        <div className="containerCity__general">
          <h2 className="containerCity__infoCity">{cityStore.city}</h2>
          <p>{cityStore.description}</p>

          <a href="#itineraries">
            <button className="containerCity__btnCity">View More ↓</button>
          </a>

          <Link to="/cities">
            <button className="containerCity__btnBack">Go Back</button>
          </Link>
        </div>
      </div>

      {/* ITINERARIES */}
      <section className="itineraries" id="itineraries">
        <h2 className="tinerary-title">Itineraries</h2>

        {cityItineraries.length > 0 ? (
          cityItineraries.map((tinerary) => (
            <div key={tinerary._id} className="containerTinerary">
              <TineraryCard value={tinerary} />
              <Activities />
            </div>
          ))
        ) : (
          <UnderConstruction />
        )}
      </section>
    </main>
  );
};

export default CityDetails;
