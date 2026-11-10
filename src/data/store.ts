import { read } from "../lib/storage";
export type Category = "Canecas" | "Acessórios" | "Decoração";
export type Product = { id: string; name: string; category: Category; description: string; price: number; imageUrl: string };
export type Sale = { id: string; productId: string; productName: string; quantity: number; unitPrice: number; total: number; soldAt: string };
export const PRODUCTS_KEY = "anacraft-store-products";
export const SALES_KEY = "anacraft-store-sales";
export const AUTH_KEY = "anacraft-store-admin";
export const initialProducts: Product[] = [
  { id: "caneca-afeto", name: "Caneca Afeto", category: "Canecas", description: "Uma caneca feita para transformar momentos simples em lembranças especiais.", price: 49.9, imageUrl: "/assets/products/caneca1.webp" },
  { id: "chaveiro-personalizado", name: "Chaveiro personalizado", category: "Acessórios", description: "Um detalhe único para levar sua história com você.", price: 24.9, imageUrl: "/assets/products/acessorio1.webp" },
  { id: "quadro-memoria", name: "Quadro Memória", category: "Decoração", description: "Uma composição delicada para guardar uma história especial na parede.", price: 59.9, imageUrl: "/assets/products/papelaria1.webp" },
];
export const money = (value: number) => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const readProducts = () => read<Product[]>(PRODUCTS_KEY, initialProducts);
export const readSales = () => read<Sale[]>(SALES_KEY, []);
