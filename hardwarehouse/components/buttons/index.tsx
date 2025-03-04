import Link from "next/link"
import Image from "next/image"


export function NewBut(){
    return (
        <Link href={'/admin/manage/create'} 
        className='flex font-semibold w-full bg-[#DEDEDE] justify-center rounded-[10px] items-center text-center px-2 py-1 gap-2 md:px-3 md:py-2 hover:scale-105 transition-all duration-200'>
            <Image
                src={'/assets/plus.png'} /* teclado.jpg */
                alt="Novo produto"
                width={1920}
                height={1080}
                className="size-4 md:size-7"
                />
            Novo
        </Link>
    )
}
export function EditBut({ id }: { id:number }){
    return (
    <Link href={`/admin/manage/edit/${id}`} className='hover:scale-110 transition-all duration-200'> 
    {/* TODO */}
        <Image
            src={'/assets/edit.png'}
            alt="Editar"
            width={1920}
            height={1080}
            className="size-5 md:size-7"
        />
    </Link>
    )
}

export function ViewBut({ id }: { id:number }){
    return (
        <Link href={`/admin/manage/view/${id}`} className='hover:scale-110 transition-all duration-200'> 
        {/* TODO */}
            <Image
                src={'/assets/view.png'}
                alt="Visualizar"
                width={1920}
                height={1080}
                className="size-5 md:size-7"
            />
        </Link>
    )
}

export function DeleteBut({ id }: { id:number }){
    return (
        <Link href={`/admin/manage/delete/${id}`} className='hover:scale-110 transition-all duration-200'> 
        {/* TODO */}
            <Image
                src={'/assets/delete.png'}
                alt="Deletar"
                width={1920}
                height={1080}
                className="size-5 md:size-7"
            />
        </Link>
    )
}