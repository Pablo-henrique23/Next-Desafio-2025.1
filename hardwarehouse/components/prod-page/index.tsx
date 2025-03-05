import Image from "next/image"
import { ChevronRight, X } from "lucide-react"
import ProductCard from "../product-card"

export default function ProductPage() {
    return (
        <div id="wrapper" className="flex flex-col size-full gap-3">
            <div id='path' className="flex font-semibold text-xs md:text-sm items-center text-black/75 md:pt-2 md:pb-5">
                GPUs <ChevronRight size={18}/> <p className="text-[#282BF3]">NVIDIA RTX 4070</p>
                {/* TODO ^^ deixar dinamico */}
            </div>
            <div className="flex flex-col md:flex-row gap-3">
                <div id='img'>
                    <Image
                        src={'/assets/rtx4070.png'}
                        alt="NVIDIA RTX 4070"
                        width={1920}
                        height={1080}
                        className="size-full md:w-full"
                    />
                </div>
                <div id='info' className="flex flex-col md:w-full gap-1 md:justify-center md:items-left">
                    <h1 id="nome" className="text-lg">NVIDIA RTX 4070</h1>
                    <h1 id="preco" className="font-bold text-lg text-[#17948F]">R$ 9999.99</h1>
                    <p id="descricao" className="text-[#848484]">Descrição descrição descrição descrição descrição</p>
                    <div id="comprar" className="flex w-full justify-start gap-3 items-center mt-4 ALTEREME">
                        <div className="w-1/3 md:w-fit border border-black text-center">
                            Quantidade
                            {/* TODO fazer controlador de quantidade */}
                        </div>
                        <button className="flex items-center text-center justify-center w-1/3 md:w-fit px-6 py-2 gap-3 bg-[#1E8581] hover-bg-[#1E8581]/80 rounded-[6px]">
                            <Image
                                src={'/assets/carrinho.png'}
                                alt="Comprar"
                                width={1920}
                                height={1080}
                                className="size-4"
                                />
                            <p className="hidden md:block text-white">Comprar</p>
                        </button>
                    </div>
                </div>
            </div>

            <div id="divisor" className="w-full border-b border-black/20"></div>

            <h1 className="font-semibold">Outros produtos</h1>
            <div id="more-products" className="w-full grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-3 md:gap-y-5 justify-items-center overflow-x-auto">
                <ProductCard id={1} nome="NVIDIA RTX 4070" desc="Descrição descrição descrição descrição descrição a" imagem="/assets/rtx4070.png" preco={9999.99} />
                <ProductCard id={2} nome="NVIDIA RTX 4070" desc="Descrição descrição descrição descrição descrição a" imagem="/assets/rtx4070.png" preco={9999.99} />
                <ProductCard id={3} nome="NVIDIA RTX 4070" desc="Descrição descrição descrição descrição descrição a" imagem="/assets/rtx4070.png" preco={9999.99} />
                <ProductCard id={4} nome="NVIDIA RTX 4070" desc="Descrição descrição descrição descrição descrição a" imagem="/assets/rtx4070.png" preco={9999.99} />
                <ProductCard id={5} nome="NVIDIA RTX 4070" desc="Descrição descrição descrição descrição descrição a" imagem="/assets/rtx4070.png" preco={9999.99} />
                <ProductCard id={6} nome="NVIDIA RTX 4070" desc="Descrição descrição descrição descrição descrição a" imagem="/assets/rtx4070.png" preco={9999.99} />
            </div>
        </div>
        
    )
}