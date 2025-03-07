'use client'
import EditProduct from "@/components/edit-product"
import { useParams } from "next/navigation"
export default function Page() {
    const params = useParams();
    const id = params?.id ? Number(params.id) : null;

    if (!id) {
        return <p>Produto não encontrado.</p>;
    }

    return (
        <div id="general-wrapper" className="flex size-full bg-[#E9E9E9] justify-center">
            <EditProduct id={id}/>
        </div>
    )
}