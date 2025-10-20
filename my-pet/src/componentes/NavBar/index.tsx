"use client";

import Image from "next/image";
import Link from "next/link";
import NavItem, { NavItemInterface } from "./navItem";
import "./index.css"
import { usePathname } from "next/navigation";
import { useState } from "react";
import router from "next/router";

export default function Navbar() {
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

    const pathname = usePathname();

    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const irParaLogin = () => {
    router.push('/login');
  };

    return (
        <header>
            <nav className="navbar">
                <Link href="/" className="logo">
                    <Image 
                        src="/logo.png" 
                        width={50}
                        height={50} 
                        alt="Logo do sistema"
                    />
                </Link>

                <ul className={`nav-items ${openMenu ? 'open' : ''}`}>
                    {items.map((item, index)=> (
                        <NavItem
                            key={index}
                            url={item.url}
                            label={item.label}
                            isActive={pathname === item.url}
                        />
                    ))}
                </ul>

                <button onClick={irParaLogin} className="btn-default">
                         Login
                </button>
            </nav>
        </header>
    );
}