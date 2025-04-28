import { useParams } from "react-router-dom"
import { useTripContext } from "../contexts/TripContext"

export default function EditTrip() {

    const { data } = useTripContext()

    const { id } = useParams()

    const currentTrip = data.find(item => item.id == id)

    return (
        <>
            <h1>{currentTrip.nome}</h1>
        </>
    )
}