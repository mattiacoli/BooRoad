import data from '../data/data.js'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import User from '../components/User.jsx'

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

    const [searchUser, setSearchUser] = useState("")
    const [UserList, setUserList] = useState(tripName.partecipanti)

    const handleSearch = (e) => {
        const searchValue = e.target.value.toLowerCase()
        setSearchUser(searchValue)

        const filteredUsers = tripName.partecipanti.filter(user => {
            return user.nome.toLowerCase().includes(searchValue) || user.cognome.toLowerCase().includes(searchValue)
        })

        setUserList(filteredUsers)
    }

    return (

        <>

            <div className="jumbotron d-flex justify-content-center align-items-center flex-column">

                <img src={tripName.immagine} style={{ width: "50%", marginTop: "10px", marginBottom: "10px" }} />
                <h3>{tripName.nome}</h3>
                <p>🗓️ {tripName.dataInizio} - {tripName.dataFine}</p>
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

                <ul className="list-group mt-3">
                    {UserList.map(user => (
                        <User
                            key={user.id}
                            user={user}
                        />
                    ))}
                </ul>
            </div>

        </>


    )
}