import { CommentContainer } from '@/microservice'
import { Container } from 'inversify'

const container = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton'
})
const commentContainer = new CommentContainer()
container.load(commentContainer)
/* TODO : go to single entrypoint needed to be implement */
container.bind(CommentContainer).toSelf()

export const globalContainer = container
