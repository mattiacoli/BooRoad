import { useState } from "react"

export default function AddTrip() {

    const [newTrip, setNewTrip] = useState({
        id: 1,
        immagine: "",
        nome: "",
        città: "",
        dataInizio: "",
        dataFine: "",
        partecipanti: []
    })


    function handleChange(key, value) {
        setNewTrip({
            ...newTrip,
            [key]: value
        })
    }

    function handleSubmit() {
        console.log('submit');
        console.log(newTrip);
    }

    return (
        <>
            <div className="container">
                <h1>aggiungi un viaggio</h1>
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit() }} className="form-control" action="">
                    <input className="form-control" name="immagine" type="text" value={newTrip.immagine} onChange={(e) => handleChange(e.target.name, e.target.value)} />
                    <input className="form-control" name="nome" type="text" value={newTrip.nome} onChange={(e) => handleChange(e.target.name, e.target.value)} />
                    <input className="form-control" name="città" type="text" value={newTrip.città} onChange={(e) => handleChange(e.target.name, e.target.value)} />
                    <input className="form-control" name="dataInizio" type="date" value={newTrip.dataInizio} onChange={(e) => handleChange(e.target.name, e.target.value)} />
                    <input className="form-control" name="dataFine" type="date" value={newTrip.dataFine} onChange={(e) => handleChange(e.target.name, e.target.value)} />

                    <button className="btn btn-primary">Aggiungi viaggio</button>
                </form>
            </div>

        </>
    )
}