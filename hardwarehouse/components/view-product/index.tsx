import { BackButton, ExitBut } from '@/components/buttons'
import { CATEGORIAS_EXIBICAO, Produto, ProdutoIndividual } from '@/types/home/home';
import Image from 'next/image'


export default function ViewProduct({ produto }: {produto: ProdutoIndividual}) {
    
    return (
        <div className="md:m-2 md:m-5 size-full justify-around p-3 md:rounded-[10px] bg-white">
            <div className='flex w-full mb-4 justify-between items-center text-center'>
                <div className='text-lg text-black/60 md:font-semibold'>
                    Visualizar Produto
                </div>
                <ExitBut/>
            </div>

            <div className='border-b border-black/60 my-2'></div>

            <div id="formulario">
                <form action="" className='flex flex-col justify-around gap-2 font-semibold text-center'>
                    <label htmlFor="nome" className='flex justify-center gap-1'>Nome</label>
                    <input readOnly defaultValue={produto?.name} id='nome' type="text" className='cursor-not-allowed px-4 py-2 rounded-lg text-center bg-[#E9E9E9]'/>

                    <label htmlFor="categoria" className='flex justify-center gap-1'>Categoria</label>
                    <input readOnly defaultValue={produto?.categoria}
                        type="text" name="categoria" 
                        className="cursor-not-allowed px-4 py-2 rounded-lg text-center bg-[#E9E9E9]"/>
                    
                    <label htmlFor="preco" className='flex justify-center gap-1'>Preço</label>
                    {produto?.preco && 
                        <input readOnly defaultValue={`R$ ${produto?.preco.toFixed(2)}`} type="text" id="preco" name='preco'
                        className='cursor-not-allowed px-4 py-2 rounded-lg text-center bg-[#E9E9E9]'/>
                    }
                    <label htmlFor="descricao" className='flex justify-center gap-1'>Descrição</label>
                    <textarea readOnly defaultValue={produto?.descricao} name="descricao" id="descricao" 
                    className='cursor-not-allowed h-20 px-2 py-2 rounded-lg bg-[#E9E9E9] text-left resize-none'/>

                    <div id='div-img' className='flex justify-center w-full my-3'>
                        <Image
                            src={produto?.image || '/assets/close.png'}
                            alt={produto?.name || 'Nome do produto'}
                            width={1920}
                            height={1080}
                            className="w-1/2 md:w-1/5 object-contain"
                        />
                    </div>

                    <div className='mx-auto mt-4 mb-4'>
                        <BackButton fundo='[#1E8581]' fundoHover='[#1E8581]/80' url='/admin'/>
                    </div>
                </form>
            </div>
        </div>
    )
}