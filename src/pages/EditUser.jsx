import { useParams } from "react-router-dom"
import { useTripContext } from "../contexts/TripContext"
import { useState } from "react"

export default function EditUser() {

    const { id } = useParams()
    const { data } = useTripContext()

    const [user, setUser] = useState(findUser())

    //find the user by creating a users flat array and comparing user id
    function findUser() {
        const user = data.flatMap(item => item.partecipanti).find(user => user.id == id)
        console.log(user);
        return user
    }

    function handleChange(key, value) {
        setUser({
            ...user,
            [key]: value
        })

    }


    return (
        <>
            <div className="container">
                <div className="user_info">

                    <form action="">
                        <div className="user_info row row-cols-2 mt-4">
                            <div className="col">
                                <h1> Info Utente: </h1>
                                <label className="edit_user_label" htmlFor="">Nome:</label>
                                <input className="edit_user_input" type="text" placeholder="Name" value={user.nome} />

                                <label className="edit_user_label" htmlFor="">Cognome:</label>
                                <input className="edit_user_input" type="text" placeholder="Name" value={user.cognome} />

                                <label className="edit_user_label">Email:</label>
                                <input className="edit_user_input" type="email" placeholder="Email" value={user.email} name="email" />

                                <label className="edit_user_label">Telefono:</label>
                                <input className="edit_user_input" type="text" placeholder="Telefono" value={user.telefono} name="telefono" />


                                <label className="edit_user_label">Codice Fiscale:</label>
                                <input className="edit_user_input" type="text" placeholder="C.F." value={user.codiceFiscale} />
                                <h4>inserire viaggi a cui l'utente e iscritto</h4>
                            </div>
                            <div className="col emergency_contact">
                                <h1>Contatto di emergenza:</h1>
                                <label className="edit_user_label">Nome:</label>
                                <input className="edit_user_input" type="text" placeholder="Nome" value={user.contattoEmergenza.nome} />


                                <label className="edit_user_label">Telefono:</label>
                                <input className="edit_user_input" type="text" placeholder="Telefono" value={user.contattoEmergenza.telefono} />


                                <label className="edit_user_label">Relazione:</label>
                                <input className="edit_user_input" type="text" placeholder="Relazione" value={user.contattoEmergenza.relazione} />
                            </div>
                        </div>
                        <button className="btn mt-4">Salva Modifiche</button>
                    </form>
                </div>
            </div>
        </>
    )
}