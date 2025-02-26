import Image from "next/image"
import Link from "next/link"
export default function Footer(){
    return(
        <footer className="flex gap-[40px] bg-[#B3C9E2] py-10 item-center justify-center">
            <div className="hidden md:flex text-[18px] items-center flex item-center justify-center font-semibold mx-10">
                <p>R. Falsa, 0 - Null<br></br>
                Juiz de Fora - MG, <br></br>
                12345-069
                </p>
            </div>
            <div className="items-center flex mx-auto">
                <Image
                    className="md:size-[180px]"
                    alt="Logo"
                    src={'/assets/no_bg_black_logo.png'}
                    height={200}
                    width={200}
                />

            </div>
            <div className="pr-5">
                <p className="text-[18px] font-semibold">Nossas redes sociais</p>
                <div className="flex mt-3 mb-3 gap-[20px] items-center justify-left">
                    <Link href="https://instagram.com/_pablo_henrique_23" target="_blank">
                        <Image
                            className="size-[30px] md:size-[35px]"
                            alt="Instagram"
                            src={"/assets/instagram_black.png"}
                            height={35}
                            width={35}/>
                    </Link>
                    <Link href="/">
                        <Image
                            className="size-[30px] md:size-[35px]"
                            alt="Facebook"
                            src={"/assets/facebook_black.png"}
                            height={35}
                            width={35}/>
                    </Link>
                    <Link href="/">
                        <Image
                            className="size-[30px] md:size-[35px]"
                            alt="Twitter"
                            src={"/assets/twitter.png"}
                            height={35}
                            width={35}/>
                    </Link>
                </div>
                <p className="text-[18px] font-semibold">Formas de pagamento</p>
                <Image
                    className="mt-3"
                    alt="Formas de pagamento"
                    src={"/assets/pagamentos.png"}
                    height={300}
                    width={300}
                />

            </div>

        </footer>
    )
}