import { useTripContext } from "../contexts/TripContext";
import { useParams } from "react-router-dom";
import { useState } from "react";
import User from "../components/UserCard.jsx";
import AddUsersForm from "../components/AddUsersForm.jsx";

export default function Trip() {
  const { data, setData } = useTripContext();

  const { id } = useParams();
  console.log(id);

  let tripName;

  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      tripName = data[i];
    }
  }

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



  //logic for add users form

  const [newUser, setNewUser] = useState({
    id: null,
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    codiceFiscale: "",
    contattoEmergenza: {
      nome: "",
      telefono: "",
      relazione: ""
    }
  })

  const [message, setMessage] = useState('')


  function handleChange(key, value) {
    setNewUser({
      ...newUser,
      [key]: value
    })

  }

  function handleSubmit() {
    console.log('submit');

    const trip = data.find(trip => trip.id === Number(id))

    if (!trip) {
      return setMessage({
        state: 'error',
        message: 'Trip not found'
      })
    }

    const newId = trip.partecipanti.reduce((max, item) => (item.id > max ? item.id : max), 0) + 1;
    newUser.id = newId

    const checkUser = trip.partecipanti.find(item => item.codiceFiscale == newUser.codiceFiscale)
    console.log(checkUser);
    if (checkUser) {
      setNewUser({
        id: null,
        nome: "",
        cognome: "",
        email: "",
        telefono: "",
        codiceFiscale: "",
        contattoEmergenza: {
          nome: "",
          telefono: "",
          relazione: ""
        }
      })
      return setMessage({
        state: 'error',
        message: ' User already exists'
      })
    }

    //update the array
    const updatedTrips = data.map(trip => {
      if (trip.id === Number(id)) {
        return {
          ...trip,
          partecipanti: [...trip.partecipanti, newUser]
        }
      }
      return trip
    })

    setData(updatedTrips)
    console.log(data);

    setNewUser({
      id: null,
      nome: "",
      cognome: "",
      email: "",
      telefono: "",
      codiceFiscale: "",
      contattoEmergenza: {
        nome: "",
        telefono: "",
        relazione: ""
      }
    })
    return setMessage({
      state: 'success',
      message: 'User added correctly'
    })
  }

  return (
    <>
      <div className="jumbotron d-flex justify-content-center align-items-center flex-column">
        <img
          src={tripName.immagine}
          style={{ width: "50%", marginTop: "10px", marginBottom: "10px" }}
        />
        <h3>{tripName.nome}</h3>
        <p>
          🗓️ {tripName.dataInizio} - {tripName.dataFine}
        </p>
        <p>📍 Location: {tripName.città}</p>
      </div>

      <div className="container">
        <h4>Ricerca Partecipanti</h4>

        <input
          type="text"
          className="form-control"
          placeholder="Cerca Partecipante"
          value={searchUser}
          onChange={handleSearch}
        />
        <AddUsersForm
          onSubmit={handleSubmit}
          newUser={newUser}
          onChange={handleChange}
          message={message}

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
