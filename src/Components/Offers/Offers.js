import { v4 as uuidv4 } from "uuid";
import { OfferInfo } from "../../Data/OfferInfo/Offerinfo";

export const Offers = () => {
  return (
    <section className="offer-info" id="offers">
      <div className="offers-layout content-width">
        <h1>Czym zajmuje się nasza firma?</h1>
        <div className="product-segregation">
          {OfferInfo.map(({ name, location, isNew }) => {
            if (isNew === true) {
              return (
                <a key={uuidv4} href={location} className="product">
                  <div className="dot"></div> <span>{name}</span>
                  <span>(nowość)</span>
                </a>
              );
            } else {
              return (
                <a className="product" key={uuidv4()} href={location}>
                  {name}
                </a>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};
