export default `#graphql
  type Product {
    id: ID
    name: String
    description: String
    amountFree: Int
    price: Float
    oldPrice: Float
    discount: Int
    isActive: Boolean
    image: String
    reviews: [Review]
  }
`
