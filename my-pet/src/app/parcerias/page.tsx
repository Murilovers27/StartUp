import React from 'react';

// Componente simples de Card de Plano (também sem CSS inline)
interface PlanCardProps {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    price: string;
    isFeatured?: boolean; 
}

const PlanCard: React.FC<PlanCardProps> = ({ title, subtitle, description, features, price, isFeatured = false }) => {
    // As classes 'plan-card--featured' serão usadas para aplicar os estilos premium via CSS
    const cardClassName = `plan-card ${isFeatured ? 'plan-card--featured' : ''}`;
    const buttonClassName = `plan-button ${isFeatured ? 'plan-button--featured' : ''}`;

    return (
        <div className={cardClassName}>
            <h2 className="plan-title">{title}</h2>
            <p className="plan-subtitle">{subtitle}</p>
            <h3 className="plan-price">{price}</h3>
            
            <p className="plan-description">{description}</p>
            
            <ul className="plan-features-list">
                {features.map((feature, index) => (
                    <li key={index} className="plan-feature-item">
                        <span role="img" aria-label="check">✔️</span> {feature}
                    </li>
                ))}
            </ul>

            <button className={buttonClassName} onClick={() => console.log(`Inscrição no plano ${title}!`)}>
                Escolher Plano
            </button>
        </div>
    );
};


// Dados de exemplo para a seção de logotipos
const partnerLogos = [
    { name: "PetShop Mais", logoUrl: "/assets/partners/petshop-mais.png" },
    { name: "Clínica Veterinária Central", logoUrl: "/assets/partners/vet-central.png" },
    { name: "ONG Amigo Fiel", logoUrl: "/assets/partners/ong-fiel.png" },
    { name: "Rações Top", logoUrl: "/assets/partners/racoes-top.png" },
];


const ParceriasPage: React.FC = () => {
    return (
        <div className="parcerias-page-container">
            
            {/* Título Principal */}
            <header className="parcerias-header">
                <h1>Nossos Parceiros de Confiança</h1>
                <p>Construindo um futuro melhor para os pets ao lado das melhores empresas e organizações.</p>
            </header>
            
            {/* 1. Seção de Logotipos dos Parceiros */}
            <section className="current-partners-section">
                <h2 className="section-title">Empresas e Abrigos</h2>
                
                <div className="logos-grid">
                    {partnerLogos.map((partner, index) => (
                        <div key={index} className="partner-logo-item">
                            {/* No seu CSS: aplique border, height, width e alinhamento à classe 'partner-logo-item' */}
                            <span className="partner-name-placeholder">{partner.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 2. Seção de Chamada para Novos Parceiros (CTA) */}
            <section className="join-us-cta-section">
                <h2 className="cta-title">Quer Fazer Parte da PetZone?</h2>
                <p className="cta-description">
                    Se você é um abrigo, veterinário ou empresa de produtos para pets, junte-se à nossa missão!
                </p>
                
                <button 
                    onClick={() => console.log('Redirecionar para formulário de parceria')}
                    className="cta-button"
                >
                    Saiba Como Ser Nosso Parceiro
                </button>
            </section>
            
        </div>
    );
};

export default ParceriasPage;