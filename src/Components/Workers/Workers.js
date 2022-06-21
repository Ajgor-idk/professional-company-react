import { WorkersData } from "../../Data/WorkersData/WorkersData";
import { v4 as uuidv4 } from "uuid";

export const Workers = () => {
  console.log(WorkersData[0].photo);
  return (
    <section className="workers" id="about-info">
      <div className="workers-layout content-width">
        <h1>Nasi specjaliści</h1>
        {WorkersData.map(
          ({ name, surname, department, photo, description }) => (
            <figure key={uuidv4()} className="photo-align">
              <img className="photo" src={photo} alt="Zdjęcie pracownika" />
              <figcaption>
                <p>
                  {name} {surname} [{department}]
                </p>
                <p>{description}</p>
              </figcaption>
            </figure>
          )
        )}
      </div>
    </section>
  );
};
