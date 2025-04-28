import { useNavigate } from "react-router-dom"
import StatusTag from "./StatusTag"


export default function TravelCard({ image, travelName, travelLocation, id, partecipanti, dataInizio, dataFine }) {

  const navigate = useNavigate()

  return (
    <>
      <div className="col">
        <div className="card h-100 shadow-sm">
          <div className="card-header p-0">
            <img className="w-100" src={image} alt="travel image" style={{ objectFit: "cover", height: "200px" }} />
          </div>
          <div className="card-body d-flex align-items-center justify-content-between">
            <div className="trave_content">
              <h2>{travelName}</h2>
              <p>{travelLocation}</p>
              <p>N° Partecipanti:  {partecipanti.length} </p>
              <StatusTag start={dataInizio} end={dataFine} />
            </div>
            <button onClick={() => navigate(`/${id}/trip`)} className="btn">Details</button>
          </div>
        </div>
      </div>
    </>
  )
}