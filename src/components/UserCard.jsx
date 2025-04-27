import React from "react";

export default function ParticipantItem({ user }) {
  const {
    id,
    nome,
    cognome,
    email,
    telefono,
    codiceFiscale,
    contattoEmergenza,
  } = user;

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading-${id}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${id}`}
        >
          {nome} {cognome}
        </button>
      </h2>
      <div
        id={`collapse-${id}`}
        className="accordion-collapse collapse"
        data-bs-parent="#usersAccordion"
      >
        <div className="accordion-body">
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Telefono:</strong> {telefono}
          </p>
          <p>
            <strong>Codice Fiscale:</strong> {codiceFiscale}
          </p>

          <div className="accordion mt-3">
            <div className="accordion-item">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-emergency-${id}`}
              >
                Contatto di emergenza
              </button>
              <div
                id={`collapse-emergency-${id}`}
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  <p>
                    <strong>Nome:</strong> {contattoEmergenza.nome}
                  </p>
                  <p>
                    <strong>Telefono:</strong> {contattoEmergenza.telefono}
                  </p>
                  <p>
                    <strong>Relazione:</strong> {contattoEmergenza.relazione}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
