import Image from "next/image"
import ProductCard from "../product-card"
export default function HeroSection() {
    return (
    <div id="page" className="bg-[#E9E9E9]">
        <div className="flex w-full">
            <Image
                src={'/assets/3090.png'} /* teclado.jpg */
                alt="Imagem de fundo"
                width={1920}
                height={1080}
                className=""
            />
        </div>
        <div className="flex flex-col w-full items-center">
            <div className="my-3 py-3 px-4 md:w-1/4 bg-[#B3C9E2] text-center items-center justify-center rounded-full font-semibold text-black/70 text-xl border border-black/70">
                Um pouco sobre nós!
            </div>
        </div>
        <div id="mvv" className="flex flex-col bg-[#E9E9E9] pt-3 pb-6 w-full h-auto justify-around md:flex-row gap-[20px] px-[20px] items-center">
            <div className="rounded-[10px] bg-[#9FA5AB] py-[10px] size-10/12 transition-all justify-center duration-100 md:h-46 md:size-[210px] hover:scale-110">
                <div id="missao-title" className="flex justify-center">
                    <p className="font-semibold">
                        Missão
                    </p>
                </div>
                <div className="flex justify-center text-center items-center ">
                    <p className="mx-[10px]">
                    Nossa missão é 
                    oferecer os melhores
                    hardwares pelo
                    melhor preço! A melhor
                    qualidade para os
                    melhor clientes!
                    </p>
                </div>
            </div>
            <div className="rounded-[10px] bg-[#9FA5AB] py-[10px] size-10/12 transition-all justify-center duration-100 md:h-46 md:size-[210px] hover:scale-110">
                <div id="visao-title" className="flex justify-center">
                    <p className="font-semibold">
                        Visão
                    </p>
                </div>
                <div className="flex justify-center text-center items-center">
                    <p className="mx-[10px]">
                    Nossa visão de
                    mundo nos diz que todos
                    devem ter acesso à
                    tecnologia de ponta, seja para
                    trabalho ou jogos!
                    </p>
                </div>
            </div>
            <div className="rounded-[10px] bg-[#9FA5AB] py-[10px] size-10/12 transition-all justify-center duration-100 md:h-46 md:size-[210px] hover:scale-110">
                <div id="valores-title" className="flex justify-center">
                    <p className="font-semibold">
                        Valores
                    </p>
                </div>
                <div className="flex justify-center text-center items-center">
                    <p className="mx-[10px]">
                    Acreditamos na
                    igualdade, evolução
                    e educação através
                    da tecnologia, dos jogos
                    e do trabalho e é por isso que 
                    você precisa de um PC!
                    </p>
                </div>
            </div>
        </div>
        
    </div>
    )
}