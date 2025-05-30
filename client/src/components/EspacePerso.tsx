import { useState } from "react";
import { useLogin } from "../context/LoginContext";

function EspaceVisiteur() {
  const { mail, code, pemid, userRole, handleLogout } = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  // Simulations de réservations
  const reservations = [
    {
      chambre: "Suite Alsacienne",
      dateDebut: "2024-03-15",
      dateFin: "2024-03-18",
      personnes: 2,
      montant: 280,
      statut: "Confirmée",
    },
    {
      chambre: "Chambre Montagne",
      dateDebut: "2023-12-01",
      dateFin: "2023-12-05",
      personnes: 3,
      montant: 360,
      statut: "Annulée",
    },
    {
      chambre: "Studio Strasbourg",
      dateDebut: "2023-08-10",
      dateFin: "2023-08-12",
      personnes: 1,
      montant: 120,
      statut: "Confirmée",
    },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-[#2c7865]">
        Espace Personnel
      </h1>

      {/* Informations personnelles */}
      <section className="mb-10 bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">
          Informations personnelles
        </h2>
        <p>
          <strong>Email :</strong> {mail}
        </p>
        <p>
          <strong>Rôle :</strong> {userRole}
        </p>
        {pemid && (
          <p>
            <strong>PEMID :</strong> {pemid}
          </p>
        )}
        <div className="flex items-center gap-4 mt-2">
          <p>
            <strong>Mot de passe :</strong>{" "}
            {showPassword ? code : "*".repeat(code.length)}
          </p>
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="text-sm text-blue-600 underline"
            type="button"
          >
            {showPassword ? "Masquer" : "Afficher"}
          </button>
        </div>
        <div className="text-center">
          <button
            className="mt-4 bg-[#a84448] hover:bg-[#922f33] text-white px-4 py-2 rounded-lg"
            type="button"
          >
            Modifier mes informations
          </button>
        </div>
      </section>

      {/* Historique des réservations */}
      <section className="mb-10 bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Réservations précédentes</h2>
        {reservations.map((res) => (
          <div
            key={`${res.chambre}-${res.dateDebut}-${res.dateFin}`}
            className="border-b py-3"
          >
            <p>
              <strong>Chambre :</strong> {res.chambre}
            </p>
            <p>
              <strong>Dates :</strong> {res.dateDebut} au {res.dateFin}
            </p>
            <p>
              <strong>Personnes :</strong> {res.personnes}
            </p>
            <p>
              <strong>Montant :</strong> {res.montant} €
            </p>
            <p>
              <strong>Statut :</strong> {res.statut}
            </p>
          </div>
        ))}
      </section>

      {/* Déconnexion */}
      <div className="mt-8 text-center">
        <button
          onClick={handleLogout}
          className="bg-[#a84448] hover:bg-[#922f33] text-white px-4 py-2 rounded-lg "
          type="button"
        >
          Se déconnecter
        </button>
      </div>
    </div>
  );
}

export default EspaceVisiteur;
