import DeleteProduto from "@/components/delete-product"
import { checkProd } from "@/actions/admin/actions";

export default async function Page({params}: {params: {id: string}}) {
    const p = await params;
    const id = parseInt(p.id,10);
    const produto = await checkProd(id);
    if (produto === false) {
        return <p>Produto não encontrado.</p>;  
    }
    return (
        <div id="general-wrapper" className="flex justify-center bg-[#E9E9E9]">
            <DeleteProduto id={id}/>
        </div>
    )
}