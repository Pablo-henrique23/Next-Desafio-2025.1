import ProductPage from "@/components/prod-page";
import { getById } from "@/actions/individual/actions";
import { getRandomProdutos } from "@/actions/random/actions";


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
    const RANDOM_PRODS_NUMBER = 4
    const produtos = await getRandomProdutos(prod.id, RANDOM_PRODS_NUMBER)

    return (
        <div id="master" className="p-3 mb-4">
            <ProductPage produto={prod} produtos={produtos}/>
        </div>
    )
}