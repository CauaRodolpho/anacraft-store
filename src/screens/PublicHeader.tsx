import { Instagram, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Brand } from "./Brand";
export function PublicHeader() { const [open, setOpen] = useState(false); return <header className="public-header"><Brand /><nav className={open ? "mobile-open" : ""}><Link to="/">Início</Link><Link to="/catalogo">Produtos</Link><a href="/#sobre">Sobre o ateliê</a><a href="https://instagram.com/atelie_anacraft" target="_blank" rel="noreferrer"><Instagram size={16}/> Instagram</a></nav><button className="icon-button mobile-menu" onClick={() => setOpen((value) => !value)} aria-label="Abrir menu">{open ? <X /> : <Menu />}</button></header>; }
