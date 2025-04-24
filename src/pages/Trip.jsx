import data from '../data/data.js'

export default function Trip() {

    return (

        <>

            <div className="jumbotron">

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