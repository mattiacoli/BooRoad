import gite from '../data/data'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div class="p-5 mb-4 bg-light rounded-3">
                <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold">Benvenuto su BooRoad</h1>
                    <p class="col-md-8 fs-4">
                        Scopri la tua prossima avventura con BooRoad. Esplora destinazioni incredibili, pianifica viaggi indimenticabili e crea ricordi che durano una vita.
                    </p>
                    <button class="btn btn-primary btn-lg" type="button">
                        Inizia il tuo viaggio
                    </button>
                </div>
            </div>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {gite.map(gita => (
                        <div className="col" key={gita.id}>
                            <div className="card h-100 shadow-sm">
                                <img src={gita.immagine} className="card-img-top" alt={gita.nome} style={{ objectFit: 'cover', height: '200px' }} />
                                <div className="card-body">
                                    <h5 className="card-title">{gita.nome}</h5>
                                    <p className="card-text">Città: {gita.città}</p>
                                    <p className="card-text">Data Inizio: {new Date(gita.dataInizio).toLocaleDateString()}</p>
                                    <p className="card-text">Data Fine: {new Date(gita.dataFine).toLocaleDateString()}</p>
                                    <Link to={`/gite/${gita.id}`} className="btn btn-primary">Dettagli</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}