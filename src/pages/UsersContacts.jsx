import { useTripContext } from "../contexts/TripContext";
import { useState } from "react";

export default function UsersContacts() {
  const { data, searchQuery } = useTripContext();
  const [sortDirection, setSortDirection] = useState("asc");

  function handleSort() {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  }

  const filteredUsers = data
    .flatMap((trip) => trip.partecipanti)
    .filter((user) =>
      `${user.nome} ${user.cognome}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortDirection === "asc") {
        return a.cognome.localeCompare(b.cognome);
      } else {
        return b.cognome.localeCompare(a.cognome);
      }
    });

  return (
    <>
      <div className="container py-5 mb-4 bg-lighter rounded-3">
        <h1 className="display-5 fw-bold">Benvenuto nella Dashboard</h1>
        <p className="col-md-8 fs-4">Qui puoi gestire gli utenti e i viaggi</p>
      </div>

      <div className="container mt-4">
        <h1 className="my-3">Elenco Utenti</h1>
        <hr />

        <div className="table-responsive">
          <table className="table table-sm table-striped">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="d-flex gap-1 col-sm-8"
                  onClick={handleSort}
                  style={{ cursor: "pointer" }}
                >
                  Cognome{" "}
                  {sortDirection === "asc" ? (
                    <i className="bi bi-chevron-down"></i>
                  ) : (
                    <i className="bi bi-chevron-up"></i>
                  )}
                </th>
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
              {filteredUsers.map((user) => (
                <tr key={user.codiceFiscale}>
                  <td>{user.cognome}</td>
                  <td scope="row">{user.nome}</td>
                  <td>{user.email}</td>
                  <td>{user.telefono}</td>
                  <td>{user.codiceFiscale}</td>
                  <td>{user.contattoEmergenza.nome}</td>
                  <td>{user.contattoEmergenza.relazione}</td>
                  <td>{user.contattoEmergenza.telefono}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}