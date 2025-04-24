export default function TravelCard({ image, travelName, travelLocation }) {
    return (
        <>
            <div className="col-3">
                <div className="card">
                    <div className="card-header">
                        <img src={image} alt="travel image" />
                    </div>
                    <div className="card-body">
                        <h2>{travelName}</h2>
                        <p>{travelLocation}</p>
                    </div>
                </div>
            </div>
        </>
    )
}