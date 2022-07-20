import 'reflect-metadata'
import { App } from './express-app'

import './controller/comment-controller'

export async function server() {
  /* TODO: don't forget to remove this */
  console.clear()
  new App().setup()
}

server()
