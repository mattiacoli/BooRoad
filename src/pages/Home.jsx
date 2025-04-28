import { useTripContext } from '../contexts/TripContext'
import TravelCard from '../components/TravelCard'
import { Link } from 'react-router-dom'

export default function Home() {

  const { data } = useTripContext()

  return (
    <>
      <div className="container py-5 mb-4 bg-lighter rounded-3">
        <h1 className="display-5 fw-bold">Benvenuto nella Home</h1>
        <p className="col-md-8 fs-4">Qui puoi gestire i viaggi disponibili</p>
      </div>

      <div className="container">

        {/* add new trip */}
        <Link to='/addtrip'>
          <button className='btn  my-4'>+ Nuovo Viaggio</button>
        </Link>


        {/* travel card */}
        <div className="row row-cols-1 row-cols-md-3 g-4 pb-5">
          {data.map(gita => (
            <TravelCard
              key={gita.id}
              id={gita.id}
              image={gita.immagine}
              travelName={gita.nome}
              travelLocation={gita.città}
              partecipanti={gita.partecipanti}
              dataInizio={gita.dataInizio}
              dataFine={gita.dataFine}
            />
          ))}
        </div>
      </div>
    </>
  )
}