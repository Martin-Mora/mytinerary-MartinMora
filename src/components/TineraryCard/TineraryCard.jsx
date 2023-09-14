import "../TineraryCard/tineraryCard.css";

const TineraryCard = (tinerary) => {

  let price = tinerary.value.price;
  let renderPrice = [];

  for (let i = 0; i < price; i++) {
    renderPrice.push(<i key={i} className="bx bx-money"></i>);
  }

  return (
    <div className="tinerary-container">
      <h2 className="tinerary-title2">{tinerary.value.tineraryTitle}</h2>
      <div>
        <div className="tinerary-img">
          <img src={tinerary.value.tineraryImage} alt="" />
          <div className="tinerary-like">
            <span>Likes:</span>
            <i className="bx bx-heart"></i> {tinerary.value.likes}
          </div>
        </div>

        <div className="user-container">
          <div className="Itinerary-user">
            <span>User: </span>
            {tinerary.value.namePusblisher}
            <img src={tinerary.value.imagePublisher} alt="" />
          </div>
          <div className="Itinerary-info">
            <div className="Itinerary-hashtag">
              <span>Hashtags: </span>
              {tinerary.value.hashtags}
            </div>
            <div className="Itinerary-duration">
              <span>Duration: </span>
              {tinerary.value.duration}hs
            </div>
            <div className="Itinerary-price">
              <span>Price: </span>
              <div className="price-icon">
                {renderPrice}
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TineraryCard;
