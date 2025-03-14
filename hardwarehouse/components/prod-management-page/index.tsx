'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { NewBut, EditBut, ViewBut, DeleteBut } from '@/components/buttons';
import { Produto } from '@prisma/client';
import { CATEGORIAS_EXIBICAO } from '@/types/home/home';
import AdminSearch from '../admin-search';

export default function ProdManagementPage({prods, count}: {prods: Produto[], count: number}) {
    const cols = [
        'ID',
        'Categoria',
        'Imagem',
        'Nome',
        'Preço',
        'Ações'
    ]

    const [colunas, setColunas] = useState([...cols])

    useEffect(() => {
        const handleResize = () => {
            // se for menor que 768, vai abreviar Categoria para Cat.
            if (window.innerWidth < 768) {
                const newCols = [...cols];
                newCols[1] = 'Cat.';
                newCols[2] = 'Img.';
                setColunas(newCols);
            } else {
                setColunas(cols);
            }
        };

        handleResize(); // Chama a função ao montar o componente
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div id="container" className="flex bg-white mb-4 flex-col justify-center size-full md:m-6 md:rounded-[10px]">
            {/* parte de cima */}
            <div className='flex w-full px-3 mt-4 md:gap-5 justify-between text-center items-center'>
                {/* titulo */}
                <h1 className='w-1/3 md:font-bold text-[#7B7B7B] text-left md:text-xl md:w-fit md:whitespace-nowrap'><a href="/admin" className='hover:underline'>Gerenciamento de Produtos</a></h1>
                {/* busca */}
                <div className='w-full flex justify-center'>
                    <AdminSearch/>
                </div>
                {/* botao de novo */}
                <div className='flex w-full md:w-fit justify-end'>
                    <div className='flex flex-col md:w-full'>
                        <NewBut/>
                    </div>
                </div>
            </div>
            {/* parte do meio */}
            <div id='tabela' className='overflow-x-auto my-3 md:mx-2'>
                <table className='w-full border-collapse'>
                    {/* parte de cima da tabela */}
                    <thead className='border-b border-black'>
                        <tr className='mx-2'>
                            {colunas.map((coluna) => 
                            <th key={coluna} className='py-2'>
                                {coluna}
                            </th>)}
                        </tr>
                    </thead>
                    {/* meio da tabela */}
                    <tbody className='w-full'>
                        {count === 0 ? (
                            <tr className='w-full'>
                                <td colSpan={colunas.length} className='py-2 text-center text-red-500 font-bold'>
                                    Nenhum produto encontrado.
                                </td>
                            </tr>
                        ) : (
                            prods.map((produto) => (
                                <tr key={produto.id} className='w-full border-b border-black/40 last:border-none'>
                                    <td className='text-center'>{produto.id}</td>
                                    <td className='text-center'>{produto.categoria.map(categoria => CATEGORIAS_EXIBICAO[categoria]).join(', ')}</td>
                                    {/* isso em cima é pra, caso tenha mais de 1 categoria, juntar todas e separar por virgula */}
                                    <td className='text-center md:py-2'>
                                        <div className='flex justify-center items-center text-center'>
                                            <Image
                                                src={produto.image}
                                                alt={produto.categoria[0]}
                                                width={1920}
                                                height={1080}
                                                className="size-12 md:size-20 object-contain"
                                            />
                                        </div>
                                    </td>
                                    <td className='w-1/4 text-center'>
                                        <p className='line-clamp-1'>
                                            {produto.name}
                                        </p>
                                    </td>
                                    <td className='text-center'>R$ {produto.preco.toFixed(2)}</td>
                                    {/* açoes */}
                                    <td className='w-fit md:w-1/5'>
                                        <div className='flex flex-col my-1 md:my-0 w-fit px-2 justify-around md:flex-row mx-auto text-center items-center bg-[#DEDEDE] gap-2 py-2 md:gap-0 md:py-1 rounded-[10px] md:w-1/2'>
                                            <EditBut id={produto.id}/>
                                            <ViewBut id={produto.id}/>
                                            <DeleteBut id={produto.id}/>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>

            </div>
        </div>	
    )
}
