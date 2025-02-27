import Image from "next/image"
import Link from "next/link"

export default function ProductCard() {
    return (
        <Link
            href={'/'}
            className="bg-red-200"
        >
            
            <div className="flex m-auto">
                <div className="">
                    <Image
                        src={'/assets/no_bg_black_logo.png'}
                        alt="NADA!"
                        width={1920}
                        height={1080}
                        className=""
                    /> 
                </div>
            </div>    
        </Link>
    )
}