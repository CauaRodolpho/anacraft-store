import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_KEY } from "../data/store";
import { Brand } from "./Brand";
export function Login() { const navigate = useNavigate(); useEffect(() => { if (localStorage.getItem(AUTH_KEY))
    navigate("/admin", { replace: true }); }, [navigate]); const [password, setPassword] = useState(""); const [error, setError] = useState(""); const submit = (event: React.FormEvent) => { event.preventDefault(); if (password !== "anacraft123") {
    setError("Senha incorreta.");
    return;
} localStorage.setItem(AUTH_KEY, "true"); navigate("/admin"); }; return <main className="auth-page"><div className="auth-card"><Brand /><span className="eyebrow">Área do proprietário</span><h1>Bem-vindo de volta.</h1><p>Administre produtos e acompanhe as vendas do ateliê.</p><form onSubmit={submit}><label>Senha<input autoFocus type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Digite sua senha"/></label>{error && <small className="error">{error}</small>}<button className="button primary" type="submit">Entrar no painel</button></form><small className="hint">Demonstração: anacraft123</small></div></main>; }
