import { PORT, DEV, DB_PATH } from './config'
import express from 'express'
import cookieParser from 'cookie-parser'
import { ApolloServer } from 'apollo-server-express'
import jsonServer from 'json-server'

import schema from './graphql/schema'
import resolvers from './graphql/resolvers'

const app = express()
app.disable('x-powered-by')
app.use(cookieParser())

const restMiddleware = jsonServer.defaults()
const restRouter = jsonServer.router(DB_PATH)
app.use('/rest', restMiddleware, restRouter)

const start = async () => {
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: (req, reply) => ({
      dataLoaders: new WeakMap(),
    }),
    playground: DEV,
  });
  
  server.applyMiddleware({ app });
  
  app.listen(PORT, () => {
    console.log(`graphql server ready on port ${PORT}...`)
  })
}

start().catch((error) => {
  console.log(error)
  process.exit(1)
})
