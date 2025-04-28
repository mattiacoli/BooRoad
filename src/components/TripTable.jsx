import { useTripContext } from "../contexts/TripContext.jsx";

export default function TripTable() {

  const { data, searchQuery } = useTripContext()

  // Filtra i viaggi in base alla query di ricerca
  const filteredTrips = data.filter(gita =>
    gita.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
    gita.città.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (

    <>
      <div className="container">

        <div className="table-responsive">
          <h1 className="my-3">Elenco Viaggi</h1>
          <hr />

          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead className="table table-sm table-striped">
              <tr>
                <th>Immagine</th>
                <th>Nome</th>
                <th>Città</th>
                <th>Data Inizio</th>
                <th>Data Fine</th>
                <th className="text-center">Partecipanti</th>
                <th className="text-center">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="table table-sm table-striped">
              {
                filteredTrips.map((trip) => {
                  return (
                    <tr key={trip.id}>
                      <td>
                        <img src={trip.immagine}
                          alt="travel image"
                          style={{ width: '80px', height: '50px' }} />
                      </td>
                      <td>{trip.nome}</td>
                      <td>{trip.città}</td>
                      <td>{trip.dataInizio}</td>
                      <td>{trip.dataFine}</td>
                      <td className="text-center">{trip.partecipanti.length}</td>
                      <td>
                        <div className="button_container d-flex gap-2 justify-content-center bg-transparent">
                          <button onClick={() => navigate(`/${trip.id}/edit`)} className="btn btn-actions btn-warning">Edit</button>
                          <button onClick={() => deleteUser(user.id)} className="btn btn-actions btn-danger">Delete</button>
                        </div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}