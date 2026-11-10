import { Brand } from "./Brand";
import { PublicHeader } from "./PublicHeader";
export function PublicLayout({ children }: {
    children: React.ReactNode;
}) { return <><PublicHeader />{children}<footer><Brand /><p>Feito à mão, com carinho, para combinar com a sua história.</p></footer></>; }
