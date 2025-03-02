'use client'

import { useEffect, useState } from "react";
import SecondaySearch from './secondary-search';
import ProductCard from '../product-card';
export default function SearchPage(){
    const count = 0;

    const [pc, setPc] = useState(false)

    useEffect(() => {
        const atualizarTamanho = () => {
            setPc(window.innerWidth >= 768);
        };
        atualizarTamanho();

        window.addEventListener("resize", atualizarTamanho);

        return () => window.removeEventListener("resize", atualizarTamanho);
    }, []);


    return (
        <div>
            <SecondaySearch count={count}/>
            {count != 0 ? ( 
                // ===
                <div className="w-full flex flex-col mx-[10px]">
                    <span className='text-xl font-extrabold'>
                        Nenhum item encontrado.
                    </span>
                    <span className='text-black/70'>
                        Tente buscar por outro componente.
                    </span>
                </div>
            ) : (
                <div className='flex flex-col size-full justify-center gap-4 mb-4'>
                    {pc ? (
                        <div id="row" className='flex flex-row gap-6 justify-center'>
                            <ProductCard nome='NVIDIA RTX 4070' preco={9999.99} imagem='/assets/rtx4070.png' desc='Boa pra jogar fora'/>
                            <ProductCard nome='NVIDIA RTX 4070' preco={9999.99} imagem='/assets/rtx4070.png' desc='Boa pra jogar fora'/>
                            <ProductCard nome='NVIDIA RTX 4070' preco={9999.99} imagem='/assets/rtx4070.png' desc='Boa pra jogar fora'/>
                            <ProductCard nome='NVIDIA RTX 4070' preco={9999.99} imagem='/assets/rtx4070.png' desc='Boa pra jogar fora'/>
                        </div>
                    ) : (
                        <div id="row" className='flex flex-row gap-6 justify-center'>
                            <ProductCard nome='NVIDIA RTX 4070' preco={9999.99} imagem='/assets/rtx4070.png' desc='Boa pra jogar fora'/>
                            <ProductCard nome='NVIDIA RTX 4070' preco={9999.99} imagem='/assets/rtx4070.png' desc='Boa pra jogar fora'/>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}