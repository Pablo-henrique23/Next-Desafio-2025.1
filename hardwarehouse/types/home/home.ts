export type Produto = {
    id: number;
    name: string;
    preco: number;
    image: string;
    descricao: string;
    categoria: string[];
    em_alta: boolean;
}

export const CATEGORIAS = {
    PC: 'PC',
    NOTEBOOK: 'NOTEBOOK',
    GPU: 'GPU',
    CPU: 'CPU',
    COOLER: 'COOLER',
    SSD: 'SSD',
    HDD: 'HDD',
    GABINETE: 'GABINETE',
    RAM: 'RAM',
    PLACA_MAE: 'PLACA_MAE',
};

export const CATEGORIAS_EXIBICAO = {
    PC: 'PC',
    CPU: 'CPUs',
    GPU: 'GPUs',
    RAM: 'RAM',
    SSD: 'SSDs',
    HDD: 'HDDs',
    COOLER: 'Coolers',
    NOTEBOOK: 'Notebook',
    GABINETE: 'Gabinetes',
    PLACA_MAE: 'Placas-mãe',
};