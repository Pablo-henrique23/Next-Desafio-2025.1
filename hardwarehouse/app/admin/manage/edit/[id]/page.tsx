import EditProduct from "@/components/edit-product"
import { getById } from "@/actions/individual/actions";

export default async function Page( {params}: {params: {id: string}}) {
    
    const id = parseInt(await params.id,10);
    const produto = await getById(id);
    if (!produto) {
        return <p>Produto não encontrado.</p>; // 🔹 Exibe mensagem caso o ID seja inválido.
    }

    return (
        <div id="general-wrapper" className="flex size-full bg-[#E9E9E9] justify-center">
            <EditProduct produto={produto}/>
        </div>
    )
}