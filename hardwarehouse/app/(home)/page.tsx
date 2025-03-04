import HeroSection from "@/components/hero-section"
import Carrossel from "@/components/carrossel"

const produtos_carrossel = [
  {id:1, nome: "NVIDIA RTX 4070", preco: 9999.99, imagem: "/assets/rtx4070.png", desc: "Mais um pouco e você acha algo que presta"},
  {id:2, nome: "AMD Ryzen 7", preco: 9999.99, imagem: "/assets/ryzen7.jpg", desc: "Quase consegue rodar Roblox" },
  {id:3, nome: "NVIDIA RTX 4070", preco: 9999.99, imagem: "/assets/rtx4070.png", desc: "Mais um pouco e você acha algo que presta"},
  {id:4, nome: "AMD Ryzen 7", preco: 9999.99, imagem: "/assets/ryzen7.jpg", desc: "Quase consegue rodar Roblox" },
  {id:5, nome: "Intel Core i5 10° Gen", preco: 9999.99, imagem: "/assets/corei510th.jpg", desc: "Intel Core i5 de 10 geração" },
  {id:6, nome: "AMD Ryzen 7", preco: 9999.99, imagem: "/assets/ryzen7.jpg", desc: "Quase consegue rodar Roblox" },
  {id:7, nome: "Intel Core i5 10° Gen", preco: 9999.99, imagem: "/assets/corei510th.jpg", desc: "Faz o L" }
];


export default function Home() {
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
