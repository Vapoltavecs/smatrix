interface TBaseProduct {
    name: string,
    id: number,
    price: number,
    description?: string,
    weight?: number,
    unitType?: string
}

export type TProduct = TBaseProduct