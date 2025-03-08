import ProductPage from "@/components/prod-page";
import { getById } from "@/actions/individual/actions";

export default async function Page({ params }: { params: { id : string }}) {
    
    const id = parseInt(params.id,10);
    const prod = await getById(id)
    if (!prod) {
        return (
            <div>
                <h1>Indisponivel</h1>
            </div>
        )
    }

    return (
        <div id="master" className="p-3 mb-4">
            <ProductPage produto={prod}/>
        </div>
    )
}