import { createContext, useContext, useState } from "react";
import trips from '../data/data';

const TripContext = createContext();

function TripProvider({ children }) {
    const [data, setData] = useState(trips);
    const [searchQuery, setSearchQuery] = useState(""); // Stato per la ricerca

    return (
        <TripContext.Provider value={{ data, setData, searchQuery, setSearchQuery }}>
            {children}
        </TripContext.Provider>
    );
}

function useTripContext() {
    return useContext(TripContext);
}

export { TripProvider, useTripContext };