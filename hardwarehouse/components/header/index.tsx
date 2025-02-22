import Image from "next/image"
import Link from "next/link"

const links = [
    {href: '/1', label: '/1'},
    {href:'/2', label: '/2'},
]

export default function Header() {
    return (
        <header className="flex bg-[#9FA5AB] justify-center ">
            <div className="flex items-center justify-between flex-wrap w-full mx-10 ">
                <Link href="/" className="">
                    <Image
                        src={'/assets/no_bg_black_logo.png'}
                        alt="Logo"
                        width={100}
                        height={100}
                        className=""/>
                </Link>

                <form action="/" className="flex w-1/3 rounded-[8px] bg-white border border-black px-7 py-2">
                    <input type="text"
                    placeholder="Buscar"
                    className="w-full text-black focus:outline-none focus:ring-0 caret-black" />
                    <button type="submit" className="">
                        <Image
                        src={'/assets/lupa.png'}
                        alt="Confirmar busca"
                        width={30}
                        height={30}
                        />
                    </button>

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