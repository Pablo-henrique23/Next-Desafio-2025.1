import { Categoria, PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
    const salt = 10;
    const pablo = await prisma.user.create({
        data: {
            name: "Pablo",
            email: "pablo@gmail.com",
            password: await bcrypt.hash('admin', salt),
            role: Role.ADMIN
        }
    })
    const pedro = await prisma.user.create({
        data:{
            name: 'Pedro',
            email: 'pedro@gmail.com',
            password: await bcrypt.hash('pedro', salt),
            role: Role.USER
        }
    })

    const gpu1 = await prisma.produto.create({
        data: {
            name: "NVIDIA RTX 4070",
            descricao: "GPU boa e consideravelmente nova.",
            preco: 5039.10,
            image: "/assets/rtx4070.png",
            categoria: [Categoria.GPU],
            em_alta: true
        }
    })
    const gpu2 = await prisma.produto.create({
        data: {
            name: "AMD Radeon RX 6600",
            descricao: "Placa de video AMD com 8GB de VRAM, GDDR6, 128-Bit.",
            preco: 1839.00,
            image: "/assets/rx6600.jpg",
            categoria: [Categoria.GPU]
        }
    })
    const cpu1 = await prisma.produto.create({
        data: {
            name: "AMD Ryzen 7 5700X",
            descricao: "Processador AMD com 8 cores e 16 threads 3.7GHz (4.5GHz Turbo).",
            preco: 1125.08,
            image: "/assets/ryzen7.jpg",
            categoria: [Categoria.CPU],
            em_alta: true
        }
    })
    const cpu2 = await prisma.produto.create({
        data: {
            name: "Intel Core i5 10400F",
            descricao: "Processador Intel com 6 cores e 12 threads 2.9GHz (4.3GHz Turbo).",
            preco: 599.99,
            image: "/assets/corei510th.jpg",
            categoria: [Categoria.CPU]
        }
    })
    const pcgamer1 = await prisma.produto.create({
        data: {
            name: "PC Gamer Mancer",
            descricao: "PC Gamer Mancer, AMD Ryzen 5 5500, Radeon RX 6600 8GB, 16GB DDR4, SSD 480GB",
            preco: 5071.77,
            image: "/assets/pcgamer1.jpg",
            categoria: [Categoria.PC]
        }
    })
    const pcgamer2 = await prisma.produto.create({
        data: {
            name: "PC Gamer NEOLOGIC",
            descricao: "PC GAMER INTEL I7 12700F 16GB DDR4 (RTX 3060 12GB) SSD 1TB M.2 600W 80 PLUS, NEOLOGIC RP BOX - NLI84430",
            preco: 7499.99,
            image: "/assets/pcgamer2.jpg",
            categoria: [Categoria.PC],
            em_alta: true
        }
    })
    const mae1 = await prisma.produto.create({
        data: {
            name: "Placa mãe GIGABYTE B450",
            descricao: "PLACA-MÃE GIGABYTE B450 GAMING, AM4 2XDDR4(MÁX 64GB),4 SATA,1 M.2, HDMI/VGA/DVI-D 2XUSB 3.2, 4XUSB 2.0",
            preco: 492.90,
            image: "/assets/b450.jpg",
            categoria: [Categoria.PLACA_MAE]
        }
    })
    const mae2 = await prisma.produto.create({
        data: {
            name: "Placa mãe GIGABYTE B650M D3HP",
            descricao: "Placa Mãe Gigabyte B650M D3HP (AM5/4xDDR5/HDMI/DP/USB 3.2/M.2)",
            preco: 899.90,
            image: "/assets/b650m.jpg",
            categoria: [Categoria.PLACA_MAE],
            em_alta: true
        }
    })
    const ssd1 = await prisma.produto.create({
        data: {
            name: "SSD Kingston NVMe M.2 1TB",
            descricao: "SSD Kingston NV2 1TB NVMe M.2 2280 (Leitura até 3500MB/s e Gravação até 2100MB/s)",
            preco: 445.00,
            image: "/assets/m-2-2280.jpg",
            categoria: [Categoria.SSD],
            em_alta: true
        }
    })
    const ssd2 = await prisma.produto.create({
        data: {
            name: "SSD Sandisk Plus - 500GB NVMe M.2",
            descricao: "SSD Sandisk Plus - 500GB, NVMe, M.2 2280, Leitura até 2400MB/s, Gravação até 1500MB/s",
            preco: 249.89,
            image: "/assets/ssd2.jpg",
            categoria: [Categoria.SSD]
        }
    })
    const hd1 = await prisma.produto.create({
        data: {
            name: "HDD Seagate 6TB",
            descricao: 'HDD Servidor Seagate Exos 7E10 6TB SATA 6GB/s 7200RPM 256MB 512N 3.5"',
            preco: 2460.41,
            image: "/assets/hdseagate.jpg",
            categoria: [Categoria.HDD]
        }
    })
    const hd2 = await prisma.produto.create({
        data: {
            name: "HDD Seagate Barracuda Pro Performance 1TB",
            descricao: 'Seagate Disco rígido interno Barracuda Pro Performance SATA HDD 1TB 7200RPM 6Gb/s 128MB cache 2,5 polegadas (ST1000LM049)',
            preco: 310.00,
            image: "/assets/hd2.jpg",
            categoria: [Categoria.HDD]
        }
    })
    const cooler1 = await prisma.produto.create({
        data: {
            name: "Thermalright Assassin X 120 REFINED SE PLUS",
            descricao: "Cooler para processador Thermalright Assassin X 120 REFINED SE PLUS 4 pinos",
            preco: 176.11,
            image: "/assets/cooler.jpg",
            categoria: [Categoria.COOLER]
        }
    })
    const cooler2 = await prisma.produto.create({
        data: {
            name: "Kit com 3 Cooler Rise Mode Smart 120mm",
            descricao: "Kit Com 3 Ventoinhas Rise Mode Smart, 120mm, RGB, Preto - RM-FN-02-RGB",
            preco: 105.87,
            image: "/assets/cooler2.jpg",
            categoria: [Categoria.COOLER]
        }
    })
    const notebook1 = await prisma.produto.create({
        data: {
            name: "Samsung Galaxy Book4",
            descricao: "Samsung Galaxy Book4 Intel® Core™ i3-1315U, Windows 11 Home, 8GB, 256GB SSD, UHD Graphics, 15.6'' Full HD LED, 1.55kg*. ",
            preco: 2603.07,
            image: "/assets/notebook.jpg",
            categoria: [Categoria.NOTEBOOK],
            em_alta: true
        }
    })
    const notebook2 = await prisma.produto.create({
        data: {
            name: "Acer Aspire 5 A515-57-76MR",
            descricao: 'Notebook Acer Aspire 5 Intel Core i7-12650H, 8GB RAM, SSD 512GB, 15.6" FHD, Windows 11 Home, Cinza - A515-57-76MR',
            preco: 4333.32,
            image: "/assets/notebook2.jpg",
            categoria: [Categoria.NOTEBOOK]
        }
    })
    const gabinete1 = await prisma.produto.create({
        data: {
            name: "Gabinete Gamer Mancer Hexer",
            descricao: "Gabinete Gamer Mancer Hexer | Rainbow | Mid-Tower | Lateral de Vidro | Com 3 Fans | Preto | MCR-HEX-RB01",
            preco: 258.90,
            image: "/assets/gabinete.jpg",
            categoria: [Categoria.GABINETE]
        }
    })
    const gabinete2 = await prisma.produto.create({
        data: {
            name: "Gabinete Gamer Ryvel Cube Black",
            descricao: "Gabinete Gamer Ryvel Cube Black, Mid Tower, Preto, Sem Fonte, Sem Fans, Ry-gb-cb-bl",
            preco: 748.75,
            image: "/assets/close.png",
            categoria: [Categoria.GABINETE]
        }
    })
    const gabinete3 = await prisma.produto.create({
        data: {
            name: "Gabinete Gamer Ryvel Cube Screen Black",
            descricao: "Gabinete Gamer Ryvel Cube Screen Black - Ry-gb-cbs-bl U Unica Unica",
            preco: 2199.00,
            image: "/assets/gabinete3.png",
            categoria: [Categoria.GABINETE]
        }
    })
    const ram1 = await prisma.produto.create({
        data: {
            name: "Midgard 16GB DDR4 (1X16GB)",
            descricao: "Memoria Midgard 16GB (1X16GB) DDR4 DIMM 3200MHZ XMP 2.0 CL16 1,35V Para Desktop",
            preco: 312.90,
            image: "/assets/ram1.jpg",
            categoria: [Categoria.RAM],
            em_alta: true
        }
    })
    const ram2 = await prisma.produto.create({
        data: {
            name: "Kingston Fury Beast 8GB DDR4",
            descricao: "Memória RAM Kingston Fury Beast, 8GB, 3200MHz, DDR4, CL16, Preto - KF432C16BB/8",
            preco: 210.77,
            image: "/assets/ram2.jpg",
            categoria: [Categoria.RAM]
        }
    })
    console.log("Seed concluído!");
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });