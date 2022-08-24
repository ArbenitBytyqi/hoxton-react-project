export type Category ={
    id: number
    name: string
}

export type Movie = {
    id: number
    title: string
    description: string
    categoryId: number
    image: string
}