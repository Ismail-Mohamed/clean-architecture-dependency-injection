import { IApplication } from '@interfaces/web/express/i-app'
import { InversifyExpressServer } from 'inversify-express-utils'
import express from 'express'
import { globalContainer } from './di-global-container'
import { CommentController } from './controller/comment-controller'

export class App implements IApplication {
  async setup() {
    const server = new InversifyExpressServer(globalContainer)
    const commentCtrl = globalContainer.get(CommentController)

    const app = server
      .setConfig((app: express.Application) => {
        /* adding middlewares  */
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))
      })
      .build()

    app.get('/comment', commentCtrl.index)
    app.post('/comment', commentCtrl.add)

    app.listen(3001, () => {
      console.log(`server is running on http://localhost:${3001}/comment`)
    })
  }
}
