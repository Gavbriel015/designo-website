import australiaImg from "/assets/shared/desktop/illustration-australia.svg";
import canadaImg from "/assets/shared/desktop/illustration-canada.svg";
import unitedKingdomImg from "/assets/shared/desktop/illustration-united-kingdom.svg";
import LocationCard from "./LocationCard";

export default function Location() {

    const locations = [
        { name: "Canada", img: canadaImg },
        { name: "Australia", img: australiaImg },
        { name: "United Kingdom", img: unitedKingdomImg },
      ];

    return(
        <div className="flex flex-col tab:flex-row justify-evenly gap-24 my-24">
        {locations.map((location) => (
          <div key={location.name}>
            <LocationCard name={location.name} img={location.img} />
          </div>
        ))}
      </div>
    )
}