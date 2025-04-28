import { useParams } from "react-router-dom"
import { useTripContext } from "../contexts/TripContext"
import { useState } from "react"
import UserListUi from "../components/dumb/UserList.ui"
import { useNavigate } from "react-router-dom"
import ChangeCompanionsUi from "../components/dumb/ChangeCompanions.ui"

export default function EditTrip() {

    const { data, deleteUser, searchQuery, setData } = useTripContext()

    const { id } = useParams()

    const [message, setMessage] = useState({
        state: '',
        message: ''
    })

    //destrutturare le varie tabelle dal trip
    const [currentTrip, setCurrentTrip] = useState(data.find(item => item.id == id))
    const [currentUsers, setCurrentUsers] = useState(data.find(item => item.id == id).partecipanti)
    const [currentCompanions, setCurrentCompanions] = useState(data.find(item => item.id == id).accompagnatori)

    //search filter
    const [sortDirection, setSortDirection] = useState("asc");

    const navigate = useNavigate()

    function handleSort() {
        setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    }

    const filteredUsers = currentUsers
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

    //onchange logic
    function handleChangeTrip(key, value) {

        setCurrentTrip({
            ...currentTrip,
            [key]: value
        })
    }

    //sull'onsubmit ricreare l'array e pusharlo
    function handleSubmit() {
        console.log('submit');

        const tripToPush = {
            ...currentTrip,
        }

        const updatedData = data.map(trip => trip.id == currentTrip.id ? tripToPush : trip)

        setData(updatedData)

        setMessage({
            state: 'success',
            message: 'Trip Update Correctly'
        })
        console.log(data);
    }

    return (
        <>
            <div className="container">
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit() }} action="">
                    <div className="row row-cols-1">
                        <div className="col edit_info">
                            <h1>Modifica i dettagli del viaggio: </h1>
                            <label className="edit_label" htmlFor="">Nome</label>
                            <input
                                onChange={(e) => handleChangeTrip(e.target.name, e.target.value)}
                                value={currentTrip.nome}
                                name="nome"
                                className="edit_input"
                                placeholder="nome"
                                type="text"
                            />

                            <label className="edit_label" htmlFor="">Citta</label>
                            <input
                                onChange={(e) => handleChangeTrip(e.target.name, e.target.value)}
                                value={currentTrip.città}
                                name="città"
                                className="edit_input"
                                placeholder="citta"
                                type="text"
                            />

                            <label className="edit_label" htmlFor="">Data Inizio</label>
                            <input
                                onChange={(e) => handleChangeTrip(e.target.name, e.target.value)}
                                value={currentTrip.dataInizio}
                                name="dataInizio"
                                className="edit_input"
                                placeholder="data inizio"
                                type="date"
                            />

                            <label className="edit_label" htmlFor="">Data Fine</label>
                            <input
                                onChange={(e) => handleChangeTrip(e.target.name, e.target.value)}
                                value={currentTrip.dataFine}
                                name="dataFine"
                                className="edit_input"
                                placeholder="data fine"
                                type="date"
                            />

                            <label className="edit_label" htmlFor="">Immagine</label>
                            <input
                                onChange={(e) => handleChangeTrip(e.target.name, e.target.value)}
                                value={currentTrip.immagine}
                                name="immagine"
                                className="edit_input"
                                placeholder="immagine"
                                type="text"
                            />
                        </div>
                    </div>
                    {message.state == 'success' ? (
                        <>
                            <div className="text-success mt-4">
                                <span htmlFor="">{message.state}: </span>
                                <span>{message.message}</span>
                            </div>

                        </>
                    ) : (<></>)}
                    <button type="submit" className="btn my-4">Salva Modifiche</button>
                </form>

                <div className="col edit_info">
                    <h1>Modifica i dettagli degli accompagnatori:</h1>
                    <div className="row row-cols-2">
                        {
                            currentCompanions.map(item => (
                                <>
                                    <ChangeCompanionsUi
                                        id={id}
                                        key={item.id}
                                        item={item}
                                    />
                                </>
                            ))
                        }
                    </div>
                </div>
                <div className="col edit_info">
                    <h1>Modifica i partecipanti:</h1>
                    <UserListUi
                        userList={filteredUsers}
                        handleSort={handleSort}
                        sortDirection={sortDirection}
                        deleteUser={deleteUser}
                        navigate={navigate}
                    />
                </div>
            </div>


        </>
    )
}