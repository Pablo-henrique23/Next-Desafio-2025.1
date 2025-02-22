import  Image  from "next/image"
export default function Footer(){
    return(
        <footer className="flex bg-[#9FA5AB] py-10 item-center justify-center justify-center">
            <div className="items-center flex item-center justify-center font-medium mx-10">
                <p>R. Falsa, 0 - Null<br></br>
                Juiz de Fora - MG, <br></br>
                12345-069
                </p>
            </div>
            <div className="items-center flex mx-auto">
                <Image
                    className=""
                    alt="Logo"
                    src={'/assets/no_bg_black_logo.png'}
                    height={200}
                    width={200}
                />

            </div>
            <div className="items-center flex mx-10">
                <Image
                    className=""
                    alt="Logo"
                    src={'/assets/pagamentos.png'}
                    height={250}
                    width={250}
                />
            </div>

        </footer>
    )
}