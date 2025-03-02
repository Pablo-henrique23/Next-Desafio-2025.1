import Image from "next/image"
import Link from "next/link"
export default function Footer(){
    return(
        <footer className="">
            <div className="flex w-full bg-[#B3C9E2] py-5 item-center text-center justify-between md:px-5">
                <div className="flex flex-col ml-3 gap-[20px] items-left justify-left">
                    <p className="text-[20px] font-semibold text-left w-36">Siga-nos!</p>
                    <Link href="/" className="flex items-center gap-[10px] text-[16px] text-black/75 font-semibold hover:scale-105 transition-all duration-300 ease-in-out">
                        <Image
                            src={'/assets/instagram.png'}
                            alt="Instagram"
                            width={1920}
                            height={1080}
                            className="flex size-7 rounded-full"/>
                        Instagram
                    </Link>
                    <Link href="/" className="flex items-center gap-[10px] text-[16px] text-black/75 font-semibold hover:scale-105 transition-all duration-300 ease-in-out">
                        <Image
                            src={'/assets/facebook.png'}
                            alt="Facebook"
                            width={1920}
                            height={1080}
                            className="flex size-7 rounded-full"/>
                        Facebook
                    </Link>
                    <Link href="/" className="flex items-center gap-[10px] text-[16px] text-black/75 font-semibold hover:scale-105 transition-all duration-300 ease-in-out">
                        <Image
                            src={'/assets/linkedin.png'}
                            alt="Linkedin"
                            width={1920}
                            height={1080}
                            className="flex size-7 rounded-full"/>
                        Linkedin
                    </Link>
                    <div className="hidden md:flex flex-col gap-4 text-left">
                        <p className="text-[20px] font-semibold">Formas de pagamento</p>
                        <Image
                            src={'/assets/pagamentos.png'}
                            alt="Formas de pagamento"
                            width={1920}
                            height={1080}
                            className="flex size-full"
                        />   
                    </div>
                </div>
                <div className="items-center flex">
                    <Image
                        className="size-sm md:size-72"
                        alt="Logo"
                        src={'/assets/no_bg_black_logo.png'}
                        height={1920}
                        width={1080}
                    />
                </div>
                <div className="hidden mr-3 md:flex gap-4 md:flex-col flex text-right">
                    <p className="text-[20px] font-semibold">
                        Fale conosco!
                    </p>
                    <p className="text-[18px] text-black/80">
                        manager@hardwarehouse.com
                    </p>
                    <p className="text-[18px] text-black/80">
                        (31) 94002-8922
                    </p>
                    <p id="endereço" className="text-[18px] text-black/80">
                        R. Falsa, 0 - Null<br></br>
                        Juiz de Fora - MG, <br></br>
                        12345-069
                    </p>
                </div>
            </div>
            {/* <div className="bg-[#075494] items-center text-center">
                <p className="text-white font-semibold py-2"></p>
            </div> */}
        </footer>
    )
}