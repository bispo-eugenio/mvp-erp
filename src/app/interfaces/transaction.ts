interface transactionInterface {
    id: string,
    productName: string,
    productQuantity: number,
    typeTransaction: string //Correto é fazer um enumerate, mas não vou usar. (devolução, venda, reabastecer)
    clientCnpj?: string,
}