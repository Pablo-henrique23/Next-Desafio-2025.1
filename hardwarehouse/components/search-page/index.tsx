'use client'

import { useEffect, useState } from "react";
import SecondaySearch from './secondary-search';
import ProductCard from '../product-card';
import { Produto } from "@prisma/client";
export default function SearchPage({prods, count}: {prods: Produto[], count: number}){

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
            {count === 0 ? ( 
                // ===
                <div className="w-full flex flex-col justify-center items-center">
                    <span className='text-xl font-extrabold'>
                        Nenhum item encontrado.
                    </span>
                    <span className='text-black/70 mb-10'>
                        Tente buscar por outra coisa.
                    </span>
                </div>
            ) : (
                <div className='flex flex-col size-full justify-center gap-4 mb-4'>
                        <div id="row" className='grid grid-cols-2 md:grid-cols-4 gap-4 mx-2 md:gap-6 justify-items-center my-4'>
                            {prods.map((prod, index) => (
                                <ProductCard key={index} produto={prod}/>
                            ))}
                        </div>
                </div>
            )}
        </div>
    )
}