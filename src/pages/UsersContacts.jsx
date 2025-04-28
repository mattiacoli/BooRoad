import { useTripContext } from "../contexts/TripContext"
import { useState } from "react"

export default function UsersContacts() {

  const { data } = useTripContext()



  return (
    <h1>Elenco Utenti</h1>
  )
}