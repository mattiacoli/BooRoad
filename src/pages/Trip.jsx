import data from '../data/data.js'
import { useParams } from 'react-router-dom'

export default function Trip() {

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

            <div className="jumbotron">

                <span>{tripName.nome}</span>

                {data.map((trip) => (

                    <div className="card" key={trip.id}>
                        <img src={trip.immagine} className="card-img-top" alt={trip.nome} />
                        <div className="card-body">
                            <h5 className="card-title">{trip.nome}</h5>
                            <span>Data Inizio:{trip.dataInizio}</span>
                            <span>Data Fine:{trip.dataFine}</span>
                        </div>
                    </div>
                ))}

            </div>

        </>


    )
}