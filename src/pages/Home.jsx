import { useTripContext } from '../contexts/TripContext'
import TravelCard from '../components/TravelCard'
import { Link } from 'react-router-dom'

export default function Home() {

    const { data } = useTripContext()

    return (
        <>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Benvenuto su BooRoad</h1>
                    <p className="col-md-8 fs-4">
                        Scopri la tua prossima avventura con BooRoad. Esplora destinazioni incredibili, pianifica viaggi indimenticabili e crea ricordi che durano una vita.
                    </p>
                    <button className="btn  btn-lg" type="button">
                        Inizia il tuo viaggio
                    </button>
                </div>
            </div>

            <div className="container">
                <Link to='#'>
                    <button className='btn  my-4'>+ Nuovo Viaggio</button>
                </Link>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {data.map(gita => (
                        <TravelCard
                            key={gita.id}
                            id={gita.id}
                            image={gita.immagine}
                            travelName={gita.nome}
                            travelLocation={gita.città}
                            partecipanti={gita.partecipanti}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}