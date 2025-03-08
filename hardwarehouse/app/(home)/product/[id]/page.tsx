'use client'
import ProductPage from "@/components/prod-page";
import { useParams } from "next/navigation";

export default function Page() {
    
    const params = useParams();
    const id = params?.id ? Number(params.id) : null;
    if (!id) {
        return <p>Produto não encontrado.</p>;
    }

    return (
        <div id="master" className="p-3 mb-4">
            <ProductPage id={id}/>
        </div>
    )
}