import { getRestApi } from '../../rest/service'

interface Params {
  id?: string[]
  productId?: string[]
}

interface Response {
  data: MyGraphQL.Review[]
}

export const getReviews = async (source, params: Params, context, info) => {
  const response = await getRestApi<Response, Params>('/reviews', params)
  return response.data
}