"use client";

import { useState } from "react";
import { usePathname, useRouter } from 'next/navigation';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faUser, faSignOutAlt, faTags, faGlobeAmericas, faCalendar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import logo from "../assets/logo.png";
import "../styles/global.css";
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], weight: ['500', '700'] });

export default function Layout({ children }) {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const isActive = (href) => pathname === href;

    const handleLinkClick = () => {
        if (window.innerWidth < 768) {
            setSidebarOpen(false);
        }
    };

    return (
        <div className={`layout ${inter.className}`}>
            <div className="header">
                <div className="header-left">
                    <Image src={logo} alt="Logo Tornemec" className="logo" />
                    <span className="company-name">
                        COCHABAMBA TURISTICA
                    </span>
                </div>
                <div className="header-right">

                    <div className="logout-container">
                        <FontAwesomeIcon icon={faUser} className="icon" />
                        <span className="user-name"> NOMBRE USUARIO </span>

                    </div>
                    <div className="logout-container">
                        <FontAwesomeIcon icon={faSignOutAlt} className="logout-icon" />
                        <span className="logout-text"> CERRAR SESIÓN </span>
                    </div>
                </div>
            </div>

            <div className="content">
                <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
                    <div className="fixed">
                        <nav>
                            <ul>
                                <li className={`sidebar-item ${isActive("/places") ? "active" : ""}`}>
                                    <Link href="/places" onClick={handleLinkClick}>
                                        <FontAwesomeIcon icon={faGlobeAmericas} className="iconSidebar" />
                                        <span>Lugares</span>
                                    </Link>
                                </li>
                                <li className={`sidebar-item ${isActive("/events") ? "active" : ""}`}>
                                    <Link href="/events" onClick={handleLinkClick}>
                                        <FontAwesomeIcon icon={faCalendar} className="iconSidebar" />
                                        <span>Eventos</span>
                                    </Link>
                                </li>
                                <li className={`sidebar-item ${isActive("/provinces") ? "active" : ""}`}>
                                    <Link href="/provinces" onClick={handleLinkClick}>
                                        <FontAwesomeIcon icon={faMapPin} className="iconSidebar" />
                                        <span>Provincias</span>
                                    </Link>
                                </li>
                                <li className={`sidebar-item ${isActive("/categories") ? "active" : ""}`}>
                                    <Link href="/categories" onClick={handleLinkClick}>
                                        <FontAwesomeIcon icon={faTags} className="iconSidebar" />
                                        <span>Categorias</span>
                                    </Link>
                                </li>
                                
                            </ul>
                        </nav>
                    </div>
                </div>

                <main className="main-content">{children}</main>
            </div>
        </div>
    );
}
