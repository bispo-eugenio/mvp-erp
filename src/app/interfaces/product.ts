interface ProductInterface {
    id: string, //registra pt
    name: string,
    minQuantity: number | null,
    maxQuantity: number | null,
    quantity: number | null,
    price: number | null,
    profit: number | null,
    total: number | null //Calculo de lucro
}