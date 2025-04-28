import UsersContacts from "../components/UsersContacts"


export default function Dashboard() {
  return (
    <>
      <div className="container py-5 mb-4 bg-lighter rounded-3">
        <h1 className="display-5 fw-bold">Benvenuto nella Dashboard</h1>
        <p className="col-md-8 fs-4">Qui puoi gestire gli utenti e i viaggi</p>
      </div>


      {/* add trip table */}


      <UsersContacts />




    </>

  )
}