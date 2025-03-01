import ProductCard from "@/components/product-card"
import HeroSection from "@/components/hero-section"
import Carrossel from "@/components/carrossel"

const produtos_carrossel = [
  {id:1, nome: "RTX 4070", preco: 9999.99, imagem: "/assets/rtx4070.png", desc: "Descrição descrição descrição"  },
  {id:2, nome: "Ryzen 7", preco: 9999.99, imagem: "/assets/ryzen7.jpg", desc: "Descrição descrição descrição" },
  {id:3, nome: "RTX 4070", preco: 9999.99, imagem: "/assets/rtx4070.png", desc: "Descrição descrição descrição"  },
  {id:4, nome: "Ryzen 7", preco: 9999.99, imagem: "/assets/ryzen7.jpg", desc: "Descrição descrição descrição" },
  {id:5, nome: "Core i5 10° Gen", preco: 9999.99, imagem: "/assets/corei510th.jpg", desc: "Descrição descrição descrição" },
  {id:6, nome: "Ryzen 7", preco: 9999.99, imagem: "/assets/ryzen7.jpg", desc: "Descrição descrição descrição" },
  {id:7, nome: "Core i5 10° Gen", preco: 9999.99, imagem: "/assets/corei510th.jpg", desc: "Descrição descrição descrição" }
];


export default function Home() {
  return (
    <div id='general-container'>
      <HeroSection/>
      <div className="flex flex-col mx-8 py-[15px]">
        <p className="font-semibold">Produtos em alta: </p>
        <span className="h-[1px] bg-[#9FA5AB]"></span>
      </div>
      <div className="flex w-full justify-center" >
        <Carrossel produtos={produtos_carrossel}>
        </Carrossel>
      </div>
    </div>
  )
}
