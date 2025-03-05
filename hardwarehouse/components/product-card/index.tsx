import Image from "next/image"
import Link from "next/link"

type produto = {
    id: number
    nome: string
    preco: number
    imagem: string
    desc: string
}

export default function ProductCard({id, nome, preco, imagem, desc}: produto) {
    return (
        <Link
            href={`/product/${id}`}
            // TODO
            className="flex text-center pb-2 justify-center border-2 border-[#E9E9E9] w-40 md:w-52 xl:w-96
            items-center md:shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            >
            <div id="product-container" 
            className="">
                <Image
                    src={imagem}
                    alt={nome}
                    width={1920}
                    height={1080}
                    className="size-full md:size-40 mx-auto p-2"
                />
                <p id="nome" className="pt-4 font-semibold line-clamp-1 mx-5">
                    {nome}
                </p>
                <p id="preco" className="text-[#282BF3] font-semibold">
                    R$ {preco}
                </p>
                <p id="descricao" className="text-[#848484] text-[14px] text-center line-clamp-1 mx-4 mb-3 mt-2">
                    {desc}
                </p>
                <button id="comprar" 
                className="flex py-2 px-2 md:px-4 gap-2 items-center justify-center text-white rounded-lg bg-[#1E8581] mx-auto
                hover:bg-[#1E8581]/80 transition-all duration-200">
                    <Image
                        src={'/assets/carrinho.png'}
                        alt="Carrinho"
                        width={1920}
                        height={1080}
                        className="size-5"
                    />
                    Ver mais
                </button>
            </div>
        </Link>
    )
}