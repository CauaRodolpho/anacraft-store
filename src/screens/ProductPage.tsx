import { Instagram } from "lucide-react";
import { useParams } from "react-router-dom";
import { money, readProducts } from "../data/store";
import { PublicLayout } from "./PublicLayout";
export function ProductPage() { const { slug } = useParams(); const product = readProducts().find((item) => item.id === slug); if (!product)
    return <PublicLayout><main className="page"><p className="empty">Produto não encontrado.</p></main></PublicLayout>; return <PublicLayout><main className="page product-detail"><img src={product.imageUrl} alt={product.name}/><div><span className="eyebrow">{product.category}</span><h1>{product.name}</h1><p>{product.description}</p><strong className="detail-price">{money(product.price)}</strong><a className="button primary" href="https://instagram.com/atelie_anacraft" target="_blank" rel="noreferrer">Encomendar pelo Instagram <Instagram size={17}/></a></div></main></PublicLayout>; }
