import { useTripContext } from "../contexts/TripContext";
import { useParams } from "react-router-dom";
import { useState } from "react";
import User from "../components/UserCard.jsx";

export default function Trip() {
  const { data } = useTripContext();

  const { id } = useParams();
  console.log(id);

  let tripName;

  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      tripName = data[i];
    }
  }

  console.log(tripName);

  const [searchUser, setSearchUser] = useState("");
  const [UserList, setUserList] = useState(tripName.partecipanti);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchUser(searchValue);

    const filteredUsers = tripName.partecipanti.filter((user) => {
      return (
        user.nome.toLowerCase().includes(searchValue) ||
        user.cognome.toLowerCase().includes(searchValue)
      );
    });

    setUserList(filteredUsers);
  };

  return (
    <>
      <div className="jumbotron d-flex justify-content-center align-items-center flex-column">
        <h3 className="mt-3">{tripName.nome}</h3>
        <img
          className="img-fluid rounded-3 object-fit-cover object-fit-center"
          src={tripName.immagine}
          style={{ width: "85%", height: "550px", marginTop: "10px", marginBottom: "10px" }}
        />
        <p>
          🗓️ {tripName.dataInizio} - {tripName.dataFine}
        </p>
        <p>📍 Location: {tripName.città}</p>
        <p>👤 Partecipanti: {tripName.partecipanti.length}</p>
      </div>

      <div className="container mt-4 pb-4">
        <h4>Ricerca Partecipanti</h4>

        <input
          type="text"
          className="form-control"
          placeholder="Cerca Partecipante"
          value={searchUser}
          onChange={handleSearch}
        />

        <div className="accordion mt-3" id="usersAccordion">
          {UserList.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      </div>
    </>
  );
}
