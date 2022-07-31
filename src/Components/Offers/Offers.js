import { v4 as uuidv4 } from "uuid";
import { OfferInfo } from "../../Data/OfferInfo/Offerinfo";
import { Link } from "react-router-dom";

export const Offers = () => {
  return (
    <section className="offer-info" id="offers">
      <div className="offers-layout content-width">
        <h1>Czym zajmuje się nasza firma?</h1>
        <div className="product-segregation">
          {OfferInfo.map(({ name, location, isNew }) => {
            if (isNew === true) {
              return (
                <Link key={uuidv4} to={location} className="product">
                  <div className="dot"></div> <span>{name}</span>
                  <span>(nowość)</span>
                </Link>
              );
            } else {
              return (
                <Link className="product" key={uuidv4()} to={location}>
                  {name}
                </Link>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};
