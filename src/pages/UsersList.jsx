import { useParams } from "react-router-dom";
import gite from '../data/data';

export default function User() {
    const { id } = useParams();
    const gita = gite.find(gita => gita.id === Number(id));

    return (
        <>
            {gita ? (
                <div>
                    <h1>{gita.nome}</h1>
                    <h2>Partecipanti:</h2>
                    <ul>
                        {gita.partecipanti.map(partecipante => (
                            <li key={partecipante.id}>
                                <p>Nome: {partecipante.nome} {partecipante.cognome}</p>
                                <p>Email: {partecipante.email}</p>
                                <p>Telefono: {partecipante.telefono}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Gita non trovata</p>
            )}
        </>
    );
}