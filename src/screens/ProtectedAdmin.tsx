import { Route, Routes } from "react-router-dom";
import { AUTH_KEY } from "../data/store";
import { AdminHome } from "./AdminHome";
import { AdminLayout } from "./AdminLayout";
import { AdminProducts } from "./AdminProducts";
import { AdminSales } from "./AdminSales";
import { Login } from "./Login";
export function ProtectedAdmin() { return localStorage.getItem(AUTH_KEY) ? <AdminLayout><Routes><Route index element={<AdminHome />}/><Route path="produtos" element={<AdminProducts />}/><Route path="vendas" element={<AdminSales />}/></Routes></AdminLayout> : <Login />; }
