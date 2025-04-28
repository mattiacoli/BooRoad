import CompanionEditCardUi from "../dumb/CompanionEditCard.ui"
import { useState } from "react"

export default function AddCompanion({ tripId, data, setData, message, title, buttonText }) {

    const [companion, setCompanion] = useState({
        nome: '',
        cognome: '',
        email: '',
        telefono: ''

    })

    function handleUpdate(key, value) {
        setCompanion({
            ...companion,
            [key]: value
        })

    }

    function handleSubmit() {
        console.log('submit');

        const currentTrip = data.find(trip => trip.id == tripId)


        const updadtedCompanions = [...currentTrip.accompagnatori, companion]

        const udpatedTrip = {
            ...currentTrip,
            accompagnatori: updadtedCompanions
        }

        const updatedData = data.map(trip => trip.id == tripId ? udpatedTrip : trip)

        setData(updatedData)
    }

    return (
        <>
            <CompanionEditCardUi
                title={title}
                buttonText={buttonText}
                onchange={handleUpdate}
                onsubmit={handleSubmit}
                companion={companion}
                message={message}
                tripId={tripId}
            />
        </>
    )
}