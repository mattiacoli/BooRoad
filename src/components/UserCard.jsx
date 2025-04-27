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
      ></div>
    </div>
  );
}
