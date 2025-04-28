import { useParams } from "react-router-dom"
import { useTripContext } from "../contexts/TripContext"
import { useState } from "react"

export default function EditUser() {

    const { id } = useParams()
    const { data } = useTripContext()

    const [user, setUser] = useState(findUser())
    const [emergency, setEmergency] = useState(user.contattoEmergenza)

    //find the user by creating a users flat array and comparing user id
    function findUser() {
        const user = data.flatMap(item => item.partecipanti).find(user => user.id == id)
        return user
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