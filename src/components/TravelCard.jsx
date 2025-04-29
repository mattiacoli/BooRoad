import { useNavigate } from "react-router-dom"
import StatusTag from "./StatusTag"
import Companions from "./Companions";


export default function TravelCard({ image, travelName, travelLocation, id, partecipanti, dataInizio, dataFine, accompagnatori }) {

  const navigate = useNavigate()

  return (
    <>
      <div className="col">
        <div className="card h-100 shadow-sm"
          style={{ cursor: 'pointer' }}
          onClick={() => navigate(`/${id}/trip`)}>
          <div className="card-header p-0" >
            <img className="w-100" src={image} onError={(e) => { e.target.onerror = null; e.target.src = "/images/placeholder.jpg"; }} alt="travel image" style={{ objectFit: "cover", height: "200px" }} />
          </div>
          <div className="card-body d-flex align-items-center justify-content-between">
            <div className="trave_content">
              <h2>{travelName}</h2>
              <p>{travelLocation}</p>
              <p>N° Partecipanti:  {partecipanti.length} </p>
              <hr />
              <p>Accompagnatori:</p>
              <ul>
                {accompagnatori.map(item => (
                  <li key={item.id}>{item.nome} {item.cognome}</li>
                ))}
              </ul>
              <div className="tag text-end mt-4">
                <StatusTag start={dataInizio} end={dataFine} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}