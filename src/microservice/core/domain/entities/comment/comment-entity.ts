import { IComment } from '@interfaces/domain/entities/i-comment'
import { injectable } from 'inversify'

@injectable()
export class CommentEntity implements IComment {
  constructor(public _id: string, public author: string, public text: string) {}
}
