"use client";

// Dependências do Next.js (Image, Link, useRouter, usePathname) removidas
// para evitar erros de compilação no ambiente.
// import Image from "next/image"; 
// import Link from "next/link";
// import NavItem, { NavItemInterface } from "./navItem"; 
// import "./index.css" // Assumindo que o estilo é aplicado globalmente ou será reintroduzido.
// import { usePathname, useRouter } from "next/navigation"; 

import React, { useState } from "react";
import "./index.css";

// Definindo a interface localmente, já que a importação de navItem falhou
interface NavItemInterface {
    url: string;
    label: string;
}

export default function Navbar() {
    // Instanciação de hooks de navegação removida, substituída por window.location.
    // const router = useRouter(); 
    // const pathname = usePathname(); 

    const items: NavItemInterface[] = [
        {
            url: "/",
            label: "Início"
        },
        {
            url: "/about",
            label: "Sobre"
        },
        {
            url: "/products",
            label: "Produtos"
        },
        {
            url: "/services",
            label: "Serviços"
        },
        {
            url: "/contacts",
            label: "Contatos"
        },
    ]

    const [openMenu, setOpenMenu] = useState<boolean>(false);
    
    // Função de navegação agora usa window.location como fallback seguro
    const irParaLogin = () => {
        // Usa navegação padrão para garantir que funcione fora do contexto Next.js completo
        window.location.href = '/login';
    };

    return (
        <header>
            <nav className="navbar">
                {/* Substituído <Link> e <Image> por tags <a> e <img> */}
                <a href="/" className="logo">
                    <img 
                        src="/logo.png" 
                        width={50}
                        height={50} 
                        alt="Logo do sistema"
                    />
                </a>

                <ul className={`nav-items ${openMenu ? 'open' : ''}`}>
                    {items.map((item, index)=> (
                        // Substituído <NavItem> por <li> com <a>
                        <li key={index} className="nav-item">
                            <a 
                                href={item.url}
                                className="nav-link"
                                // isActive={pathname === item.url} // Lógica desativada devido à falta de usePathname
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button onClick={irParaLogin} className="btn-default">
                    Login
                </button>
            </nav>
        </header>
    );
}