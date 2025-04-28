import { createContext, useContext, useState, useEffect } from "react";
import trips from '../data/data'

const TripContext = createContext()

function TripProvider({ children }) {

    const [data, setData] = useState(trips)
    console.log(data);

    return (
        <TripContext.Provider value={{ data, setData }}>
            {children}
        </TripContext.Provider>
    )
}

function useTripContext() {
    const context = useContext(TripContext)
    return context
}

export { TripProvider, useTripContext }