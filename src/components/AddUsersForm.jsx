export default function AddUsersForm() {
    return (
        <>
            <h1>form per aggiungere partecipanti al viaggio</h1>
            <form action="">
                <input className="form-control" name="username" type="text" />
                <input className="form-control" name="lastname" type="text" />
                <input className="form-control" name="email" type="text" />
                <input className="form-control" name="phone" type="text" />
                <input className="form-control" name="cf" type="text" />
                <button>inserisci partecipanti</button>
                <form action="">
                    <input className="form-control" name="emergency_name" type="text" />
                    <input className="form-control" name="emergency_phone" type="text" />
                    <input className="form-control" name="relationship" type="text" />
                    <button>inserisci contatto di emergenza</button>
                </form>
            </form>
        </>
    )
}