import { useState } from "react"

export default function ChangeCompanionsUi({ data }) {

    const [companion, setCompanion] = useState(data)

    function handleChangeCompanions(key, value) {
        setCompanion({
            ...companion,
            [key]: value
        })

    }

    return (
        <>
            <div className="col">
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
                            onChange={(e) => onchange(e.target.name, e.target.value)}
                            value={companion.cognome}
                            name="cognome"
                            className="edit_input"
                            placeholder="Cognome"
                            type="text"
                        />

                        <label htmlFor="" className="edit_label">Email:</label>
                        <input
                            onChange={(e) => onchange(e.target.name, e.target.value)}
                            value={companion.email}
                            name="email"
                            className="edit_input"
                            placeholder="Email"
                            type="email"
                        />

                        <label htmlFor="" className="edit_label">Telefono:</label>
                        <input
                            onChange={(e) => onchange(e.target.name, e.target.value)}
                            value={companion.telefono}
                            name="telefono"
                            className="edit_input"
                            placeholder="Telefono"
                            type="number"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}