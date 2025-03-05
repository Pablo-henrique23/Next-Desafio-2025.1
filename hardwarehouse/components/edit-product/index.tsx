import { ImageInputBut, ConfirmButton, ExitBut } from '@/components/buttons'
import { CategoriasEdit } from '@/components/categorias'

export default function EditProduct() {
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
                    <input defaultValue={'DEFAULT'} id='nome' type="text" className='px-4 py-2 rounded-lg text-center bg-[#E9E9E9]'/>

                    <label htmlFor="categoria" className='flex justify-center gap-1'>Categoria</label>
                    <div className="w-full">
                        <CategoriasEdit/>
                    </div>
                    
                    <label htmlFor="preco" className='flex justify-center gap-1'>Preço</label>
                    <input defaultValue={'9999'} type="number" placeholder='R$' id="preco" name='preco'
                    className='px-4 py-2 rounded-lg text-center bg-[#E9E9E9]'/>

                    <label htmlFor="descricao" className='flex justify-center gap-1'>Descrição</label>
                    <textarea defaultValue={'DEFAULT'} name="descricao" id="descricao" className='h-20 px-2 py-2 rounded-lg bg-[#E9E9E9] text-left resize-none ' autoComplete='off'/>

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