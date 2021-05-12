import product from '../entities/product/product.typedef'
import profile from '../entities/profile/profile.typedef'
import review from '../entities/review/review.typedef'

export default `#graphql
  ${product}
  ${profile}
  ${review}

  type Query {
    products(id: [ID]): [Product]
    profile: Profile
    reviews(id: [ID], productId: [ID]): [Review]
  }

  # type Mutation {}
  # type Subscription {}
`

