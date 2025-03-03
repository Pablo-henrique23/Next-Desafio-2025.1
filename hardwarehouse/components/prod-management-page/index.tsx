import Image from 'next/image';
export default function ProdManagementPage() {

    const produtos = [
        { id: 1, categoria: "GPU", nome: "NVIDIA RTX 4070", preco: "R$ 9999,99", imagem: "/assets/rtx4070.png" },
        { id: 2, categoria: "GPU", nome: "NVIDIA RTX 4070", preco: "R$ 9999,99", imagem: "/assets/rtx4070.png" },
        { id: 3, categoria: "GPU", nome: "NVIDIA RTX 4070", preco: "R$ 9999,99", imagem: "/assets/rtx4070.png" },
        { id: 4, categoria: "GPU", nome: "NVIDIA RTX 4070", preco: "R$ 9999,99", imagem: "/assets/rtx4070.png" },
        { id: 5, categoria: "GPU", nome: "NVIDIA RTX 4070", preco: "R$ 9999,99", imagem: "/assets/rtx4070.png" },
      ];

    return (
        <div id="container" className="flex flex-col md:px-4 justify-center bg-yellow-200 size-full md:m-6 md:rounded-[10px]">
            {/* parte de vima */}
            <div className='flex w-full justify-between items-center'>
                {/* titulo */}
                <h1 className='font-bold text-[#7B7B7B] text-xl'>Gerenciamento de Produtos</h1>
                {/* botao de novo */}
                <div className='flex justify-center bg-red-200 rounded-[10px] text-center gap-3 px-3 py-2'>
                    <Image
                        src={'/assets/plus.png'} /* teclado.jpg */
                        alt="Tesla A100"
                        width={1920}
                        height={1080}
                        className="md:size-7"
                    />
                    <p className='font-semibold text-xl'>Novo</p>
                </div>
            </div>
            {/* parte do meio */}
            <div id='tabela' className='overflow-x-auto'>
                <table className='w-full justify-around border-collapse'>
                    {/* parte de cima da tabela */}
                    <thead className='bg-blue-200'>
                        <tr>
                            <th className=''>ID</th>
                            <th className=''>Categoria</th>
                            <th className=''>Imagem</th>
                            <th className=''>Nome</th>
                            <th className=''>Preço</th>
                            <th className=''>Ações</th>
                        </tr>
                    </thead>
                    {/* meio da tabela */}
                    <tbody>
                        {produtos.map((produto) => (
                            <tr key={produto.id} className='border border-black'>
                                <td>{produto.id}</td>
                                <td>{produto.categoria}</td>
                                <td>
                                    <Image
                                        src={produto.imagem}
                                        alt={produto.nome}
                                        width={1920}
                                        height={1080}
                                        className="md:size-7"
                                    />
                                </td>
                                <td>{produto.nome}</td>
                                <td>{produto.preco}</td>
                                <td className='p-3 border border-gray-300 flex gap-2'>
                                    <button>
                                        
                                    </button>
                                    <button>

                                    </button>
                                    <button>

                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>	
    )
}