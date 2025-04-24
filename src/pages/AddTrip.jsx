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
        <h1>aggiungi un viaggio</h1>
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit() }} className="form-control" action="">
          <input className="form-control" name="immagine" type="text" value={newTrip.immagine} onChange={(e) => handleChange(e.target.name, e.target.value)} required />
          <input className="form-control" name="nome" type="text" value={newTrip.nome} onChange={(e) => handleChange(e.target.name, e.target.value)} required />
          <input className="form-control" name="città" type="text" value={newTrip.città} onChange={(e) => handleChange(e.target.name, e.target.value)} required />
          <input className="form-control" name="dataInizio" type="date" value={newTrip.dataInizio} onChange={(e) => handleChange(e.target.name, e.target.value)} required />
          <input className="form-control" name="dataFine" type="date" value={newTrip.dataFine} onChange={(e) => handleChange(e.target.name, e.target.value)} required />

          <button className="btn btn-primary">Aggiungi viaggio</button>
          <div className={message.state == 'success' ? 'text-success' : 'text-danger'}>
            <span>{message.state}</span>
            <span>{message.message}</span>
          </div>

        </form >
      </div >

    </>
  )
}