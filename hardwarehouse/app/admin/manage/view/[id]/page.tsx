'use client'
import ViewProduct from "@/components/view-product"
import { useParams } from "next/navigation"
export default function Page() {
    const params = useParams();
    const id = params?.id ? Number(params.id) : null; // 🔹 Garante que id seja um número válido.

    if (!id) {
        return <p>Produto não encontrado.</p>; // 🔹 Exibe mensagem caso o ID seja inválido.
    }

    return (
        <div id="general-wrapper" className="flex size-full bg-[#E9E9E9] justify-center">
            <ViewProduct id={id}/>
        </div>
    )
}