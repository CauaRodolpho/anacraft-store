import { Route, Routes } from "react-router-dom";
import { Home, Catalog, ProductPage, Login, ProtectedAdmin } from "./views";
export default function App() { return <Routes><Route path="/" element={<Home/>}/><Route path="/catalogo" element={<Catalog/>}/><Route path="/produto/:slug" element={<ProductPage/>}/><Route path="/login" element={<Login/>}/><Route path="/admin/*" element={<ProtectedAdmin/>}/></Routes>; }
