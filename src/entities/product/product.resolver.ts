import { getRestApi } from '../../rest/service'
import { getDataLoader } from '../../graphql/data-loader'
import { getReviews } from '../review/review.resolver'

interface Params {
  id?: string[]
}

interface Response {
  data: MyGraphQL.Product[]
}

export const Product = {
  reviews: async (source, params, context, info) => {
    const dataLoader = getDataLoader(context, info, async (productId = []) => {
      const reviews = await getReviews(source, { productId }, context, info)
      const reviewsByParent = productId.map(id => (
        reviews.filter(item => item.productId === id)
      ))
      return reviewsByParent
    })
    const reviews = await dataLoader.load(source.id)
    return reviews
  }
}

export const getProducts = async (source, params: Params, context, info) => {
  const response = await getRestApi<Response, Params>('/products', params)
  return response.data
}
