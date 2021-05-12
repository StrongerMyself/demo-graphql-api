import fs from 'fs'
import path from 'path'
import {
  productModel,
  reviewModel,
  userModel
} from './models'

const users = Array(4).fill({}).map(userModel)
const products = Array(30).fill({}).map(productModel)
const reviews = Array(60).fill({}).map(reviewModel(users, products))

const dataBase = {
  profile: users[0],
  users,
  products,
  reviews,
}

const jsonDataBase = JSON.stringify(dataBase, null, 2)

const filePath = path.resolve(__dirname, 'db.json')

fs.writeFileSync(filePath, jsonDataBase)
