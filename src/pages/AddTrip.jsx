import { useEffect, useState } from "react"
import { useTripContext } from "../contexts/TripContext"

export default function AddTrip() {

  const { data, setData } = useTripContext()
  console.log(data);
  let newId = 0;

  const [newTrip, setNewTrip] = useState({
    id: null,
    immagine: "",
    nome: "",
    città: "",
    dataInizio: "",
    dataFine: "",
    partecipanti: []
  })

  const [message, setMessage] = useState('')


  function handleChange(key, value) {

    setNewTrip({
      ...newTrip,
      [key]: value
    })
  }

  function handleSubmit() {
    newId = data.reduce((max, item) => (item.id > max ? item.id : max), 0) + 1;
    newTrip.id = newId

    const checkTrip = data.find(item => item.nome == newTrip.nome)
    console.log(checkTrip);
    if (checkTrip) {
      setNewTrip({
        id: null,
        immagine: "",
        nome: "",
        città: "",
        dataInizio: "",
        dataFine: "",
        partecipanti: []
      })
      return setMessage({
        state: 'error',
        message: 'Trip already exists'
      })
    }

    console.log('submit');
    console.log(newTrip);
    setData([...data, newTrip])
    console.log(data);
    setNewTrip({
      id: null,
      immagine: "",
      nome: "",
      città: "",
      dataInizio: "",
      dataFine: "",
      partecipanti: []
    })
    setMessage({
      state: 'success',
      message: 'Trip added correctly'
    })
  }

  return (
    <>
      <div className="container">
        <h1 className="my-4">Aggiungi nuovo viaggio</h1>

        <form onSubmit={(e) => { e.preventDefault(); handleSubmit() }} className="form-control p-4" action="">



          <label htmlFor="nome mb-2"> Nome Viaggio</label>
          <input
            className="form-control mb-3"
            name="nome"
            type="text"
            value={newTrip.nome}
            onChange={(e) => handleChange(e.target.name, e.target.value)} required />


          <label htmlFor="citta mb-2">Destinazione</label>
          <input className="form-control mb-3"
            name="città"
            type="text"
            value={newTrip.città}
            onChange={(e) => handleChange(e.target.name, e.target.value)} required />

          <label htmlFor="immagine mb-2"> Carica immagine</label>
          <input
            className="form-control mb-3"
            name="immagine"
            type="text"
            value={newTrip.immagine}
            onChange={(e) => handleChange(e.target.name, e.target.value)} required />

          <div className="row row-cols-2">
            <div className="col">
              <label htmlFor="dataInizio">Dal:</label>
              <input
                className="form-control mb-3"
                name="dataInizio"
                type="date"
                value={newTrip.dataInizio}
                onChange={(e) => handleChange(e.target.name, e.target.value)} required />
            </div>

            <div className="col">
              <label htmlFor="dataFine">Al:</label>
              <input className="form-control mb-3"
                name="dataFine"
                type="date"
                value={newTrip.dataFine} onChange={(e) => handleChange(e.target.name, e.target.value)} required />
            </div>
          </div>



          <button className="btn my-3">Aggiungi viaggio</button>

          <div className={message.state == 'success' ? 'text-success' : 'text-danger'}>
            <span>{message.state}</span>
            <span>{message.message}</span>
          </div>

        </form >
      </div >

    </>
  )
}