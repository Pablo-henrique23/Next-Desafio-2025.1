import { getProdutos } from "@/actions/home/actions"
import ProductCard from "@/components/product-card"
import { CATEGORIAS_EXIBICAO } from "@/types/home/home";

export default async function ProductsPage() {
    const produtos = await getProdutos();
    const categorias = Object.values(CATEGORIAS_EXIBICAO);
    
    return (
        <div id="general-wrapper" className="my-2 md:my-4 flex flex-col md:flex-row md:justify-around md:gap-4">
            <div id="categorias" className="flex flex-col justify-left text-center w-full md:w-1/6 md:mt-4">
                <p className="font-bold text-lg text-black/80">CATEGORIAS</p>
                <form action="">
                    {/* TODO */}
                    <ul className="flex flex-wrap flex-row mx-4 mt-2 justify-left md:mx-0 md:flex-col md:gap-1">
                        {categorias.map((categoria, index) => (
                        <li key={index} className="flex space-x-2 items-center text-center">
                            <input
                                id={categoria}
                                type="checkbox"
                                className="ml-3 w-5 h-5 justify-center items-center text-center rounded border-gray-400 focus:ring-2 focus:ring-blue-500"
                            />
                            <label htmlFor={categoria} className="text-black text-[18px]">{categoria}</label>
                        </li>
                    ))}
                    </ul>
                    <button type="submit" className="mt-3 bg-[#1E8581] hover:bg-[#1E8581]/80 text-white rounded-lg px-3 py-2">Filtrar</button>
                </form>
            </div>
            <div className="mx-auto border-t mt-4 w-72 md:mx-0 md:w-0 md:h-auto md:border-l border-[#747474]"></div>
            <div className="w-full p-4 grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-3 md:gap-y-5 justify-items-center overflow-x-auto">
                {produtos.map((produto, index) => (
                    <ProductCard key={index} produto={produto}/>
                ))}
            </div>
        </div>
    )
}