import Image from "next/image"
import Link from "next/link"

const links = [
    {href: '/1', label: '/1'},
    {href:'/2', label: '/2'},
]

export default function Header() {
    
    
    return (
        <header className="bg-[#9FA5AB] sticky top-0 z-20 mx-auto w-full py-8 px-4 md:p-0 mb-8">
            <div className="flex items-center justify-between flex-wrap w-full md:w-10/12 mx-auto">
                <Link href="/" className="flex items-center gap-4">
                    <Image
                        src={'/assets/no_bg_black_logo.png'}
                        alt="Logo"
                        width={940}
                        height={940}
                        className="h-20 w-20 rounded-x1"/>

                    
                </Link>
                <form action="/">
                    <input type="text"
                    placeholder="Buscar"
                    
                    className="w-full rounded-[8px] px-7 py-3 text-white bg-white caret-black transition-all duration-300" />
                </form>
                <div className="flex items-center gap-[40px]">
                    <Link href="/">
                        <Image
                        alt="Manager"
                        src={"/assets/manager.png"}
                        width={30}
                        height={30}
                        className=""/>
                    </Link>
                    <Link href="/">
                        <Image
                        alt="Contatos"
                        src={"/assets/contact-mail.png"}
                        width={30}
                        height={30}
                        className=""/>
                    </Link>
                    <Link href="/">
                        <Image
                        alt=""
                        src={"/assets/user.png"}
                        width={30}
                        height={30}
                        className=""/>
                    </Link>
                </div>
            </div>
       
        </header>
    )
}