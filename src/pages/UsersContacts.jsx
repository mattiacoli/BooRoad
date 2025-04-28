import { useTripContext } from "../contexts/TripContext"
import { useState } from "react"

export default function UsersContacts() {

  const { data } = useTripContext()

  const [sortDirection, setSortDirection] = useState("asc")

  function handleSort() {
    setSortDirection(prev => prev === "asc" ? "desc" : "asc")
  }

  return (<>
    <h1>Elenco Utenti</h1>

    <div
      className="table-responsive"
    >
      <table
        className="table table-primary"
      >
        <thead>
          <tr>
            <th scope="col"
              onClick={handleSort}
              style={{ cursor: 'pointer' }}>Cognome {sortDirection === "asc" ? <i className="bi bi-chevron-down"></i> : <i className="bi bi-chevron-up"></i>}</th>
            <th scope="col">Nome</th>
            <th scope="col">Mail</th>
            <th scope="col">Telefono</th>
            <th scope="col">Codice Fiscale</th>
            <th scope="col">Contatto di Emergenza</th>
            <th scope="col">Relazione</th>
            <th scope="col">Telefono Emergenza</th>
          </tr>
        </thead>
        <tbody>

          {data
            .flatMap((trip) => trip.partecipanti)
            .sort((a, b) => {
              if (sortDirection === "asc") {
                return a.cognome.localeCompare(b.cognome);
              } else {
                return b.cognome.localeCompare(a.cognome);
              }
            })
            .map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.cognome}</td>
                  <td scope="row">{user.nome}</td>
                  <td>{user.email}</td>
                  <td>{user.telefono}</td>
                  <td>{user.codiceFiscale}</td>
                  <td>{user.contattoEmergenza.nome}</td>
                  <td>{user.contattoEmergenza.relazione}</td>
                  <td>{user.contattoEmergenza.telefono}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div >

  </>

  )
}