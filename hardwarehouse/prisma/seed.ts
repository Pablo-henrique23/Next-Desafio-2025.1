import { Categoria, PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const pablo = await prisma.user.create({
        data: {
            name: "Pablo",
            email: "pablo@gmail.com",
            password: "admin",
            role: "ADMIN"
        }
    })
    const pedro = await prisma.user.create({
        data:{
            name: 'Pedro',
            email: 'pedro@gmail.com',
            password: 'pedro',
            role: 'USER'
        }
    })

    const rtx4070 = await prisma.produto.create({
        data: {
            name: "NVIDIA RTX 4070",
            descricao: "GPU boa e consideravelmente nova.",
            preco: 5039.10,
            image: "/assets/rtx4070.png",
            categoria: [Categoria.GPU]
        }
    })
    const ryzen7 = await prisma.produto.create({
        data: {
            name: "AMD Ryzen 7 5700X",
            descricao: "Processador AMD com 8 cores e 16 threads 3.7GHz (4.5GHz Turbo).",
            preco: 1125.08,
            image: "/assets/ryzen7.jpg",
            categoria: [Categoria.CPU]
        }
    })
    const corei510th = await prisma.produto.create({
        data: {
            name: "Intel Core i5 10400F",
            descricao: "Processador Intel com 6 cores e 12 threads 2.9GHz (4.3GHz Turbo).",
            preco: 9999.99,
            image: "/assets/corei510th.jpg",
            categoria: [Categoria.CPU]
        }
    })
    const rx6600 = await prisma.produto.create({
        data: {
            name: "AMD Radeon RX 6600",
            descricao: "Placa de video AMD com 8GB de VRAM, GDDR6, 128-Bit.",
            preco: 1839.00,
            image: "/assets/rx6600.jpg",
            categoria: [Categoria.GPU]
        }
    })
    const pcgamer1 = await prisma.produto.create({
        data: {
            name: "PC Gamer 1",
            descricao: "PC Gamer Mancer, AMD Ryzen 5 5500, Radeon RX 6600 8GB, 16GB DDR4, SSD 480GB",
            preco: 5071.77,
            image: "/assets/pcgamer1.jpg",
            categoria: [Categoria.PC]
        }
    })
    const b450 = await prisma.produto.create({
        data: {
            name: "GIGABYTEAMD B450",
            descricao: "PLACA-MÃE GIGABYTE B450 GAMING, AM4 2XDDR4(MÁX 64GB),4 SATA,1 M.2, HDMI/VGA/DVI-D 2XUSB 3.2, 4XUSB 2.0",
            preco: 492.90,
            image: "/assets/b450.jpg",
            categoria: [Categoria.PLACA_MAE]
        }
    })
    const m22280 = await prisma.produto.create({
        data: {
            name: "SSD Kingston NVMe M.2 1TB",
            descricao: "SSD Kingston NV2 1TB NVMe M.2 2280 (Leitura até 3500MB/s e Gravação até 2100MB/s)",
            preco: 445.00,
            image: "/assets/m-2-2280.jpg",
            categoria: [Categoria.SSD]
        }
    })
    const hdseagate = await prisma.produto.create({
        data: {
            name: "HDD Seagate 6TB",
            descricao: 'HDD Servidor Seagate Exos 7E10 6TB SATA 6GB/s 7200RPM 256MB 512N 3.5"',
            preco: 2460.41,
            image: "/assets/hdseagate.jpg",
            categoria: [Categoria.HDD]
        }
    })
    const cooler = await prisma.produto.create({
        data: {
            name: "Thermalright Assassin X 120 REFINED SE PLUS",
            descricao: "Cooler para processador Thermalright Assassin X 120 REFINED SE PLUS 4 pinos",
            preco: 176.11,
            image: "/assets/cooler.jpg",
            categoria: [Categoria.COOLER]
        }
    })
    const notebook = await prisma.produto.create({
        data: {
            name: "Samsung Galaxy Book4",
            descricao: "Samsung Galaxy Book4 Intel® Core™ i3-1315U, Windows 11 Home, 8GB, 256GB SSD, UHD Graphics, 15.6'' Full HD LED, 1.55kg*. ",
            preco: 2603.07,
            image: "/assets/notebook.jpg",
            categoria: [Categoria.NOTEBOOK]
        }
    })
    const gabinete = await prisma.produto.create({
        data: {
            name: "Gabinete Gamer Mancer Hexer",
            descricao: "Gabinete Gamer Mancer Hexer | Rainbow | Mid-Tower | Lateral de Vidro | Com 3 Fans | Preto | MCR-HEX-RB01",
            preco: 258.90,
            image: "/assets/gabinete.jpg",
            categoria: [Categoria.GABINETE]
        }
    })
    const ram1 = await prisma.produto.create({
        data: {
            name: "Midgard 16GB (1X16GB) DDR4",
            descricao: "Memoria Midgard 16GB (1X16GB) DDR4 DIMM 3200MHZ XMP 2.0 CL16 1,35V Para Desktop",
            preco: 312.90,
            image: "/assets/ram1.jpg",
            categoria: [Categoria.RAM]
        }
    })
}
