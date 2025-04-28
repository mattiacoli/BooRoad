import { useState, useEffect } from "react"
import { useTripContext } from "../../contexts/TripContext"

export default function ChangeCompanionsUi({ item, id }) {

    const { data, setData } = useTripContext()

    const [companion, setCompanion] = useState(item)
    const [message, setmessage] = useState({
        state: '',
        message: ''
    })

    function handleChangeCompanions(key, value) {
        setCompanion({
            ...companion,
            [key]: value
        })
    }

    function handleSubmit() {

        //rimappare l'array generale con i nuovi dati
        const currentTrip = data.find(trip => trip.id == id)
        const updatedCompanions = currentTrip.accompagnatori.map(item => item.id == companion.id ? companion : item)

        const updatedTrip = {
            ...currentTrip,
            accompagnatori: updatedCompanions
        }

        const updatedData = data.map(trip => trip.id == updatedTrip.id ? updatedTrip : trip)
        //settare l'array con il setter

        setData(updatedData)

        setmessage({
            state: 'success',
            message: 'Companion updated correctly'
        })

    }

    useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <>
            <div className="col">
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit() }} action="">
                    <div className="card">
                        <div className="card-header">
                            <h3>Info accompagnatore:</h3>
                            <div className="card-body">
                                <label htmlFor="" className="edit_label">Nome:</label>
                                <input
                                    onChange={(e) => handleChangeCompanions(e.target.name, e.target.value)}
                                    value={companion.nome}
                                    name="nome"
                                    className="edit_input"
                                    placeholder="Nome"
                                    type="text"
                                />

                                <label htmlFor="" className="edit_label">Cognome:</label>
                                <input
                                    onChange={(e) => handleChangeCompanions(e.target.name, e.target.value)}
                                    value={companion.cognome}
                                    name="cognome"
                                    className="edit_input"
                                    placeholder="Cognome"
                                    type="text"
                                />

                                <label htmlFor="" className="edit_label">Email:</label>
                                <input
                                    onChange={(e) => handleChangeCompanions(e.target.name, e.target.value)}
                                    value={companion.email}
                                    name="email"
                                    className="edit_input"
                                    placeholder="Email"
                                    type="email"
                                />

                                <label htmlFor="" className="edit_label">Telefono:</label>
                                <input
                                    onChange={(e) => handleChangeCompanions(e.target.name, e.target.value)}
                                    value={companion.telefono}
                                    name="telefono"
                                    className="edit_input"
                                    placeholder="Telefono"
                                    type="number"
                                />
                            </div>
                            <div className="output">
                                {
                                    message.state == 'success' ? (
                                        <>
                                            <div className="text-success">
                                                <span>{message.state}: </span>
                                                <span>{message.message}</span>
                                            </div>
                                        </>
                                    ) : (<></>)
                                }
                            </div>
                            <div className="card-footer text-center">
                                <button type="submit" className="btn my-4">Salva Modifiche</button>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </>
    )
}