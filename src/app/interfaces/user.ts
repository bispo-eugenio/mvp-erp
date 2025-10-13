interface Users extends Array<User> {}

interface User {
    email: string,
    name: string,
    cnpj: string,
    password: string,
    telefone?: string,
    endereco?: Endereco,
}

interface Endereco {
    street: string,
    zone: string,
    cep: string,
    placeNumber: string,
}