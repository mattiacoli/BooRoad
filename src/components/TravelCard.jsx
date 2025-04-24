import { useNavigate } from "react-router-dom"

export default function TravelCard({ image, travelName, travelLocation }) {

    const navigate = useNavigate

    return (
        <>
            <div className="col-3">
                <div className="card">
                    <div className="card-header">
                        <img src={image} alt="travel image" />
                    </div>
                    <div className="card-body d-flex align-items-center justify-content-between">
                        <div className="trave_content">
                            <h2>{travelName}</h2>
                            <p>{travelLocation}</p>
                        </div>
                        <button onClick={() => navigate('/travel')} className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </>
    )
}