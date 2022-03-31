import HousingModal from "./HousingModal";
import PropertyDetails from "./Property-details";
import React ,{useState} from "react";

const HousingCard = ({res, key}) => {
    const [isQuickView, setQuickView] = useState(false);

    return (
        <>
                <div className="card" onClick={() => {setQuickView(true)}}>
                    <img key={key} src={res.url}  alt="property" className="card-img-top"/>
                    <div className="card-body">
                        <div className="list-team d-flex">
                            <h6 className="ml-2">{res.AgentName}</h6>
                            <span className="text-right">2 weeks ago</span>
                        </div>
                        <h5 className="card-title">{res.AgentName} Property</h5>
                        <span className="location"><i className="fa-solid fa-location-dot"></i>{res.location}<span className={`${res.status}`}>{res.status}</span> </span>

                    </div>
                </div>
                {/** Modals Here */}
                <HousingModal open={isQuickView} onClose={() => setQuickView(false)}>
                    <PropertyDetails  res={res} />
                </HousingModal>
        </>
    )
}

export default HousingCard
