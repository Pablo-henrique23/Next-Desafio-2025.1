export type Produto = {
    id: number;
    name: string;
    preco: number;
    image: string;
    descricao: string;
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
    PC: 'Computador',
    NOTEBOOK: 'Notebook',
    GPU: 'Placa de Vídeo',
    CPU: 'Processador',
    COOLER: 'Cooler',
    SSD: 'SSDs',
    HDD: 'HDs',
    GABINETE: 'Gabinetes',
    RAM: 'Memórias RAM',
    PLACA_MAE: 'Placa-Mãe',
};