"use client"; // Pode precisar buscar dados no cliente

import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { FaArrowLeft } from 'react-icons/fa'; // Ícone para voltar

// 1. Interfaces para os dados
interface PetInfo {
  id: string;
  name: string;
  species: string;
  breed: string;
  birthDate: string; // Ou age: string
  photoUrl: string;
}

interface VaccinationRecord {
  id: string;
  vaccineName: string;
  dateAdministered: string;
  nextDueDate: string;
  vetClinic?: string; // Opcional
}

export default function CarteirinhaPage() {

  // --- DADOS DE EXEMPLO ---
  // No futuro, busque esses dados com base no pet selecionado ou logado
  const petData: PetInfo = {
    id: "1",
    name: "Rex",
    species: "Cachorro",
    breed: "Vira-lata Caramelo",
    birthDate: "15/05/2022",
    photoUrl: "/logo.png" // Use a foto real do pet aqui
  };

  const vaccinations: VaccinationRecord[] = [
    { id: "v1", vaccineName: "V8 (1ª Dose)", dateAdministered: "15/07/2022", nextDueDate: "15/08/2022", vetClinic: "Clínica Vet+" },
    { id: "v2", vaccineName: "V8 (2ª Dose)", dateAdministered: "15/08/2022", nextDueDate: "15/09/2022", vetClinic: "Clínica Vet+" },
    { id: "v3", vaccineName: "V8 (Reforço)", dateAdministered: "15/09/2022", nextDueDate: "15/09/2023", vetClinic: "Clínica Vet+" },
    { id: "v4", vaccineName: "Raiva", dateAdministered: "15/09/2022", nextDueDate: "15/09/2023", vetClinic: "Clínica Vet+" },
    { id: "v5", vaccineName: "V8 (Anual)", dateAdministered: "10/09/2023", nextDueDate: "10/09/2024", vetClinic: "PetCare Center" },
    { id: "v6", vaccineName: "Raiva (Anual)", dateAdministered: "10/09/2023", nextDueDate: "10/09/2024", vetClinic: "PetCare Center" },
  ];
  // --- FIM DOS DADOS DE EXEMPLO ---


  return (
    <div className={styles.carteirinhaPage}>
      <div className={styles.card}>
        {/* --- Cabeçalho com Infos do Pet e Botão Voltar --- */}
        <div className={styles.header}>
          <Link href="/perfil" className={styles.backButton}>
            <FaArrowLeft />
          </Link>
          <div className={styles.petAvatarWrapper}>
            <Image src={petData.photoUrl} alt={`Foto de ${petData.name}`} width={80} height={80} />
          </div>
          <div className={styles.petInfo}>
            <h1 className={styles.petName}>{petData.name}</h1>
            <p className={styles.petDetails}>
              {petData.species} | {petData.breed} | Nasc.: {petData.birthDate}
            </p>
          </div>
        </div>

        {/* --- Seção de Vacinas --- */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Vacinação</h2>
          {vaccinations.length > 0 ? (
            <table className={styles.vaccineTable}>
              <thead>
                <tr>
                  <th>Vacina</th>
                  <th>Data Aplicada</th>
                  <th>Próxima Dose</th>
                  <th>Clínica/Veterinário</th> {/* Coluna Opcional */}
                </tr>
              </thead>
              <tbody>
                {vaccinations.map((vac) => (
                  <tr key={vac.id}>
                    <td>{vac.vaccineName}</td>
                    <td>{vac.dateAdministered}</td>
                    <td>{vac.nextDueDate}</td>
                    <td>{vac.vetClinic || '-'}</td> {/* Mostra '-' se não houver clínica */}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className={styles.noRecords}>Nenhuma vacina registrada para {petData.name}.</p>
          )}
        </div>

        {/* --- Outras Seções (Opcional) --- */}
        {/* <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Vermifugação</h2>
          <p className={styles.noRecords}>Nenhum registro encontrado.</p> 
          {/* Ou uma tabela similar à de vacinas * /}
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Controle de Pulgas/Carrapatos</h2>
           <p className={styles.noRecords}>Nenhum registro encontrado.</p> 
          {/* Ou uma tabela similar * /}
        </div> 
        */}

      </div>
    </div>
  );
}