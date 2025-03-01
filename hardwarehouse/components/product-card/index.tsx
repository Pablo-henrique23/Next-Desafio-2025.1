import Image from "next/image"
import Link from "next/link"

type produto = {
    id: number
    nome: string
    preco: number
    imagem: string
    desc: string
}

export default function ProductCard({nome, preco, imagem, desc}: produto) {
    return (
        <div id="product-container" className="flex text-center justify-center w-2/5 items-center py-2 md:border md:border-[#848484] md:rounded-lg md:mb-4">
            <Link
                href="/"
                // TODO
                className=""
                >
                <Image
                    src={imagem}
                    alt={nome}
                    width={1920}
                    height={1080}
                    className="size-full md:size-40 mx-auto"
                />
                <p id="nome" className="pt-4 font-semibold">
                    {nome}
                </p>
                <p id="preco" className="text-[#282BF3] font-semibold">
                    R$ {preco}
                </p>
                <p id="descricao" className="flex text-[#848484] text-[14px] pb-2 items-center text-center justify-center">
                    {desc}
                </p>
                <button id="comprar" 
                className="flex py-2 px-4 gap-2 items-center justify-center text-white rounded-lg bg-[#1E8581] mx-auto
                hover:bg-[#1E8581]/80">
                    <Image
                        src={'/assets/carrinho.png'}
                        alt="Carrinho"
                        width={1920}
                        height={1080}
                        className="size-5"
                    />
                    Comprar
                </button>
            </Link>
        </div>
    )
}