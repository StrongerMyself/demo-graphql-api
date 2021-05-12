import Faker from 'faker'

const getId = (index: number) => index + 1 

export const userModel = (_, index: number) => {
  return {
    id: getId(index), 
    name: Faker.name.firstName(),
  }
}

export const productModel = (_, index: number) => {
  return {
    id: getId(index),
    name: Faker.name.title(),
    description: Faker.lorem.paragraph(),
    amountFree: Faker.datatype.number(1000),
    price: Faker.datatype.float(10000),
    oldPrice: Faker.datatype.float(10000),
    discount: Faker.datatype.number(1000),
    isActive: Faker.datatype.boolean(),
    image: Faker.image.image(),
  }
}

export const reviewModel = (
  users: User[],
  products: Product[]
) => (_, index: number) => {
  return {
    id: getId(index),
    title: Faker.name.title(),
    description: Faker.lorem.paragraph(),
    rating: Faker.datatype.float(5),
    productId: products[Faker.datatype.number(products.length - 1)].id,
    userId: users[Faker.datatype.number(users.length - 1)].id
  }
}

export type User = ReturnType<typeof userModel>
export type Product = ReturnType<typeof productModel>
export type Review = ReturnType<typeof reviewModel>
