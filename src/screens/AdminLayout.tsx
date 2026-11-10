import { BarChart3, ChevronRight, Menu, Pencil, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AUTH_KEY } from "../data/store";
import { Brand } from "./Brand";
export function AdminLayout({ children }: {
    children: React.ReactNode;
}) { const navigate = useNavigate(); const [open, setOpen] = useState(() => window.innerWidth > 820); const logout = () => { localStorage.removeItem(AUTH_KEY); navigate("/login"); }; return <div className={`admin-shell ${!open ? "collapsed" : ""}`}><aside><Brand /><nav><Link to="/admin"><BarChart3 /><span>Visão geral</span></Link><Link to="/admin/produtos"><Pencil /><span>Produtos</span></Link><Link to="/admin/vendas"><ShoppingBag /><span>Vendas</span></Link></nav><button className="sidebar-toggle" onClick={() => setOpen((value) => !value)} aria-label="Alternar menu">{open ? <X /> : <Menu />}</button><button className="logout" onClick={logout}><span>Sair</span></button></aside><section className="admin-content"><header className="admin-topbar"><button className="icon-button" aria-label="Alternar menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}><Menu /></button><div><span className="eyebrow">Painel do catálogo</span><h2>Olá, AnaCraft</h2></div><Link to="/" className="button soft view-store">Ir para a loja <ChevronRight size={15}/></Link></header>{children}</section></div>; }
