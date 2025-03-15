'use client'
import Link from "next/link"
import Image from "next/image"
import { checkProd, deleteProduct } from "@/actions/admin/actions"

export default function DeleteProduto({ id }: {id: number}) {
    const handleConfirm = async () => {
        if (!checkProd(id)) {
            window.location.href = '/admin';
            return null;
        }
        await deleteProduct(id);
        window.location.href = '/admin';
    }

    return (
        <div id="wrapper" className="flex flex-col items-center text-center w-full md:h-1/2 md:w-1/2 bg-[#ffffff] md:my-20 rounded-[6px]">
            <div id="close" className="w-full flex justify-end">
                <Link href={'/admin'}>
                    <Image
                        src={'/assets/close.png'}
                        width={1920}
                        height={1080}
                        alt='Close'
                        className="size-6 md:size-10 mr-4 mt-4"
                    />
                </Link>
            </div>
            <h1 className="text-2xl font-semibold my-6">Tem certeza que deseja excluir esse item?</h1>
            <Image
                src={'/assets/delete.png'}
                width={1920}
                height={1080}
                alt="Imagem de fundo"
                className="size-32"
            />
            <h1 className="text-xl font-bold my-6 underline">Essa ação não pode ser desfeita.</h1>
            <div id="buttons" className="w-1/2 flex justify-center gap-24 mt-2 mb-16">
                <button className="text-white font-semibold text-xl bg-[#1E8581] p-2 rounded-[6px] hover:bg-[#1E8581]/80">
                    <Link href={'/admin'}>
                        Cancelar
                    </Link>
                </button>
                <button className="text-white font-semibold text-xl bg-[#851E1E] p-2 px-4 rounded-[6px] hover:bg-[#851E1E]/80" 
                onClick={handleConfirm}>
                    Excluir
                </button>
            </div>
        </div>
    )
}