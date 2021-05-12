import { getRestApi } from '../../rest/service'

interface Response {
  data: MyGraphQL.Profile[]
}

export const getProfile = async (_, params, context) => {
  const response = await getRestApi<Response>('/profile', params)
  return response.data
}
