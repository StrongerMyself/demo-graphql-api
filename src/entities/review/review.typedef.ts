export default `#graphql
  type Review {
    id: ID
    title: String
    description: String
    rating: Float
    productId: ID
    # product: Product
    userId: ID
    # user: User
  }
`
