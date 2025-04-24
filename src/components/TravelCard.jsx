import { useNavigate } from "react-router-dom"

export default function TravelCard({ image, travelName, travelLocation, id, partecipanti }) {

  const navigate = useNavigate()

  return (
    <>
      <div className="col">
        <div className="card">
          <div className="card-header p-0">
            <img className="w-100" src={image} alt="travel image" />
          </div>
          <div className="card-body d-flex align-items-center justify-content-between">
            <div className="trave_content">
              <h2>{travelName}</h2>
              <p>{travelLocation}</p>
              <p>n. partecipanti:  {partecipanti.length}</p>
            </div>
            <button onClick={() => navigate(`/${id}/trip`)} className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </>
  )
}