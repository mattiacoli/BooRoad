import { useParams } from "react-router-dom"
import { useTripContext } from "../contexts/TripContext"
import { useState } from "react"

export default function EditUser() {

    const { id } = useParams()
    const { data, setData } = useTripContext()

    const [user, setUser] = useState(findUser())
    const [emergency, setEmergency] = useState(findEmergency())

    //find the user by creating a users flat array and comparing user id
    function findUser() {
        const usersList = data.flatMap(item => item.partecipanti)
        const userFound = {
            id: usersList.find(user => user.id == id).id,
            nome: usersList.find(user => user.id == id).nome,
            cognome: usersList.find(user => user.id == id).cognome,
            codiceFiscale: usersList.find(user => user.id == id).codiceFiscale,
            email: usersList.find(user => user.id == id).email,
            telefono: usersList.find(user => user.id == id).telefono,
        }
        return userFound
    }

    function findEmergency() {
        const usersList = data.flatMap(item => item.partecipanti)
        console.log(usersList);

        const emergencyFound = usersList.find(user => user.id == id).contattoEmergenza;

        console.log(emergencyFound);

        return emergencyFound
    }

    function findTripByUserId(userId) {
        const trip = data.find(trip =>
            trip.partecipanti.some(user => user.id == userId)
        );
        return trip;
    }

    console.log(user);
    console.log(emergency);



    function handleChangeUser(key, value) {
        setUser({
            ...user,
            [key]: value
        })

    }

    function handleChangeEmergency(key, value) {
        setEmergency({
            ...emergency,
            [key]: value
        })

    }

    function handleSubmit() {
        console.log('submit');



        const userToPush = {
            ...user,
            contattoEmergenza: emergency
        }

        const userTrip = findTripByUserId(userToPush.id)

        if (!userTrip) {
            console.log('nessun viaggio trovato per l"utente');
            return
        }

        const updatedTrip = {
            ...userTrip,
            partecipanti: userTrip.partecipanti.map(user => user.id == userToPush.id ? userToPush : user)
        }

        const updatedData = data.map(trip => trip.id == updatedTrip.id ? updatedTrip : trip)

        setData(updatedData);

        console.log(userToPush);

        console.log(data);

    }


    return (
        <>
            <div className="container">
                <div className="user_info">

                    <form onSubmit={(e) => { e.preventDefault(); handleSubmit() }} action="">
                        <div className="user_info row row-cols-2 mt-4">
                            <div className="col">
                                <h1> Info Utente: </h1>
                                <label className="edit_user_label" htmlFor="">Nome:</label>
                                <input
                                    onChange={(e) => handleChangeUser(e.target.name, e.target.value)}
                                    value={user.nome}
                                    name="nome"
                                    className="edit_user_input"
                                    type="text"
                                    placeholder="Nome"
                                />

                                <label className="edit_user_label" htmlFor="">Cognome:</label>
                                <input
                                    onChange={(e) => handleChangeUser(e.target.name, e.target.value)}
                                    value={user.cognome}
                                    name="cognome"
                                    className="edit_user_input"
                                    type="text"
                                    placeholder="Cognome"
                                />

                                <label className="edit_user_label">Email:</label>
                                <input
                                    onChange={(e) => handleChangeUser(e.target.name, e.target.value)}
                                    value={user.email}
                                    name="email"
                                    className="edit_user_input"
                                    type="email"
                                    placeholder="Email"
                                />

                                <label className="edit_user_label">Telefono:</label>
                                <input
                                    onChange={(e) => handleChangeUser(e.target.name, e.target.value)}
                                    value={user.telefono}
                                    name="telefono"
                                    className="edit_user_input"
                                    type="text"
                                    placeholder="Telefono"
                                />


                                <label className="edit_user_label">Codice Fiscale:</label>
                                <input
                                    onChange={(e) => handleChangeUser(e.target.name, e.target.value)}
                                    value={user.codiceFiscale}
                                    name="codiceFiscale"
                                    className="edit_user_input"
                                    type="text"
                                    placeholder="C.F."
                                />
                                <h4>inserire viaggi a cui l'utente e iscritto</h4>
                            </div>
                            <div className="col emergency_contact">
                                <h1>Contatto di emergenza:</h1>
                                <label className="edit_user_label">Nome:</label>
                                <input
                                    onChange={(e) => handleChangeEmergency(e.target.name, e.target.value)}
                                    value={emergency.nome}
                                    name="nome"
                                    className="edit_user_input"
                                    type="text"
                                    placeholder="Nome"
                                />


                                <label className="edit_user_label">Telefono:</label>
                                <input
                                    onChange={(e) => handleChangeEmergency(e.target.name, e.target.value)}
                                    value={emergency.telefono}
                                    name="telefono"
                                    className="edit_user_input"
                                    type="text"
                                    placeholder="Telefono"
                                />


                                <label className="edit_user_label">Relazione:</label>
                                <input
                                    onChange={(e) => handleChangeEmergency(e.target.name, e.target.value)}
                                    value={emergency.relazione}
                                    name="relazione"
                                    className="edit_user_input"
                                    type="text"
                                    placeholder="Relazione"
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn mt-4">Salva Modifiche</button>
                    </form>
                </div>
            </div>
        </>
    )
}