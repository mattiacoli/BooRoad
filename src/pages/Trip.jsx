import { useTripContext } from '../contexts/TripContext';
import { useParams } from 'react-router-dom'

export default function Trip() {

    const { data } = useTripContext()

    const { id } = useParams()
    console.log(id);

    let tripName;

    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            tripName = data[i]
        }
    }

    console.log(tripName);


    return (

        <>

            <div className="jumbotron d-flex justify-content-center align-items-center flex-column">

                <img src={tripName.immagine} style={{ width: "50%", marginTop: "10px", marginBottom: "10px" }} />
                <h3>{tripName.nome}</h3>
                <p>🗓️ {tripName.dataInizio} - {tripName.dataFine}</p>
                <p>📍 Location: {tripName.città}</p>

            </div>

        </>


    )
}