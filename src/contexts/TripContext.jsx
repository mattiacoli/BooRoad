import { createContext, useContext, useState } from "react";
import trips from '../data/data';

const TripContext = createContext();

function TripProvider({ children }) {
    const [data, setData] = useState(trips);
    const [searchQuery, setSearchQuery] = useState(""); // Stato per la ricerca


    function deleteUser(id) {
        console.log('delete');
        let deletedUser = {};

        const updatedData = data.map(item => {
            return {
                ...item,
                partecipanti: item.partecipanti.filter(user => {
                    if (user.id !== id) {
                        return user
                    } else {
                        deletedUser = user
                    }
                })
            }
        })
        console.log(`user deleted: ${deletedUser} `);
        setData(updatedData)
    }


    function deleteTrip(id) {
        console.log('delete');
        let deletedTrip = {};

        const updatedData = data.filter(item => item.id !== id)
        setData(updatedData)
    }

    return (

        <TripContext.Provider value={{ data, setData, deleteTrip, deleteUser, searchQuery, setSearchQuery }}>
            {children}
        </TripContext.Provider>
    );
}

function useTripContext() {
    return useContext(TripContext);
}

export { TripProvider, useTripContext };