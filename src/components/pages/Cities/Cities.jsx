import "../Cities/cities.css";
import TravelCard from "../../TravelCard/TravelCard";
import SpinnerLoading from "../../SpinnerLoading/SpinnerLoading";
import { useEffect } from "react";
import { Notfound } from "../../Notfound/Notfound";
import { useSelector, useDispatch } from "react-redux";
import {
  city_render,
  city_input,
  resetSearch,
} from "../../../redux/actions/cityAction.js";

const Cities = () => {
  const cityStore = useSelector((store) => store.cityReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(city_render());
    dispatch(resetSearch());
  }, [dispatch]);

  const handleInput = (e) => {
    dispatch(city_input(cityStore.selectedValue, e.target.value));
  };

  // Filtro
  const filteredCities = cityStore.allCity.filter((dato) => {
    const city = dato.city || ""; 
    return city
      .toLowerCase()
      .startsWith((cityStore.input || "").toLowerCase().trim());
  });

  let render;

  console.log(cityStore.selectedValue);

  if (cityStore.loading) {
    render = <SpinnerLoading />
  } else {
    // filtro de ciudad
    render =
      filteredCities.length > 0 ? (
        filteredCities.map((travel) => (
          <TravelCard
            key={travel._id}
            travel={travel}
            style="Img-container2"
            buttonShow="btn-info"
          />
        ))
      ) : (
        <Notfound />
      );
  }

  return (
    <>
        <div className="bannerCities">
          <div className="welcomeCities">
            <h1 className="welcomeCities__title">
              Look at the cities and find the best one for you
            </h1>
            <div className="welcomeCities__search">
              <input
                onChange={handleInput}
                value={cityStore.input}
                className="welcomeCities__search--input"
                type="text"
                placeholder="search your city...."
              />
            </div>
          </div>
        </div>
      
      <main className="cities">
        <div className="citiesContainer">{render}</div>
      </main>
    </>
  );
};

export default Cities;
