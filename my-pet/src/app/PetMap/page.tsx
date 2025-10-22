import React from 'react'; 
import { useRouter } from 'next/navigation'; // Hook para redirecionamento
import MapComponent from '@/componentes/Mapa'; // O componente do mapa que vamos criar

const MapaPage: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  // 1. Mostrar carregando enquanto verifica a autenticação
  if (isLoading) {
    return <div style={{ padding: '50px', textAlign: 'center' }}>Verificando acesso...</div>;
  }

  // 2. Redirecionar se NÃO estiver autenticado
  if (!isAuthenticated) {
    // Redireciona o usuário para a página de login
    router.push('/login'); 
    return null; // Não renderiza nada enquanto o redirecionamento ocorre
  }

  // 3. Renderizar o Mapa (Conteúdo da página protegida)
  return (
    <div className="mapa-page-container">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 5%', backgroundColor: '#f9f9f9' }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>MyPetZone Localizador</h1>
        <div className="search-bar">
          {/* Aba de Pesquisa */}
          <input type="text" placeholder="Buscar localidade ou pet..." style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
          <button style={{ padding: '8px 15px', marginLeft: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}>Buscar</button>
        </div>
      </header>
      
      {/* Componente do Mapa que será criado no próximo passo */}
      <div style={{ height: '80vh', borderTop: '1px solid #ccc' }}>
        <MapComponent />
      </div>
    </div>
  );
};

export default MapaPage;

function useAuth(): { isAuthenticated: any; isLoading: any; } {
    throw new Error('Function not implemented.');
}
