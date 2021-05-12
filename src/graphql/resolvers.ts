import * as product from '../entities/product/product.resolver'
import * as profile from '../entities/profile/profile.resolver'
import * as review from '../entities/review/review.resolver'

export default {
  Product: product.Product,
  Query: {
    products: product.getProducts,
    profile: profile.getProfile,
    reviews: review.getReviews,
  },
}
