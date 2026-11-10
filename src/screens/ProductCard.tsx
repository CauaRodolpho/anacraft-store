import { Link } from "react-router-dom";
import { money, type Product } from "../data/store";
export function ProductCard({ product }: {
    product: Product;
}) { return <Link to={`/produto/${product.id}`} className="product-card"><img src={product.imageUrl} alt={product.name}/><div><span>{product.category}</span><h3>{product.name}</h3><strong>{money(product.price)}</strong></div></Link>; }
