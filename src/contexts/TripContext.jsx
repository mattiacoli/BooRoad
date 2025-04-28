import { createContext, useContext, useState, useEffect } from "react";
import trips from '../data/data'

const TripContext = createContext()

function TripProvider({ children }) {

    const [data, setData] = useState(trips)
    console.log(data);


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

    return (
        <TripContext.Provider value={{ data, setData, deleteUser }}>
            {children}
        </TripContext.Provider>
    )
}

function useTripContext() {
    const context = useContext(TripContext)
    return context
}

export { TripProvider, useTripContext }