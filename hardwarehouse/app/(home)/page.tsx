import HeroSection from "@/components/hero-section"
import Carrossel from "@/components/carrossel"
import { getEmAlta } from "@/actions/home/actions"

export default async function Home() {
  const produtos_carrossel = await getEmAlta()

  return (
    <div id='general-container'>
      <HeroSection/>
      <div className="flex flex-col mx-8 py-[15px]">
        <p className="font-semibold text-center text-xl">EM ALTA</p>
        <span className="h-[2px] bg-[#B3C9E2]"></span>
      </div>
      <div className="flex w-full justify-center" >
        <Carrossel produtos={produtos_carrossel} autoSlide={true} intervalo={3000}>
        </Carrossel>
      </div>
    </div>
  )
}
