'use client'
import { ImageInputBut, ConfirmButton, ExitBut } from '@/components/buttons'
import { CategoriasEdit } from '@/components/categorias'
import { useEffect, useState } from 'react'
import { Produto } from '@/types/home/home'
import { getById } from '@/actions/home/actions'
import Image from 'next/image'

export default function EditProduct({ id }: {id: number}) {
    
    const [produto, setProduto] = useState<Produto | null >(null);
    useEffect(() => {
        async function fetchProduto(){
            const data = await getById(id);
            setProduto(data);
        }
        if(id) fetchProduto();
    }, [id]);

    if(!produto) return <p>Produto não encontrado.</p>;
    
    return (
        <div className="md:m-2 md:m-5 size-full justify-around p-3 md:rounded-[10px] bg-white">
            <div className='flex w-full mb-4 justify-between items-center text-center'>
                <div className='text-lg text-black/60 md:font-semibold'>
                    Editar Produto
                </div>
                <ExitBut/>
            </div>

            <div className='border-b border-black/60 my-2'></div>

            <div id="formulario">
                <form action="" className='flex flex-col justify-around gap-2 font-semibold text-center'>
                    <label htmlFor="nome" className='flex justify-center gap-1'>Nome</label>
                    <input defaultValue={produto?.name} id='nome' type="text" className='px-4 py-2 rounded-lg text-center bg-[#E9E9E9]'/>

                    <label htmlFor="categoria" className='flex justify-center gap-1'>Categoria</label>
                    <div className="w-full">
                        <CategoriasEdit prod_categorias={produto?.categoria ?? []}/>
                    </div>
                    
                    <label htmlFor="preco" className='flex justify-center gap-1'>Preço</label>
                    {produto?.preco &&
                        <input defaultValue={`${produto?.preco.toFixed(2)}`} type="number" placeholder='R$' id="preco" name='preco'
                        className='px-4 py-2 rounded-lg text-center bg-[#E9E9E9]'/>
                    }

                    <label htmlFor="descricao" className='flex justify-center gap-1'>Descrição</label>
                    <textarea defaultValue={produto?.descricao} name="descricao" id="descricao" className='h-20 px-2 py-2 rounded-lg bg-[#E9E9E9] text-left resize-none ' autoComplete='off'/>

                    <div id='div-img' className='flex justify-center w-full my-3'>
                        <Image
                            src={produto?.image || '/assets/close.png'}
                            alt={produto?.name || 'Nome do produto'}
                            width={1920}
                            height={1080}
                            className="w-1/2 md:w-1/5 object-contain"
                        />
                    </div>

                    <div id='img-div' className='mt-4'>
                        <ImageInputBut msg='Alterar imagem' obrigatorio={false}/>
                    </div>

                    <div className='mx-auto mt-4 mb-2'>
                        <ConfirmButton fundo='[#1E8581]' fundoHover='[#1E8581]/80'/>
                    </div>
                </form>

            </div>
        </div>
    )
}