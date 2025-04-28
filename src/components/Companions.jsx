export default function Companions({ nome, cognome, email, telefono, id }) {
    return (
        <>
            <div class="accordion">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#coll-${id}`} aria-expanded="true">
                            {nome} {cognome}
                        </button>
                    </h2>
                    <div id={`coll-${id}`} class="accordion-collapse collapse show" data-bs-parent={`#coll-${id}`}>
                        <div class="accordion-body">
                            <ul>
                                <li>
                                    <span>Email:</span>
                                    <p>{email}</p>
                                </li>
                                <li>
                                    <span>Telefono:</span>
                                    <p>{telefono}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}